import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, School, Camera, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import robertPhoto from "figma:asset/687e62d638bda0455a39e822668ff18ba3807236.png";
import christopherPhoto from "figma:asset/3989bab4005258e45f6295f771dfe502dd481560.png";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import foundersPanel from "../../assets/founders-panel.png";
import foundersIncubator from "../../assets/founders-incubator.png";


const founders = [
  {
    name: "Robert Hicks",
    role: "Co-Founder & CEO",
    photo: robertPhoto,
    preview:
      "Robert Hicks is a Co-Founder of Schedule Beacon, leading product vision, development, and public sector strategy. Robert earned his Business Administration degree from Alfred University, graduating summa cum laude with minors in Biology and Biopsychology, while competing for four years on the Men's Basketball team. Balancing a demanding course load with collegiate athletics shaped the focused, all-in approach he brings to modernizing K-12 operations.",
    rest: [
      "At Google Public Sector, Robert used AI-driven analysis to identify growth opportunities and built internal tools that improved how teams operated. He carries that experience directly into Schedule Beacon's product, drawing on what he learned about delivering technology to government and public entities to shape a platform built for how districts actually work.",
      "As an independent representative with Primerica, Robert built and managed his own financial services business, gaining firsthand experience in client acquisition, risk management, and regulatory compliance. That background gives him a grounded understanding of what's at stake in district partnerships, from the first conversation through the long-term relationship that follows.",
    ],
  },
  {
    name: "Christopher Coyle",
    role: "Co-Founder & COO",
    photo: christopherPhoto,
    preview:
      "Christopher Coyle is a Co-Founder of Schedule Beacon, leading business development strategy, procurement, relationship management, and operations. Christopher earned his Finance degree from Alfred University on an accelerated three-year track while competing as a member of the Men's Basketball team. Balancing rigorous coursework with the demands of collegiate athletics shaped the disciplined, results-driven approach he brings to building and scaling the company.",
    rest: [
      "Christopher's professional foundation spans institutional finance, GovTech, and public sector operations. As Vice President of Alfred University's Student Managed Investment Fund, he helped oversee a portion of the university's endowment, sharpening the analytical rigor he now applies to partnership strategy and growth. His experience interning in government finance gives Schedule Beacon a working understanding of municipal procurement and district-level contracting, which is critical for navigating public sector sales cycles and state-aided funding models. He currently works in the financial services industry, where he continues to develop his expertise in client relationships and regulated environments.",
      "Christopher is also the creator and host of the Dollars & Degrees podcast, where he breaks down complex financial concepts for a national audience. At Schedule Beacon, he manages district relationships from initial outreach through contract execution and onboarding, with a focus on making the transition to automated scheduling seamless, transparent, and grounded in our People First mission.",
    ],
  },
];

function ValuesWheel() {
  const quadrants = [
    { id: 0, label: "We put people first", principle: "We prioritize the well-being and growth of our team, partners, and the communities we serve above all. Technology is a tool; people are the purpose." },
    { id: 1, label: "We act with integrity", principle: "We do the right thing, even when no one is watching. Transparency, honesty, and ethical responsibility are non-negotiable in our pursuit of progress." },
    { id: 2, label: "We are driving change", principle: "We don't just observe the gap between the private and public sectors; we bridge it. We are catalysts for modernization and relentless advocates for the better way." },
    { id: 3, label: "We are all in", principle: "We approach every challenge with owner-level passion. We are fully invested in the success of our mission, the growth of our company, and the goals of our clients." },
  ];

  return (
    <div className="relative grid grid-cols-2 gap-4 max-w-3xl mx-auto">
      {quadrants.map((q) => (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: q.id * 0.08 }}
        >
          <div
            className="w-full rounded-2xl p-7 text-left"
            style={{ background: "var(--university-gold)", border: "1.5px solid var(--university-gold)" }}
          >
            <div className="text-3xl mb-3 font-bold" style={{ color: "rgba(0,33,71,0.25)" }}>
              0{q.id + 1}
            </div>
            <div className="font-bold leading-snug mb-3" style={{ color: "var(--midnight-blue)", fontSize: "1.35rem" }}>
              {q.label}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--midnight-blue)", opacity: 0.7 }}>
              {q.principle}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Center logo badge */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="w-16 h-16 rounded-full bg-[var(--midnight-blue)] border-4 border-white/20 flex items-center justify-center shadow-2xl">
          <img src={logoIcon} alt="" aria-hidden className="w-9 h-9 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </div>
      </div>
    </div>
  );
}

function FounderCard({ founder, index }: { founder: typeof founders[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative bg-[var(--soft-grey)] aspect-[4/3] flex flex-col items-center justify-center gap-3 border-b border-gray-100 overflow-hidden">
        {founder.photo ? (
          <img
            src={founder.photo}
            alt={founder.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-[var(--midnight-blue)]/10 border-2 border-dashed border-[var(--midnight-blue)]/20 flex items-center justify-center">
              <Camera className="w-7 h-7 text-[var(--midnight-blue)]/30" />
            </div>
            <p className="text-[var(--midnight-blue)]/35 text-sm" style={{ fontWeight: 500 }}>
              Add your photo here
            </p>
          </>
        )}
      </div>

      <div className="p-7">
        <div className="mb-4">
          <h3 className="text-[var(--midnight-blue)]" style={{ fontSize: "1.15rem" }}>
            {founder.name}
          </h3>
          <span
            className="inline-block mt-1 text-xs bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-3 py-1 rounded-full"
            style={{ fontWeight: 600 }}
          >
            {founder.role}
          </span>
        </div>

        <p className="text-[var(--midnight-blue)]/50 text-sm" style={{ lineHeight: 1.8 }}>
          {founder.preview}
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                {founder.rest.map((para, i) => (
                  <p key={i} className="text-[var(--midnight-blue)]/50 text-sm" style={{ lineHeight: 1.8 }}>
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1.5 text-[var(--midnight-blue)] text-sm hover:text-[var(--university-gold)] transition-colors"
          style={{ fontWeight: 600 }}
        >
          {expanded ? (
            <>Show less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Read full bio <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export function About() {
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

        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[420px] pointer-events-none select-none"
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
              Our Story
            </span>
            <h1
              className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Built by students,{" "}
              <span className="text-[var(--university-gold)]">for students</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              We're a student-founded team on a mission to close the gap between the private and public sectors,
              starting with a tool that shapes every student's academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-start">
                  <img
                    src={foundersIncubator}
                    alt="Schedule Beacon founders at Incubator Works"
                    className="rounded-2xl object-cover object-center shadow-lg"
                    style={{ width: "78%", aspectRatio: "4/3" }}
                  />
                </div>
                <div className="flex justify-end">
                  <img
                    src={foundersPanel}
                    alt="Schedule Beacon founders at panel"
                    className="rounded-2xl object-cover object-center shadow-lg"
                    style={{ width: "78%", aspectRatio: "4/3" }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100" style={{ zIndex: 3 }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--university-gold)] rounded-xl flex items-center justify-center">
                    <School className="w-6 h-6 text-[var(--midnight-blue)]" />
                  </div>
                  <div>
                    <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 700 }}>
                      Student-Built
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-[var(--soft-grey)] px-4 py-1.5 rounded-full mb-6"
                style={{ fontWeight: 600 }}
              >
                OUR MISSION
              </span>
              <h2 className="text-4xl text-[var(--midnight-blue)] mb-6">
                Equipping schools with the insights to put student success first
              </h2>
              <div className="space-y-4 text-[var(--midnight-blue)]/60" style={{ lineHeight: 1.8 }}>
                <p>
                  Our mission is to help schools operate with the insights necessary to put student success
                  at the center of every decision. Too often, the tools available to public education lag far
                  behind what's standard in the private sector, and students pay the price.
                </p>
                <p>
                  We built Schedule Beacon because we saw firsthand how a broken scheduling process can limit
                  a student's entire academic trajectory. We believe smarter software, built with genuine care
                  for equity and outcomes, can change that.
                </p>
              </div>
              <Link
                to="/demo"
                className="mt-8 inline-flex items-center gap-2 bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all"
                style={{ fontWeight: 600 }}
              >
                See It In Action
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="py-24 bg-[var(--midnight-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--university-gold)] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--university-gold)]/70 bg-[var(--university-gold)]/10 px-4 py-1.5 rounded-full mb-4"
              style={{ fontWeight: 600 }}
            >
              OUR VALUES
            </span>
            <h2 className="text-4xl text-white">What we stand for</h2>
          </motion.div>

          <div className="relative">
            <ValuesWheel />
          </div>
        </div>
      </section>

      {/* ── Founders ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
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
              THE TEAM
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)]">Meet the founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, i) => (
              <FounderCard key={i} founder={founder} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--soft-grey)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-6">
              Ready to see the difference?
            </h2>
            <p className="text-[var(--midnight-blue)]/60 mb-8">
              See how Schedule Beacon helps districts put student success at the center of every scheduling decision.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-8 py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg"
              style={{ fontWeight: 700 }}
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

