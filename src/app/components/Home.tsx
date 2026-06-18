import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  Play,
  Shield,
  RefreshCw,
  TrendingUp as _TrendingUp,
  ChevronRight,
  ChevronLeft,
  XCircle,
  Clock,
  AlertTriangle,
  HeartHandshake,
  Lightbulb,
  GraduationCap,
  MessageSquare,
  Database,
  SlidersHorizontal,
  Rocket,
} from "lucide-react";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import lighthouseImage from "figma:asset/a6b99a5a06add249a1b0b121e419659629d67ecb.png";
import heroVideoMp4 from "../../imports/hero-demo.mp4";
import heroVideoWebm from "../../imports/hero-demo.webm";

function HeroVisual() {
  return (
    <div className="relative py-6 overflow-hidden">
      {/* Dot-grid decoration — top-right corner */}
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--midnight-blue) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Soft gold/blue glow behind the frame */}
      <div className="absolute inset-4 bg-gradient-to-br from-[var(--university-gold)]/20 via-blue-100/25 to-[var(--midnight-blue)]/8 rounded-2xl blur-2xl" />

      {/* Main browser frame */}
      <div className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,33,71,0.18)] border border-gray-100">
        {/* Title bar */}
        <div className="bg-[#f0f0f0] border-b border-black/[0.07] px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-white/80 rounded-md px-3 py-1 text-xs text-gray-400 border border-black/[0.07] flex items-center gap-2 min-w-0">
            <div className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
            <span className="truncate">app.schedulebeacon.com</span>
          </div>
        </div>
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full block"
          style={{ aspectRatio: "1628/847" }}
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
      </div>

      {/* Floating stat — bottom left (kept inside bounds) */}
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        className="absolute bottom-0 left-3 z-20 bg-white rounded-xl shadow-xl p-3 border border-gray-100 flex items-center gap-2.5"
      >
        <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
          <CheckCircle className="w-4 h-4 text-emerald-500" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-[var(--midnight-blue)] leading-tight">Help you achieve higher</div>
          <div className="text-[11px] font-bold text-emerald-500 leading-tight">fulfillment rates</div>
        </div>
      </motion.div>

      {/* Floating stat — top right */}
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute top-0 right-3 z-20 bg-[var(--midnight-blue)] rounded-xl shadow-xl p-3 flex items-center gap-2.5"
      >
        <div className="w-9 h-9 bg-[var(--university-gold)]/15 rounded-lg flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-[var(--university-gold)]" />
        </div>
        <div>
          <div className="text-[11px] font-bold text-white leading-tight">Scheduling in a</div>
          <div className="text-[11px] font-bold text-[var(--university-gold)] leading-tight">Fraction of the Time</div>
        </div>
      </motion.div>
    </div>
  );
}

const features = [
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
      "A flexible configuration tool that lets each district customize their scheduling logic, accommodating faculty certifications, room capacity limits, and other unique district needs.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: AlertTriangle,
    title: "Conflict Identification & Resolution",
    description:
      "Schedule Beacon surfaces scheduling conflicts through clear, intuitive visualizations — making it easy for administrators to understand what's causing an issue and act on intelligent resolution recommendations before they impact students.",
    color: "bg-rose-50 text-rose-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Import Your Data",
    description: "Import your students, courses, teachers, and room data via CSV to get started.",
  },
  {
    number: "02",
    title: "Configure & Optimize",
    description: "Set your constraints and priorities. Our engine builds the optimal schedule and flags any trade-offs for your review.",
  },
  {
    number: "03",
    title: "Publish & Adjust",
    description: "Publish your schedule and make real-time edits as the year progresses, with conflict detection running automatically.",
  },
];

const problems = [
  {
    icon: Clock,
    text: "Scheduling consumes weeks, sometimes months, of staff time every single year, pulling administrators away from what matters most.",
  },
  {
    icon: AlertTriangle,
    text: "Spreadsheets and legacy tools can't handle the complexity of constraints, conflicts, and student needs at scale.",
  },
  {
    icon: XCircle,
    text: "Without the right process, students miss courses they need and inequities go undetected until it's too late to fix.",
  },
];

const solutions = [
  {
    icon: HeartHandshake,
    text: "Schedule Beacon eliminates the scheduling headache, giving counselors and administrators their time back to focus on students, not spreadsheets.",
  },
  {
    icon: Lightbulb,
    text: "Purpose-built technology handles the complexity for you, optimizing across hundreds of variables automatically.",
  },
  {
    icon: GraduationCap,
    text: "When schedules are built on the right technology, students get into the right classes. Better schedules lead directly to brighter futures.",
  },
];

function FeatureCarousel() {
  const [active, setActive] = React.useState(0);
  const total = features.length;

  const getPos = (i: number): "center" | "left" | "right" => {
    const d = (i - active + total) % total;
    if (d === 0) return "center";
    if (d === 1) return "right";
    return "left";
  };

  const goNext = () => setActive((a) => (a + 1) % total);
  const goPrev = () => setActive((a) => (a + total - 1) % total);

  return (
    <div className="relative select-none">
      {/* Viewport — clips the side cards */}
      <div className="relative overflow-hidden" style={{ height: 520 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {features.map((feature, i) => {
            const pos = getPos(i);
            const isCenter = pos === "center";
            const xVal = pos === "center" ? 0 : pos === "right" ? 520 : -520;

            return (
              <motion.div
                key={feature.title}
                className="absolute"
                style={{ width: 540, cursor: isCenter ? "default" : "pointer" }}
                animate={{
                  x: xVal,
                  scale: isCenter ? 1 : 0.72,
                  opacity: isCenter ? 1 : 0.18,
                  zIndex: isCenter ? 10 : 5,
                  filter: isCenter ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => { if (!isCenter) setActive(i); }}
              >
                <div
                  className={`relative bg-white rounded-2xl p-10 transition-shadow ${
                    isCenter
                      ? "border border-gray-200 shadow-[0_28px_70px_rgba(0,33,71,0.16)]"
                      : "border border-gray-100 shadow-md"
                  }`}
                  style={{ height: 500 }}
                >
                  {/* Faded number watermark */}
                  <div
                    className="absolute right-6 top-4 text-[6rem] font-black text-[var(--midnight-blue)] leading-none select-none pointer-events-none"
                    style={{ opacity: 0.04 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Subtle gold sweep on active */}
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--university-gold)]/5 to-transparent rounded-2xl pointer-events-none" />
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-[var(--midnight-blue)] mb-4"
                      style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.15 }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--midnight-blue)]/55 flex-1" style={{ fontSize: "1.15rem", lineHeight: 1.72 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)] hover:border-[var(--midnight-blue)]/25 hover:shadow-md transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2.5 bg-[var(--midnight-blue)]"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to feature ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[var(--midnight-blue)]/50 hover:text-[var(--midnight-blue)] hover:border-[var(--midnight-blue)]/25 hover:shadow-md transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-12 pb-12 lg:pt-20 lg:pb-16">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--midnight-blue) 1px, transparent 1px), linear-gradient(90deg, var(--midnight-blue) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--university-gold)]/8 to-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl" />

        {/* Logo watermark — centered on the full hero section */}
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] pointer-events-none select-none"
          style={{ mixBlendMode: "multiply", opacity: 0.045 }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl text-[var(--midnight-blue)] mb-6 tracking-tight"
                style={{ lineHeight: 1.06, fontWeight: 800 }}
              >
                The Better
                <br />
                Way to Build
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #002147 0%, #1a5fa8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  K-12 Master Schedules
                </span>
              </h1>

              <p className="text-lg text-[var(--midnight-blue)]/60 mb-8 max-w-lg" style={{ lineHeight: 1.7 }}>
                Schedule Beacon gives counselors and administrators the power to build
                master schedules in days, while putting every student in the right seat.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg hover:shadow-[var(--university-gold)]/30 hover:-translate-y-0.5"
                  style={{ fontWeight: 700 }}
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-white text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl border border-[var(--midnight-blue)]/15 hover:border-[var(--midnight-blue)]/30 transition-all hover:shadow-sm"
                  style={{ fontWeight: 600 }}
                >
                  <Play className="w-4 h-4 text-[var(--midnight-blue)]/60" />
                  See How It Works
                </Link>
              </div>
            </motion.div>

            {/* Right — decorated video */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <HeroVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Problem / Solution ───────────────────────────────── */}
      <section className="bg-[var(--midnight-blue)] py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--university-gold)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--university-gold)] text-sm mb-3" style={{ fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The Challenge &amp; The Solution
            </p>
            <h2 className="text-3xl lg:text-4xl text-white" style={{ lineHeight: 1.2 }}>
              Master scheduling is one of the most complex,<br className="hidden lg:block" />
              time-consuming tasks in education.{" "}
              <span className="text-[var(--university-gold)]">We're changing that.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Problem Card */}
            <motion.div
              className="rounded-2xl p-8 border border-red-500/20 bg-red-500/5 backdrop-blur-sm"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-red-400 text-sm" style={{ fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  The Problem
                </span>
              </div>
              <div className="space-y-6">
                {problems.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="text-red-400" style={{ width: "1.1rem", height: "1.1rem" }} />
                    </div>
                    <p className="text-white/80 text-base" style={{ lineHeight: 1.65 }}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              className="rounded-2xl p-8 border border-emerald-500/25 bg-emerald-500/8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-emerald-400 text-sm" style={{ fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  The Solution
                </span>
              </div>
              <div className="space-y-6">
                {solutions.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="text-emerald-400" style={{ width: "1.1rem", height: "1.1rem" }} />
                    </div>
                    <p className="text-white/80 text-base" style={{ lineHeight: 1.65 }}>
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
              CORE FEATURES
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-4">
              The technology behind <br />
              <span className="text-[var(--university-gold)]">every great schedule</span>
            </h2>
            <p className="text-lg text-[var(--midnight-blue)]/50 max-w-2xl mx-auto">
              These are the three pillars that power Schedule Beacon. See our full feature set on the{" "}
              <Link to="/products" className="text-[var(--midnight-blue)] underline underline-offset-2 hover:text-[var(--university-gold)] transition-colors" style={{ fontWeight: 600 }}>
                Products page
              </Link>
              .
            </p>
          </motion.div>

          <FeatureCarousel />
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className="py-28 bg-[var(--midnight-blue)] relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--university-gold)]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--university-gold)] bg-[var(--university-gold)]/10 border border-[var(--university-gold)]/25 px-4 py-1.5 rounded-full mb-6"
              style={{ fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              How It Works
            </span>
            <h2
              className="text-4xl lg:text-5xl text-white mb-5"
              style={{ lineHeight: 1.15 }}
            >
              Up and running in{" "}
              <span className="text-[var(--university-gold)]">three steps</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              From data import to a published, conflict-free schedule — Schedule Beacon makes it simple.
            </p>
          </motion.div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Dashed connector line (desktop) */}
            <div className="hidden md:block absolute top-[3.25rem] left-[calc(33.33%-1rem)] right-[calc(33.33%-1rem)] h-px border-t-2 border-dashed border-[var(--university-gold)]/20 z-0" />

            {[
              {
                number: "01",
                icon: Database,
                title: "Import Your Data",
                description:
                  "Connect your SIS and Schedule Beacon automatically pulls in students, courses, teachers, and room data.",
              },
              {
                number: "02",
                icon: SlidersHorizontal,
                title: "Configure & Optimize",
                description:
                  "Set your constraints and priorities. Our engine builds the optimal schedule and flags any trade-offs for your review.",
              },
              {
                number: "03",
                icon: Rocket,
                title: "Publish & Adjust",
                description:
                  "Publish your schedule and make real-time edits as the year progresses, with conflict detection running automatically.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="relative z-10 group"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.18 }}
              >
                <div className="relative rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-[var(--university-gold)]/40 transition-all duration-300 h-full overflow-hidden">
                  {/* Giant watermark number */}
                  <div
                    className="absolute -bottom-4 -right-2 text-white/[0.04] select-none pointer-events-none"
                    style={{ fontSize: "9rem", fontWeight: 900, lineHeight: 1 }}
                  >
                    {step.number}
                  </div>

                  {/* Gold icon circle */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-[var(--university-gold)] flex items-center justify-center mb-7 shadow-lg shadow-[var(--university-gold)]/25 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-[var(--midnight-blue)]" />
                  </div>

                  {/* Step label */}
                  <div
                    className="text-[var(--university-gold)]/60 text-xs mb-3 relative z-10"
                    style={{ fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    Step {step.number}
                  </div>

                  <h3
                    className="text-white mb-3 relative z-10"
                    style={{ fontSize: "1.2rem", fontWeight: 700 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm relative z-10" style={{ lineHeight: 1.75 }}>
                    {step.description}
                  </p>

                  {/* Bottom gold accent bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--university-gold)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Arrow connector bubble between cards */}
                {i < 2 && (
                  <div className="hidden md:flex absolute top-[3rem] -right-4 z-20 w-8 h-8 rounded-full bg-[var(--midnight-blue)] border-2 border-[var(--university-gold)]/40 items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[var(--university-gold)]" style={{ strokeWidth: 2.5 }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg hover:shadow-[var(--university-gold)]/30 hover:-translate-y-0.5"
              style={{ fontWeight: 700 }}
            >
              See It in Action
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Story ────────────────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--university-gold)] to-transparent" />
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-8" style={{ fontWeight: 600 }}>
              OUR STORY
            </span>

            <div className="text-[var(--university-gold)] mb-4" style={{ fontSize: "4rem", lineHeight: 1, fontFamily: "Georgia, serif", opacity: 0.4 }}>
              "
            </div>

            <div className="space-y-5 mb-10">
              <p className="text-xl lg:text-2xl text-[var(--midnight-blue)]" style={{ lineHeight: 1.6 }}>
                Robby and Chris were working on a business research project while at Alfred University when they came across the issue of master scheduling.
              </p>
              <p className="text-lg text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.7 }}>
                Both of them had observed challenges with scheduling while they were in school, and after interviewing hundreds of counselors, administrators, and superintendents across the US, they realized the problem was wide-spread.
              </p>
              <p className="text-lg text-[var(--midnight-blue)]/65" style={{ lineHeight: 1.7 }}>
                Schedule Beacon was born as a way to return valuable time back to faculty, while optimizing district resources to allow students more pathways to success.
              </p>
            </div>

            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-16 bg-[var(--midnight-blue)]/15" />
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--midnight-blue)] text-white text-sm flex items-center justify-center ring-2 ring-white" style={{ fontWeight: 700 }}>
                    R
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--university-gold)] text-[var(--midnight-blue)] text-sm flex items-center justify-center ring-2 ring-white" style={{ fontWeight: 700 }}>
                    C
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600 }}>Robby &amp; Chris</div>
                  <div className="text-[var(--midnight-blue)]/45 text-xs">Co-Founders, Schedule Beacon</div>
                </div>
              </div>
              <div className="h-px w-16 bg-[var(--midnight-blue)]/15" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-24 bg-[var(--soft-grey)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-white px-4 py-1.5 rounded-full mb-4" style={{ fontWeight: 600 }}>
              TESTIMONIALS
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)]">
              Loved by scheduling teams <br />across the country
            </h2>
          </motion.div>

          {/* Placeholder */}
          <motion.div
            className="max-w-2xl mx-auto bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--soft-grey)] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[var(--midnight-blue)]/30" />
              </div>
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gray-200 fill-gray-200" />
              ))}
            </div>
            <p className="text-[var(--midnight-blue)]/40 text-sm mb-1" style={{ fontWeight: 500 }}>
              District testimonials coming soon
            </p>
            <p className="text-[var(--midnight-blue)]/25 text-xs">
              We're just getting started. Check back here as we grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        {/* Lighthouse background */}
        <div className="absolute inset-0">
          <img
            src={lighthouseImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep overlay so text stays legible */}
          <div className="absolute inset-0 bg-[var(--midnight-blue)]/82" />
          {/* Subtle gold glow from top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[var(--university-gold)]/12 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Ready to transform your <br />
              <span className="text-[var(--university-gold)]">scheduling process?</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Join Schedule Beacon to build better schedules and brighter futures.
            </p>
            <div className="flex justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-8 py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-xl hover:shadow-[var(--university-gold)]/20 hover:-translate-y-0.5"
                style={{ fontWeight: 700 }}
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/30 text-sm mt-6">No commitment required · Setup in minutes</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}