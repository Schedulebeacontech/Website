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
  formData.append("fi-phone-phone", payload.phone);
  formData.append("fi-url-linkedin", payload.linkedin);
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
