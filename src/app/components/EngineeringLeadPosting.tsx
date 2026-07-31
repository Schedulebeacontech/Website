import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router";
import { openRoles } from "../data/openRoles";
import logoIcon from "../../assets/logo-watermark-hires.png";

const role = openRoles.find((r) => r.slug === "engineering-lead")!;

export function EngineeringLeadPosting() {
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
              className="inline-flex items-center gap-1.5 text-sm text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)] transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to careers
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="inline-block text-xs bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-3 py-1 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {role.department}
              </span>
              <span
                className="inline-block text-xs bg-[var(--soft-grey)] text-[var(--midnight-blue)]/60 px-3 py-1 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {role.commitment}
              </span>
              <span
                className="inline-block text-xs bg-[var(--soft-grey)] text-[var(--midnight-blue)]/60 px-3 py-1 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {role.locationType}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl text-[var(--midnight-blue)] mb-2" style={{ lineHeight: 1.1 }}>
              {role.title}
            </h1>
            <p className="text-[var(--midnight-blue)]/50 mb-5">{role.company}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--midnight-blue)]/65 mb-7">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                {role.hours}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                {role.location}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[var(--midnight-blue)]/40" />
                {role.compensation}
              </div>
            </div>

            <Link
              to={role.applyPath}
              className="inline-flex items-center gap-2 bg-[var(--midnight-blue)] text-white px-6 py-3.5 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-lg"
              style={{ fontWeight: 700 }}
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Full Posting ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.8 }}>
              {role.intro}
            </p>
          </motion.div>

          <div className="space-y-8">
            {role.sections.map((section) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h2
                  className="text-[var(--midnight-blue)] text-sm mb-3 uppercase tracking-wide"
                  style={{ fontWeight: 700, letterSpacing: "0.06em", fontSize: "0.75rem" }}
                >
                  {section.heading}
                </h2>
                {section.items.length === 1 ? (
                  <p className="text-[var(--midnight-blue)]/65 text-sm" style={{ lineHeight: 1.8 }}>
                    {section.items[0]}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[var(--midnight-blue)]/65 text-sm"
                        style={{ lineHeight: 1.7 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--university-gold)] mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 pt-8 border-t border-gray-100 text-center"
          >
            <Link
              to={role.applyPath}
              className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-6 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg"
              style={{ fontWeight: 700 }}
            >
              Apply for {role.title}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
