import React, { useState } from "react";
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
  Lock,
  Server,
  KeyRound,
  FileCheck,
  Search,
  Wrench,
  GraduationCap,
  Rocket,
  Timer,
  UserCheck,
  CalendarClock,
  MessageSquare,
  ClipboardList,
  FlaskConical,
} from "lucide-react";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import productVideo from "../../imports/Screen_Recording_2026-04-09_230205.mp4";
import conflictImg from "../../assets/feature-conflict-resolution.png";

const securityPillars = [
  {
    icon: FileCheck,
    title: "FERPA",
    description:
      "Schedule Beacon is built around FERPA requirements from the ground up, ensuring student education records are handled with the protections federal law requires.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Server,
    title: "Modern, Secure Infrastructure",
    description:
      "The platform runs on reputable cloud infrastructure providers, with environments configured around the principle of least privilege and continuous monitoring.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Lock,
    title: "Encryption in Transit and at Rest",
    description:
      "Student and district data is encrypted both in transit and at rest, ensuring information stays protected whether it is moving through our systems or stored within them.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: KeyRound,
    title: "Access Controls",
    description:
      "Role-based access controls and authentication safeguards ensure only authorized district staff can view or modify scheduling data.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: FileCheck,
    title: "NY Education Law §2-d",
    description:
      "Schedule Beacon's data practices align with New York Education Law §2-d, supporting districts in meeting their obligations under state student privacy law.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: FileCheck,
    title: "WISP (MA 201 CMR 17.00)",
    description:
      "Schedule Beacon maintains a Written Information Security Program in accordance with Massachusetts 201 CMR 17.00, establishing documented policies and procedures for protecting personal information of Massachusetts residents.",
    color: "bg-violet-50 text-violet-600",
  },
];

const implementationPillars = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We begin by meeting with your district to understand your scheduling structure, constraints, staffing model, and goals before any configuration begins.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "Your dedicated scheduling expert configures the platform around your district's specific needs, course catalog, and requirements.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description:
      "We conduct in-person training with your scheduling staff to ensure your team is fully prepared to use the platform with confidence.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Rocket,
    title: "Go-Live",
    description:
      "The platform is live and ready for your district to begin building your master schedule.",
    color: "bg-purple-50 text-purple-600",
  },
];

const supportPillars = [
  {
    icon: Timer,
    title: "One Business Day Response",
    description:
      "All support requests receive a response within one business day, so your team is never left waiting on a critical issue.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: UserCheck,
    title: "Always a Human",
    description:
      "Every support interaction connects you with a real scheduling expert. No chatbots, no automated ticket queues.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CalendarClock,
    title: "Scheduling Season Coverage",
    description:
      "We provide increased support availability during peak scheduling periods, when your team needs it most.",
    color: "bg-amber-50 text-amber-600",
  },
];

const updatesPillars = [
  {
    icon: MessageSquare,
    title: "Client Feedback",
    description:
      "All clients are encouraged to share feedback on an ongoing basis. We actively solicit input and treat it as a core part of how the platform evolves.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ClipboardList,
    title: "Regular Surveys",
    description:
      "We distribute structured surveys to gather district input and use those responses to inform our development priorities.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FlaskConical,
    title: "Feature Testing",
    description:
      "New features are tested with districts before broad release, giving clients early access and ensuring changes are validated in real scheduling environments.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const accordionMeta: Record<string, string> = {
  "Security and Compliance": "FERPA · NY §2-d · MA WISP · Encryption · Access Controls",
  "Dedicated Implementation Team": "Discovery · Build · Training · Go-live",
  "Ongoing Support": "1-day response · Human support · Seasonal coverage",
  "Regular Platform Updates": "Client feedback · Surveys · Feature testing",
};

const accordionPillars: Record<string, typeof securityPillars> = {
  "Security and Compliance": securityPillars,
  "Dedicated Implementation Team": implementationPillars,
  "Ongoing Support": supportPillars,
  "Regular Platform Updates": updatesPillars,
};

const accordionIntro: Record<string, string> = {
  "Security and Compliance": "In a FERPA-regulated environment, security is a foundation. Here is how we approach it.",
  "Dedicated Implementation Team": "Every district gets a dedicated scheduling expert who guides you through each phase, from initial discovery to go-live.",
  "Ongoing Support": "After go-live, your district has direct access to our team — not a helpdesk queue.",
  "Regular Platform Updates": "Schedule Beacon improves continuously, driven by direct input from the districts we work with.",
};

function PlatformAccordion({ feature, index }: { feature: typeof platformFeatures[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const meta = accordionMeta[feature.title] ?? "";
  const pillars = accordionPillars[feature.title] ?? [];
  const intro = accordionIntro[feature.title] ?? "";
  return (
    <motion.div
      className="rounded-2xl border overflow-hidden transition-colors duration-200"
      style={{ borderColor: open ? "var(--midnight-blue)" : "rgb(243 244 246)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 px-6 py-5 text-left transition-colors duration-200"
        style={{ background: open ? "rgba(0,33,71,0.03)" : "white" }}
      >
        {/* Left accent bar */}
        <div
          className="w-1 self-stretch rounded-full shrink-0 transition-colors duration-200"
          style={{ background: open ? "var(--university-gold)" : "rgb(229 231 235)", minHeight: "2.5rem" }}
        />
        <div className="w-10 h-10 bg-[var(--university-gold)]/15 rounded-xl flex items-center justify-center shrink-0">
          <feature.icon className="w-5 h-5 text-[var(--midnight-blue)]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[var(--midnight-blue)]" style={{ fontSize: "1rem", fontWeight: 600 }}>
            {feature.title}
          </div>
          {meta && (
            <div className="text-[var(--midnight-blue)]/40 text-xs mt-0.5 truncate" style={{ fontWeight: 500, letterSpacing: "0.01em" }}>
              {meta}
            </div>
          )}
        </div>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
          style={{ background: open ? "var(--midnight-blue)" : "rgb(243 244 246)" }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: open ? "var(--university-gold)" : "rgb(156 163 175)" }}
          />
        </div>
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
            <div className="px-6 pb-7 pt-2">
              {intro && (
                <p className="text-[var(--midnight-blue)]/75 mb-6" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6 }}>
                  {intro}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pillars.map((pillar, i) => {
                  const isOddTotal = pillars.length % 2 !== 0;
                  const isLastOdd = isOddTotal && i === pillars.length - 1;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-xl border border-gray-100 bg-gray-50/50"
                      style={isLastOdd ? { gridColumn: "1 / -1", maxWidth: "calc(50% - 8px)", margin: "0 auto", width: "100%" } : {}}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${pillar.color}`}>
                        <pillar.icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-[var(--midnight-blue)] mb-1.5 text-sm" style={{ fontWeight: 700 }}>
                        {pillar.title}
                      </h4>
                      <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.65 }}>
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              {feature.title === "Security and Compliance" && (
                <p className="text-[var(--midnight-blue)]/75 mt-6" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.6 }}>
                  Security and compliance are not a one-time checklist — they are an ongoing responsibility that evolves alongside our platform and the regulatory landscape districts operate within. We are glad to walk any district's IT or compliance team through our infrastructure, data handling, and privacy practices in detail.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const showcaseFeatures = [
  {
    tab: "Automated Scheduling",
    icon: Zap,
    title: "Build the optimal schedule automatically",
    description:
      "Our intelligent algorithm ingests your district's data — courses, teachers, rooms, and student requests — and generates a high-performance master schedule that maximizes resource utilization and balances class loads across every building.",
    color: "bg-blue-50 text-blue-600",
    image: null as string | null,
  },
  {
    tab: "Constraint Optimization",
    icon: RefreshCw,
    title: "Scheduling that adapts to your district's rules",
    description:
      "Every district is different. Our constraint engine lets you encode your specific logic — faculty certifications, room capacity limits, period restrictions, and more — so the output fits how your schools actually operate, not a generic template.",
    color: "bg-amber-50 text-amber-600",
    image: null as string | null,
  },
  {
    tab: "FTE Optimization",
    icon: Users,
    title: "Make the most of every staff member",
    description:
      "Schedule Beacon identifies gaps and inefficiencies in staff utilization before they become costly. Ensure every full-time staff member is used to their full capability — saving districts thousands of dollars in staff hours each year.",
    color: "bg-purple-50 text-purple-600",
    image: null as string | null,
  },
  {
    tab: "Conflict Resolution",
    icon: CheckCircle,
    title: "See every conflict clearly, resolve it fast",
    description:
      "A dedicated conflict management workspace that surfaces scheduling conflicts through clear, intuitive visualizations. Administrators can immediately understand what's blocking a student, see which sections are affected, and follow actionable resolution recommendations — before any issue reaches a student.",
    color: "bg-emerald-50 text-emerald-600",
    image: conflictImg,
  },
  {
    tab: "Simple UI",
    icon: Settings,
    title: "Purpose-built for how schedulers actually work",
    description:
      "Every screen in Schedule Beacon is designed around real scheduling workflows. Each view surfaces the right information at the right time, reducing training overhead and minimizing the risk of user error — even during the most complex scheduling seasons.",
    color: "bg-indigo-50 text-indigo-600",
    image: null as string | null,
  },
];

function FeatureShowcase() {
  const [active, setActive] = React.useState(0);
  const f = showcaseFeatures[active];

  return (
    <div>
      {/* Tab row */}
      <div className="flex border-b border-gray-200 mb-16 overflow-x-auto gap-0">
        {showcaseFeatures.map((feat, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`pb-4 px-1 mr-8 text-sm whitespace-nowrap transition-all shrink-0 ${
              i === active
                ? "text-[var(--midnight-blue)] border-b-2 border-[var(--midnight-blue)]"
                : "text-[var(--midnight-blue)]/40 hover:text-[var(--midnight-blue)]/70"
            }`}
            style={{ fontWeight: i === active ? 700 : 500 }}
          >
            {feat.tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {f.image ? (
          /* Full-width layout when there's a real screenshot */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left text — 2 cols */}
            <div className="lg:col-span-2 lg:pt-4">
              <div className={`w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${f.color}`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3
                className="text-[var(--midnight-blue)] mb-5"
                style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.2 }}
              >
                {f.title}
              </h3>
              <p
                className="text-[var(--midnight-blue)]/55"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {f.description}
              </p>
            </div>
            {/* Right screenshot — 3 cols */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,33,71,0.16)] border border-gray-100">
                <img
                  src={f.image}
                  alt={f.tab}
                  className="w-full block"
                />
              </div>
            </div>
          </div>
        ) : (
          /* Centered layout for text-only tabs */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${f.color}`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3
                className="text-[var(--midnight-blue)] mb-5"
                style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.2 }}
              >
                {f.title}
              </h3>
              <p
                className="text-[var(--midnight-blue)]/55"
                style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {f.description}
              </p>
            </div>
            {/* Placeholder for upcoming screenshot */}
            <div
              className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/60 flex flex-col items-center justify-center gap-4 text-center"
              style={{ minHeight: 300, padding: "3rem" }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${f.color}`}>
                <f.icon className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[var(--midnight-blue)]/40 text-sm" style={{ fontWeight: 600 }}>
                  Screenshot coming soon
                </p>
                <p className="text-[var(--midnight-blue)]/25 text-xs mt-1">
                  Send us the app screenshot for this feature and we'll wire it in.
                </p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
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
    title: "Simple UI",
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
  { icon: Shield, title: "Security and Compliance" },
  { icon: Users, title: "Dedicated Implementation Team" },
  { icon: Clock, title: "Ongoing Support" },
  { icon: TrendingUp, title: "Regular Platform Updates" },
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
      <section id="features" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="mb-16"
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
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-3">
              Everything districts need
            </h2>
            <p className="text-lg text-[var(--midnight-blue)]/50 max-w-xl">
              From single high schools to large multi-site districts, Schedule Beacon adapts to your needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FeatureShowcase />
          </motion.div>
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
                    <CheckCircle className="w-5 h-5 text-[var(--university-gold)] shrink-0 mt-1" />
                    <span className="text-white/80 text-xl" style={{ lineHeight: 1.5 }}>{benefit}</span>
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