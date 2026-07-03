import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schema";
import prisma from "@/lib/prisma";
import { sendLeadEmail } from "@/lib/email";

// Simple in-memory rate limiter
// In production Edge environments, prefer Redis/Upstash
const rateLimitCache = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitCache.get(ip);

  if (!record) {
    rateLimitCache.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitCache.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown_ip";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await request.json();

    // 3. Validation with Zod
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid data provided.", details: result.error.issues },
        { status: 400 }
      );
    }

    const data = result.data;

    // 4. Spam Protection: Honeypot check
    // If the hidden '_gotcha' field is filled out, silently accept to fool the bot, but drop the lead.
    if (data._gotcha && data._gotcha.length > 0) {
      console.warn(`Spam detected from IP: ${ip}. Honeypot triggered.`);
      return NextResponse.json({ success: true }, { status: 200 }); // Silent drop
    }

    // 5. Database Transaction
    const newLead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        businessName: data.businessName,
      },
    });

    // 6. Email Dispatch
    await sendLeadEmail({
      name: newLead.name,
      email: newLead.email,
      phone: newLead.phone,
      businessName: newLead.businessName || undefined,
    });

    // 7. Return Success
    return NextResponse.json(
      { success: true, message: "Inquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
