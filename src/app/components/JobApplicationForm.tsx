import { motion } from "motion/react";
import { Send, Loader2, AlertCircle, Upload, FileText, X } from "lucide-react";
import { useRef, useState } from "react";
import { submitJobApplication } from "../lib/netlifyForms";

const MAX_RESUME_BYTES = 8 * 1024 * 1024; // Netlify Forms request size cap

interface JobApplicationFormProps {
  /** Value stored in the "position" field of the submission. */
  position: string;
  /** Copy shown on the confirmation screen after a successful submission. */
  confirmationNote?: string;
}

export function JobApplicationForm({ position, confirmationNote }: JobApplicationFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setError(null);
    if (file && file.size > MAX_RESUME_BYTES) {
      setError("That file is larger than 8 MB. Please upload a smaller file (PDF works best).");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setResume(null);
      return;
    }
    setResume(file);
  };

  const clearFile = () => {
    setResume(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await submitJobApplication({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        linkedin: formData.linkedin,
        position,
        message: formData.message,
        resume,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Netlify Forms error:", err);
      setError(
        "Something went wrong submitting your application. Please try again, or email us directly at info@schedulebeacon.com."
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl text-[var(--midnight-blue)] mb-3">Application received!</h3>
        <p className="text-[var(--midnight-blue)]/55 max-w-md mx-auto">
          {confirmationNote ?? "Thanks for applying. We'll review your application and be in touch soon."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
            LinkedIn / Portfolio
          </label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/janesmith"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
          Resume *
        </label>
        {resume ? (
          <div className="flex items-center justify-between gap-3 px-4 py-3 border border-gray-200 rounded-xl bg-[var(--soft-grey)]">
            <div className="flex items-center gap-2.5 min-w-0">
              <FileText className="w-4 h-4 text-[var(--midnight-blue)]/60 shrink-0" />
              <span className="text-sm text-[var(--midnight-blue)] truncate">{resume.name}</span>
              <span className="text-xs text-[var(--midnight-blue)]/40 shrink-0">
                ({(resume.size / 1024 / 1024).toFixed(1)} MB)
              </span>
            </div>
            <button
              type="button"
              onClick={clearFile}
              className="text-[var(--midnight-blue)]/40 hover:text-[var(--midnight-blue)] shrink-0"
              aria-label="Remove file"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className="flex items-center justify-center gap-2.5 px-4 py-6 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[var(--university-gold)] hover:bg-[var(--university-gold)]/5 transition-all">
            <Upload className="w-4 h-4 text-[var(--midnight-blue)]/50" />
            <span className="text-sm text-[var(--midnight-blue)]/60">
              Click to upload your resume <span className="text-[var(--midnight-blue)]/35">(PDF or Word, up to 8 MB)</span>
            </span>
            <input
              ref={fileInputRef}
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      <div>
        <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
          Why Schedule Beacon? *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your background and why you're interested..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300 resize-none"
        />
      </div>

      {error && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[var(--midnight-blue)] text-white py-4 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontWeight: 700 }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            Submit Application
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
