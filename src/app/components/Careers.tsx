import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Send,
  Loader2,
  AlertCircle,
  ChevronDown,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Rocket,
  Users,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logoIcon from "../../assets/logo-watermark-hires.png";
import { EMAILJS_CONFIG, isCareersEmailJSConfigured } from "../lib/emailjs";

const perks = [
  {
    icon: Rocket,
    title: "Real Ownership",
    detail: "Shape the technical direction of a company at its inflection point.",
  },
  {
    icon: Heart,
    title: "Mission-Driven",
    detail: "Build software that puts student success at the center of every decision.",
  },
  {
    icon: Sparkles,
    title: "Flexible Structure",
    detail: "Remote, part-time-friendly roles with equity and cash arrangements.",
  },
  {
    icon: Users,
    title: "Small, Direct Team",
    detail: "Work closely with the founders — no layers, no bureaucracy.",
  },
];

const openRoles = [
  {
    title: "Engineering Lead",
    company: "Schedule Beacon LLC",
    hours: "~10–20 hrs/week, part-time, remote",
    location: "Remote — US time zones preferred",
    compensation: "Equity and/or cash, flexible structure",
    intro:
      "We're looking for a technical leader to own our engineering direction as we scale from MVP to a production platform serving live school districts. This is a hands-on leadership role: part architect, part builder, part strategic partner to the founding team. You'll set the technical vision, make foundational architecture decisions, and play a hands-on role with the codebase as well.",
    sections: [
      {
        heading: "Company Background",
        items: [
          "Schedule Beacon LLC is an EdTech startup built to automate K-12 master scheduling in the United States. Our platform is built with students and staff members in mind, with the mission of helping schools operate with the insights necessary to put student success at the center of every decision. We've moved from concept to early traction as we are actively launching our pilot phase. Please read more at ScheduleBeacon.com.",
        ],
      },
      {
        heading: "Role Overview",
        items: [
          "This is an ideal fit for an experienced engineer or technical founder who wants ownership and influence without a full-time commitment. We want someone excited to help shape a company at an inflection point.",
        ],
      },
      {
        heading: "Leadership Skillset",
        items: [
          "Comfort setting technical strategy while staying hands-on across the stack",
          "Judgment around technical hiring, vendor selection, and building/mentoring a small engineering team over time",
          "Willing to work closely with the founders to understand the market and market requirements",
          "Experience handling customer technical support",
        ],
      },
      {
        heading: "Technical Skillset",
        items: [
          "Senior full-stack engineering background with a track record of shipping production software",
          "Experience owning technical architecture and making high-leverage build decisions in a startup or early-stage environment",
          "Ability to design and scale APIs, data models, and distributed systems",
          "Awareness of the data privacy, security, and compliance expectations relevant to K-12 education (e.g., FERPA, student data handling), or a willingness to come up to speed quickly",
        ],
      },
      {
        heading: "Our Stack",
        items: [
          "Frontend: Next.js 15 + TypeScript + Tailwind (apps/web)",
          "Backend: FastAPI + Python 3.12 (apps/api)",
          "Solver: Google OR-Tools CP-SAT — runtime dispatch toggle (self-hosted Celery worker · GCP Cloud Run · GCP Batch)",
          "Database: PostgreSQL 16 with Row-Level Security",
          "Queue/cache: Redis + Celery",
          "Auth: Custom JWT (argon2id, refresh-token rotation)",
          "Hosting: Railway (app tier) + Google Cloud (ephemeral solver)",
        ],
      },
      {
        heading: "Pluses",
        items: [
          "Experience with optimization systems, constraint solvers, schedulers, or high-compute workloads",
          "Familiarity with EdTech, K-12 data standards (e.g., OneRoster), or selling into public-sector/education buyers",
          "Prior fractional, advisory, or founding-engineer experience",
        ],
      },
      {
        heading: "What Success Looks Like",
        items: [
          "A clear, scalable technical roadmap aligned to our commercial milestones",
          "A stable, secure, and maintainable platform as we grow our district customer base",
          "Sound foundational decisions that keep future engineering velocity high",
          "High customer retention and success rates",
        ],
      },
    ],
  },
];

function RoleCard({ role, onApply }: { role: (typeof openRoles)[number]; onApply: (title: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-[var(--midnight-blue)]/20 transition-colors duration-200"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-7 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <span
              className="inline-block text-xs bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-3 py-1 rounded-full mb-3"
              style={{ fontWeight: 600 }}
            >
              Open Position
            </span>
            <h3 className="text-2xl text-[var(--midnight-blue)] mb-1" style={{ fontWeight: 700 }}>
              {role.title}
            </h3>
            <p className="text-[var(--midnight-blue)]/50 text-sm mb-4">{role.company}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--midnight-blue)]/65">
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
          </div>

          <div className="flex md:flex-col gap-3 shrink-0">
            <button
              onClick={() => onApply(role.title)}
              className="bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-md text-sm whitespace-nowrap"
              style={{ fontWeight: 700 }}
            >
              Apply Now
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-[var(--midnight-blue)] hover:bg-[var(--soft-grey)] transition-all text-sm whitespace-nowrap"
              style={{ fontWeight: 600 }}
            >
              {open ? "Hide Details" : "View Details"}
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        </div>

        <p className="text-[var(--midnight-blue)]/65 text-sm mt-6" style={{ lineHeight: 1.8 }}>
          {role.intro}
        </p>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-gray-100 px-7 md:px-8 py-8 bg-[var(--soft-grey)]/40 space-y-7">
              {role.sections.map((section) => (
                <div key={section.heading}>
                  <h4
                    className="text-[var(--midnight-blue)] text-sm mb-3 uppercase tracking-wide"
                    style={{ fontWeight: 700, letterSpacing: "0.06em", fontSize: "0.75rem" }}
                  >
                    {section.heading}
                  </h4>
                  {section.items.length === 1 ? (
                    <p className="text-[var(--midnight-blue)]/65 text-sm" style={{ lineHeight: 1.8 }}>
                      {section.items[0]}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--midnight-blue)]/65 text-sm" style={{ lineHeight: 1.7 }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--university-gold)] mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={() => onApply(role.title)}
                  className="bg-[var(--university-gold)] text-[var(--midnight-blue)] px-6 py-3 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-md text-sm"
                  style={{ fontWeight: 700 }}
                >
                  Apply for {role.title}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Careers() {
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollToForm = (roleTitle?: string) => {
    if (roleTitle) {
      setFormData((prev) => ({ ...prev, position: roleTitle }));
    }
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isCareersEmailJSConfigured()) {
      console.warn(
        "[Schedule Beacon] Careers EmailJS template is not configured. Open /src/app/lib/emailjs.ts and fill in CAREERS_TEMPLATE_ID."
      );
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CAREERS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          linkedin: formData.linkedin || "Not provided",
          position: formData.position || "General Interest",
          message: formData.message,
          to_email: "info@schedulebeacon.com",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your application. Please try emailing us directly at info@schedulebeacon.com.");
    } finally {
      setLoading(false);
    }
  };

  const resumeSubject = encodeURIComponent(
    `Resume — ${formData.position || "General Interest"}${formData.name ? " — " + formData.name : ""}`
  );
  const resumeBody = encodeURIComponent(
    `Hi Schedule Beacon team,\n\nPlease find my resume attached for the ${formData.position || "General Interest"} application.\n\nName: ${formData.name || ""}\nEmail: ${formData.email || ""}\n\nThanks,\n${formData.name || ""}`
  );
  const mailtoHref = `mailto:info@schedulebeacon.com?subject=${resumeSubject}&body=${resumeBody}`;

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span
              className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600 }}
            >
              Careers
            </span>
            <h1 className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6" style={{ lineHeight: 1.1 }}>
              Help us build the{" "}
              <span className="text-[var(--university-gold)]">future of scheduling</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55">
              We're a small team on a mission to put student success at the center of every schedule. If that
              excites you, we want to hear from you — whether or not there's an open role that fits today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why Join ────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-[var(--soft-grey)] flex items-center justify-center mb-4 mx-auto sm:mx-0">
                  <perk.icon className="w-5 h-5 text-[var(--midnight-blue)]/70" />
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 700 }}>
                  {perk.title}
                </h3>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.6 }}>
                  {perk.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ──────────────────────────────────── */}
      <section className="py-24 bg-[var(--soft-grey)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl text-[var(--midnight-blue)] mb-4">Open Positions</h2>
            <p className="text-[var(--midnight-blue)]/55 text-lg max-w-2xl mx-auto">
              Current opportunities to join the Schedule Beacon team.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <RoleCard key={role.title} role={role} onApply={scrollToForm} />
            ))}
          </div>

          {/* Don't see a fit nudge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center bg-white border border-gray-100 rounded-2xl p-8"
          >
            <h3 className="text-[var(--midnight-blue)] mb-2" style={{ fontWeight: 700, fontSize: "1.15rem" }}>
              Don't see the right role?
            </h3>
            <p className="text-[var(--midnight-blue)]/55 text-sm mb-5 max-w-xl mx-auto">
              We're growing and always open to hearing from talented people who believe in what we're building.
              Send us your information below and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => scrollToForm("General Interest")}
              className="bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-md text-sm"
              style={{ fontWeight: 700 }}
            >
              Submit General Interest
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Application Form ────────────────────────────────── */}
      <section ref={formRef} className="py-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl text-[var(--midnight-blue)] mb-4">Apply</h2>
            <p className="text-[var(--midnight-blue)]/55 text-lg">
              Tell us a bit about yourself. This form works whether you're applying to an open role or just want to
              get on our radar.
            </p>
          </motion.div>

          {submitted ? (
            <div className="text-center py-12 border border-gray-100 rounded-2xl bg-[var(--soft-grey)]/40">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl text-[var(--midnight-blue)] mb-3">Application received!</h3>
              <p className="text-[var(--midnight-blue)]/55 max-w-md mx-auto mb-8">
                Thanks for reaching out. One last step — please email your resume to{" "}
                <a href="mailto:info@schedulebeacon.com" className="underline" style={{ fontWeight: 600 }}>
                  info@schedulebeacon.com
                </a>{" "}
                so we can connect it to your application.
              </p>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 bg-[var(--midnight-blue)] text-white px-6 py-3.5 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-lg"
                style={{ fontWeight: 700 }}
              >
                <Mail className="w-4 h-4" />
                Email Your Resume
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Resume note up top so it's not missed */}
              <div className="flex items-start gap-3 bg-[var(--university-gold)]/10 border border-[var(--university-gold)]/30 rounded-xl p-4">
                <Mail className="w-4 h-4 text-[var(--midnight-blue)] shrink-0 mt-0.5" />
                <p className="text-[var(--midnight-blue)]/75 text-sm" style={{ lineHeight: 1.6 }}>
                  This form doesn't accept file uploads yet. After submitting, please email your resume directly to{" "}
                  <a href="mailto:info@schedulebeacon.com" className="underline" style={{ fontWeight: 600 }}>
                    info@schedulebeacon.com
                  </a>{" "}
                  — we'll give you a pre-filled button on the confirmation screen to make it quick.
                </p>
              </div>

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
                  Position *
                </label>
                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)]"
                >
                  <option value="">Select a position</option>
                  {openRoles.map((role) => (
                    <option key={role.title} value={role.title}>
                      {role.title}
                    </option>
                  ))}
                  <option value="General Interest">General Interest / Future Roles</option>
                </select>
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
                    Sending…
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-xs text-center text-[var(--midnight-blue)]/40">
                After submitting, remember to email your resume to info@schedulebeacon.com.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
