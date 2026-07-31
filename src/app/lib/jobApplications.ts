import { Forminit } from "forminit";
import { FORMINIT_CONFIG } from "./forminit";

export interface JobApplicationPayload {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  position: string;
  message: string;
  resume: File | null;
}

const forminit = new Forminit();

/** Submits the job application to Forminit, including the resume file. */
export async function submitJobApplication(payload: JobApplicationPayload): Promise<void> {
  const formData = new FormData();
  formData.append("fi-sender-fullName", payload.name);
  formData.append("fi-sender-email", payload.email);
  // Phone and LinkedIn are sent as plain text blocks (not "phone"/"url" blocks) on
  // purpose: Forminit's typed "phone" and "url" blocks enforce strict formatting
  // server-side (e.g. LinkedIn must be a full https:// URL, phone must match a
  // specific pattern) and will silently reject the whole submission if a real
  // applicant types something slightly different, like "linkedin.com/in/jane" or
  // "555-0100". These are optional, human-readable fields, so plain text is safer.
  formData.append("fi-text-phone", payload.phone || "Not provided");
  formData.append("fi-text-linkedin", payload.linkedin || "Not provided");
  formData.append("fi-text-position", payload.position);
  formData.append("fi-text-message", payload.message);
  if (payload.resume) {
    formData.append("fi-file-resume", payload.resume, payload.resume.name);
  }

  const { error } = await forminit.submit(FORMINIT_CONFIG.FORM_ID, formData);
  if (error) {
    throw new Error(error.message || "Forminit submission failed");
  }
}
