import { motion } from "motion/react";
import { ArrowLeft, Clock, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router";
import { JobApplicationForm } from "./JobApplicationForm";
import logoIcon from "../../assets/logo-watermark-hires.png";

export function ApplyEngineeringLead() {
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
              className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-5"
              style={{ fontWeight: 600 }}
            >
              Applying for
            </span>
            <h1 className="text-4xl lg:text-5xl text-[var(--midnight-blue)] mb-5" style={{ lineHeight: 1.1 }}>
              Engineering Lead
            </h1>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--midnight-blue)]/65 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                ~10–20 hrs/week, part-time, remote
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                Remote — US time zones preferred
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                Equity and/or cash, flexible structure
              </div>
            </div>

            <p className="text-[var(--midnight-blue)]/55">
              Want the full role description first?{" "}
              <Link to="/careers" className="underline underline-offset-2" style={{ fontWeight: 600 }}>
                Read the complete posting
              </Link>{" "}
              before applying.
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
              position="Engineering Lead"
              confirmationNote="Thanks for applying to be our Engineering Lead. We'll review your background and reach out if it looks like a fit."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
