import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  countryCode: z.string().default("+91"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  businessName: z.string().optional(),
  _gotcha: z.string().max(0, "Invalid submission").optional(), // Honeypot field
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
