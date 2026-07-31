/**
 * ─────────────────────────────────────────────────────────────────────────────
 * EmailJS Configuration — Schedule Beacon
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * HOW TO SET UP (one-time, ~10 minutes):
 *
 * 1. Create a free account at https://www.emailjs.com
 *
 * 2. Add an Email Service:
 *    → Dashboard → Email Services → Add New Service
 *    → Connect Gmail / Outlook / etc. for info@schedulebeacon.com
 *    → Copy the Service ID and paste below as SERVICE_ID
 *
 * 3. Create a template for the CONTACT form:
 *    → Dashboard → Email Templates → Create New Template
 *    → Set "To email" to: info@schedulebeacon.com
 *    → Use these variables in your template body:
 *
 *        From: {{from_name}} ({{from_email}})
 *        Phone: {{phone}}
 *        District: {{district}}
 *        Subject: {{subject}}
 *        Message: {{message}}
 *
 *    → Copy the Template ID and paste below as CONTACT_TEMPLATE_ID
 *
 * 4. Create a template for the DEMO REQUEST form:
 *    → Dashboard → Email Templates → Create New Template
 *    → Set "To email" to: info@schedulebeacon.com
 *    → Use these variables in your template body:
 *
 *        From: {{from_name}} ({{from_email}})
 *        Phone: {{phone}}
 *        District: {{district}}
 *        Role: {{role}}
 *        Students: {{student_count}}
 *        Timeline: {{timeline}}
 *        Challenge: {{message}}
 *
 *    → Copy the Template ID and paste below as DEMO_TEMPLATE_ID
 *
 * 5. Get your Public Key:
 *    → Dashboard → Account → General → Public Key
 *    → Paste below as PUBLIC_KEY
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const EMAILJS_CONFIG = {
  // 🟢 ACTION REQUIRED: Paste your Service ID from EmailJS here
  SERVICE_ID: "service_d9hwuag",

  // ✅ Updated with your Contact form Template ID
  CONTACT_TEMPLATE_ID: "template_t9nareh",

  // ✅ Updated with your Demo Request Template ID
  DEMO_TEMPLATE_ID: "template_0nngotd",

  // ✅ Updated with your Public Key
  PUBLIC_KEY: "5oZvqB3EBIcqZsJxK",
};

/** Returns true if EmailJS has been configured with real credentials. */
export function isEmailJSConfigured(): boolean {
  return (
    !EMAILJS_CONFIG.SERVICE_ID.startsWith("YOUR_") &&
    !EMAILJS_CONFIG.PUBLIC_KEY.startsWith("YOUR_")
  );
}