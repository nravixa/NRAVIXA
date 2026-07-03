// Abstract Email Provider Interface
export interface EmailPayload {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
}

export async function sendLeadEmail(payload: EmailPayload) {
  const provider = process.env.EMAIL_PROVIDER || "console";

  switch (provider) {
    case "resend":
      await sendViaResend(payload);
      break;
    case "emailjs":
      await sendViaEmailJS(payload);
      break;
    case "formsubmit":
      await sendViaFormSubmit(payload);
      break;
    case "console":
    default:
      console.log("Mock Email Sent (Provider: Console):", payload);
      break;
  }
}

// Vendor-specific dispatchers

async function sendViaResend(payload: EmailPayload) {
  // Requires 'resend' package and RESEND_API_KEY
  console.log("Simulating Resend Dispatch...", payload);
  // Implementation would go here:
  // resend.emails.send({ ... })
}

async function sendViaEmailJS(payload: EmailPayload) {
  // EmailJS logic using REST API
  console.log("Simulating EmailJS Dispatch...", payload);
}

async function sendViaFormSubmit(payload: EmailPayload) {
  // FormSubmit logic using REST API
  console.log("Simulating FormSubmit Dispatch...", payload);
}
