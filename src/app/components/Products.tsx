import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  Settings,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  RefreshCw,
  TrendingUp,
  Clock,
  ChevronDown,
} from "lucide-react";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import productVideo from "../../imports/Screen_Recording_2026-04-09_230205.mp4";

function PlatformAccordion({ feature, index }: { feature: typeof platformFeatures[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-2xl border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="w-11 h-11 bg-[var(--university-gold)]/15 rounded-xl flex items-center justify-center shrink-0">
          <feature.icon className="w-5 h-5 text-[var(--midnight-blue)]" />
        </div>
        <span className="flex-1 text-[var(--midnight-blue)]" style={{ fontSize: "1rem", fontWeight: 600 }}>
          {feature.title}
        </span>
        <ChevronDown
          className="w-5 h-5 text-[var(--midnight-blue)]/40 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 pl-[4.25rem]">
              <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const coreFeatures = [
  {
    icon: Zap,
    title: "Automated Scheduling Engine",
    description:
      "An intelligent algorithm that ingests school-specific data to generate high-performance master schedules, maximizing resources and balancing class loads across your district.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: RefreshCw,
    title: "Constraint Optimization",
    description:
      "A flexible configuration tool that lets each district customize their scheduling logic, accommodating faculty certifications, room capacity limits, and other unique district requirements.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "FTE Optimization",
    description:
      "Ensure every full-time staff member is utilized to their full capability. Schedule Beacon identifies gaps and inefficiencies before they become costly, saving districts thousands of dollars in staff hours each year.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: CheckCircle,
    title: "Conflict Viewing and Resolution",
    description:
      "A dedicated conflict management workspace that surfaces scheduling conflicts clearly and provides structured tools for resolution, allowing administrators to address issues with precision and confidence.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Settings,
    title: "Simple UI and Interfaces",
    description:
      "Purpose-built screens designed around how scheduling coordinators actually work. Each view surfaces the right information at the right time, reducing training overhead and minimizing the risk of user error.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

const benefits = [
  ["Achieve higher student course placement rates", "Eliminate scheduling conflicts across all buildings", "Balance teacher workloads across departments"],
  ["Support equity and compliance requirements", "Reduce time spent on manual scheduling tasks", "Give administrators clear visibility into the full schedule"],
];

const platformFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Schedule Beacon is going to be built with role-based access controls and end-to-end encryption to protect your district's data at every layer of the platform.",
  },
  {
    icon: Users,
    title: "Dedicated Implementation Team",
    description:
      "Your own scheduling expert guides onboarding, training, and your first build from day one through go-live.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description:
      "Phone, email, and live chat support from real scheduling experts, not a general helpdesk.",
  },
  {
    icon: TrendingUp,
    title: "Regular Platform Updates",
    description:
      "We continuously gather feedback from the districts we are working with to inform new features and improvements shipped to the platform.",
  },
];

export function Products() {
  return (
    <div>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--midnight-blue) 1px, transparent 1px), linear-gradient(90deg, var(--midnight-blue) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Brand watermark */}
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[420px] pointer-events-none select-none"
          style={{ mixBlendMode: "multiply", opacity: 0.06 }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block text-sm bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6"
                style={{ fontWeight: 600 }}
              >
                The Platform
              </span>
              <h1
                className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
                style={{ lineHeight: 1.1 }}
              >
                Master Scheduling,{" "}
                <span className="text-[var(--university-gold)]">Reimagined</span>
              </h1>
              <p className="text-lg text-[var(--midnight-blue)]/55 mb-8 max-w-lg" style={{ lineHeight: 1.7 }}>
                Purpose-built for K-12 school districts. Build master schedules in days, while ensuring every student gets the courses they need.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg"
                  style={{ fontWeight: 700 }}
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 border border-[var(--midnight-blue)]/20 text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:border-[var(--midnight-blue)]/40 hover:bg-gray-50 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  View Resources
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full border border-gray-100">
                <video
                  src={productVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Features ───────────────────────────────────── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-4"
              style={{ fontWeight: 600 }}
            >
              CORE FEATURES
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-4">
              Everything districts need
            </h2>
            <p className="text-lg text-[var(--midnight-blue)]/50 max-w-2xl mx-auto">
              From single high schools to large multi-site districts, Schedule Beacon adapts to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className="p-7 rounded-2xl border border-gray-100 hover:border-[var(--midnight-blue)]/20 hover:shadow-lg transition-all bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[var(--midnight-blue)] mb-2.5" style={{ fontSize: "1rem" }}>
                  {feature.title}
                </h3>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Strip ──────────────────────────────────── */}
      <section id="difference" className="py-24 bg-[var(--midnight-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--university-gold)] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--university-gold)]/70 bg-[var(--university-gold)]/10 px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600 }}
            >
              THE DIFFERENCE
            </span>
            <h2 className="text-4xl text-white">
              Real results for real districts
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl mx-auto">
            {benefits.map((col, ci) => (
              <div key={ci} className="space-y-6">
                {col.map((benefit, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (ci * 3 + i) * 0.08 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--university-gold)] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Features ───────────────────────────────── */}
      <section id="platform" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-4"
              style={{ fontWeight: 600 }}
            >
              ENTERPRISE PLATFORM
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)]">
              Built for how districts actually work
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {platformFeatures.map((feature, i) => (
              <PlatformAccordion key={i} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="rounded-2xl bg-[var(--midnight-blue)] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-white mb-1" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                Ready to get a quote for your district?
              </p>
              <p className="text-white/55 text-sm">
                Contact us or request a demo and we'll provide full pricing details tailored to your enrollment and district structure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
                style={{ fontWeight: 600 }}
              >
                Contact Us
              </Link>
              <Link
                to="/security"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all text-sm"
                style={{ fontWeight: 600 }}
              >
                <Shield className="w-4 h-4" />
                Security
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-6 py-3 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all text-sm"
                style={{ fontWeight: 700 }}
              >
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}