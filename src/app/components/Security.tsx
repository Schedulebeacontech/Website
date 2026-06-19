import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ShieldCheck,
  Lock,
  Server,
  Eye,
  FileCheck,
  ArrowRight,
  Database,
  KeyRound,
} from "lucide-react";
import logoIcon from "../../assets/logo-watermark-hires.png";

const pillars = [
  {
    icon: FileCheck,
    title: "FERPA & NY Ed Law §2-d",
    description:
      "Schedule Beacon is built around student data privacy requirements from the ground up, including FERPA and New York Education Law §2-d, so districts can adopt our platform with confidence.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Server,
    title: "Modern, Secure Infrastructure",
    description:
      "Our platform runs on reputable cloud infrastructure providers, with environments configured around the principle of least privilege and continuous monitoring.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Lock,
    title: "Encryption in Transit & at Rest",
    description:
      "Student and district data is encrypted both in transit and at rest, helping ensure information stays protected whether it's moving through our systems or stored within them.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Role-based access controls and authentication safeguards help ensure only authorized district staff can view or modify scheduling data.",
    color: "bg-rose-50 text-rose-600",
  },
];

export function Security() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
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

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600 }}
            >
              Security & Compliance
            </span>
            <h1
              className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Built to protect{" "}
              <span className="text-[var(--university-gold)]">student data</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55" style={{ lineHeight: 1.7 }}>
              In a FERPA-regulated environment, security isn't an afterthought — it's a foundation. Here's how we approach it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="p-7 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${pillar.color}`}>
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-2.5" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                  {pillar.title}
                </h3>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.75 }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Commitment ──────────────────────────────────── */}
      <section className="py-20 bg-[var(--soft-grey)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-14 h-14 bg-[var(--midnight-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-7 h-7 text-[var(--university-gold)]" />
            </div>
            <h2 className="text-3xl text-[var(--midnight-blue)] mb-5">Our ongoing commitment</h2>
            <p className="text-[var(--midnight-blue)]/60 text-lg" style={{ lineHeight: 1.8 }}>
              Security and compliance are not a one-time checklist for us — they're an ongoing responsibility
              that evolves alongside our platform and the regulatory landscape districts operate within. We're
              glad to walk any district's IT or compliance team through our infrastructure, data handling, and
              privacy practices in detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--midnight-blue)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl text-white mb-5">Have specific compliance questions?</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Reach out and our team will work directly with your IT or compliance staff to answer them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-8 py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all"
              style={{ fontWeight: 700 }}
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
