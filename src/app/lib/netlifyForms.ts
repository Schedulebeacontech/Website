/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Netlify Forms — Job Applications
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This site is hosted on Netlify, which can receive form submissions
 * (including file uploads, like resumes) with no extra service or account
 * needed. Submissions show up under Site > Forms in the Netlify dashboard,
 * where you can also turn on email notifications for new submissions.
 *
 * ONE-TIME SETUP (~2 minutes):
 *   1. Deploy this site (form detection happens automatically at build time
 *      via the hidden form in index.html — nothing to configure there).
 *   2. In the Netlify dashboard, go to Site configuration > Forms >
 *      Form notifications > Add notification > Email notification.
 *   3. Set it to notify info@schedulebeacon.com whenever the
 *      "job-application" form receives a submission.
 *
 * That's it — no template IDs, no API keys. Resumes and all other fields
 * will appear directly in the Netlify submission (and in the notification
 * email, as a link to the uploaded file).
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface JobApplicationPayload {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  position: string;
  message: string;
  resume: File | null;
}

/** Submits the job application form to Netlify Forms, including the resume file. */
export async function submitJobApplication(payload: JobApplicationPayload): Promise<void> {
  const formData = new FormData();
  formData.append("form-name", "job-application");
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("phone", payload.phone);
  formData.append("linkedin", payload.linkedin);
  formData.append("position", payload.position);
  formData.append("message", payload.message);
  if (payload.resume) {
    formData.append("resume", payload.resume, payload.resume.name);
  }

  const response = await fetch("/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Netlify Forms submission failed with status ${response.status}`);
  }
}
