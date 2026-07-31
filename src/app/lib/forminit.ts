/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Forminit Configuration — Job Applications
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Forminit is a free, hosting-independent form backend (formerly Getform.io).
 * We're using it here specifically because its free plan includes real file
 * uploads (50 MB storage) at no cost, unlike Netlify Forms or Web3Forms, which
 * both require a paid plan for file uploads.
 *
 * HOW TO SET UP (one-time, ~5 minutes, no credit card required):
 *
 * 1. Create a free account at https://forminit.com
 *
 * 2. Create a new form from the Forminit dashboard.
 *    → Name it something like "Job Applications"
 *    → Set the notification email to: info@schedulebeacon.com
 *    → Set authentication mode to "Public" (required for client-side/browser
 *      submissions like this site uses)
 *
 * 3. Copy the Form ID shown in the dashboard (looks like "frm_abc123xyz")
 *    and paste it below as FORM_ID.
 *
 * That's it. Submissions — including the uploaded resume — will show up in
 * your Forminit dashboard, and you'll get an email notification for each one.
 *
 * Free plan limits: 50 submissions/month, 50 MB total file storage, 30-day
 * submission archive. If applications pick up, Forminit's Pro plan
 * ($19/month) raises those limits significantly.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const FORMINIT_CONFIG = {
  // ✅ Updated with your Forminit Form ID
  FORM_ID: "eppwepfpriv",
};

/** Returns true if Forminit has been configured with a real Form ID. */
export function isForminitConfigured(): boolean {
  return !FORMINIT_CONFIG.FORM_ID.startsWith("YOUR_");
}
