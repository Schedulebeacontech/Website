import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { JobApplicationForm } from "./JobApplicationForm";
import logoIcon from "../../assets/logo-watermark-hires.png";

export function ApplyGeneralInterest() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--midnight-blue) 1px, transparent 1px), linear-gradient(90deg, var(--midnight-blue) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[360px] pointer-events-none select-none"
          style={{ mixBlendMode: "multiply", opacity: 0.06 }}
        />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)] transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to careers
            </Link>

            <span
              className="inline-flex items-center gap-1.5 text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-5"
              style={{ fontWeight: 600 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              General Interest
            </span>
            <h1 className="text-4xl lg:text-5xl text-[var(--midnight-blue)] mb-5" style={{ lineHeight: 1.1 }}>
              Get on our radar
            </h1>
            <p className="text-lg text-[var(--midnight-blue)]/55">
              No open role fits perfectly yet? That's okay. We're a small, growing team, and we'd rather meet great
              people early than miss them later. Tell us about yourself below and we'll reach out when something
              opens up that matches what you're looking for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <JobApplicationForm
              position="General Interest"
              confirmationNote="Thanks for reaching out. We'll keep your information on file and get in touch when a fitting opportunity comes up."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
