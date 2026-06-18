import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ArrowRight, School, Lightbulb, Flame, ShieldCheck, Camera, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import robertPhoto from "figma:asset/687e62d638bda0455a39e822668ff18ba3807236.png";
import christopherPhoto from "figma:asset/3989bab4005258e45f6295f771dfe502dd481560.png";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";
import schoolImage from "figma:asset/2a0143c951064db98ae89545e013e8b4310658ea.png";

const values = [
  {
    icon: Heart,
    label: "We Put People First",
    principle:
      "We prioritize the well-being and growth of our team, partners, and the communities we serve above all. Technology is a tool; people are the purpose.",
    color: "bg-rose-50 text-rose-500",
  },
  {
    icon: ShieldCheck,
    label: "We Act With Integrity",
    principle:
      "We do the right thing, even when no one is watching. Transparency, honesty, and ethical responsibility are non-negotiable in our pursuit of progress.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: Flame,
    label: "We Are Driving Change",
    principle:
      "We don't just observe the gap between the private and public sectors; we bridge it. We are catalysts for modernization and relentless advocates for \u201cthe better way.\u201d",
    color: "bg-amber-50 text-amber-500",
  },
  {
    icon: Lightbulb,
    label: "We Are All In",
    principle:
      "We approach every challenge with owner-level passion. We are fully invested in the success of our mission, the growth of our company, and the goals of our clients.",
    color: "bg-purple-50 text-purple-500",
  },
];

const founders = [
  {
    name: "Robert Hicks",
    role: "Co-Founder & CEO",
    photo: robertPhoto,
    preview:
      "Robert Hicks is a Co-Founder of Schedule Beacon and a strategic leader with specialized expertise in public sector sales, financial services, and operations. A high-achieving student-athlete at Alfred University, Robert balanced a major in Business Administration and two minors in Biology and Biopsychology, with a four-year career on the Men's Basketball team. This background in academic and athletic leadership forms the foundation of his all-in approach to modernizing K-12 operations.",
    rest: [
      "Robert's professional background is defined by his ability to navigate complex organizational structures. During his tenure at Google Public Sector, he utilized AI-driven analysis to identify growth opportunities and developed internal tools that optimized team utilization — providing him with a direct understanding of how to deliver high-level technology solutions to government and public entities.",
      "As an independent representative with Primerica, Robert built and managed his own financial services business, gaining firsthand experience in client acquisition, risk management, and regulatory compliance. Holding multiple FINRA licenses (SIE, Series 6, and Series 63), he brings the technical and financial discipline required to lead Schedule Beacon and manage the high-stakes contractual needs of school districts across the Northeast.",
    ],
  },
  {
    name: "Christopher Coyle",
    role: "Co-Founder & COO",
    photo: christopherPhoto,
    preview:
      "Christopher Coyle is a Co-Founder of Schedule Beacon, specializing in financial analysis, public sector operations, and strategic communication. A Finance student at Alfred University, Christopher is completing his degree on an accelerated three-year track while serving as a member of the Men's Basketball team. His ability to manage high-stakes financial responsibilities alongside collegiate athletics defines his disciplined approach to company operations.",
    rest: [
      "Christopher's professional foundation is rooted in institutional finance and GovTech. As the Vice President of Alfred University's Student Managed Investment Fund, he oversees a portion of the university's endowment, managing asset allocation and fiduciary duties with precision. His experience interning in government finance provides Schedule Beacon with a specialized understanding of municipal procurement — vital for navigating district-level contracts and maximizing state-aided funding models for clients.",
      "An effective communicator and advocate for modernization, Christopher is also the creator and host of the Dollars and Degrees podcast, where he translates complex financial concepts into actionable strategies for a national audience. At Schedule Beacon, he leads operational strategy, ensuring that every district partnership is fiscally optimized and that the transition to automated scheduling is seamless, transparent, and grounded in the People First mission.",
    ],
  },
];

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
      {/* Photo */}
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

      {/* Bio */}
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

        {/* Preview text always visible */}
        <p className="text-[var(--midnight-blue)]/50 text-sm" style={{ lineHeight: 1.8 }}>
          {founder.preview}
        </p>

        {/* Expanded content */}
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

        {/* Expand / Collapse button */}
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

        {/* Brand watermark */}
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
              We're a student-founded team on a mission to close the gap between the private and public sectors —
              starting with the tool that shapes every student's academic journey.
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
              <ImageWithFallback
                src={schoolImage}
                alt="K-12 school building"
                className="rounded-2xl shadow-xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--university-gold)] rounded-xl flex items-center justify-center">
                    <School className="w-6 h-6 text-[var(--midnight-blue)]" />
                  </div>
                  <div>
                    <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 700 }}>
                      Student-Built
                    </div>
                    <div className="text-[var(--midnight-blue)]/50 text-xs">Solving a real problem</div>
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
                  behind what's standard in the private sector — and students pay the price.
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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${value.color}`}>
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2" style={{ fontSize: "1.05rem" }}>
                      {value.label}
                    </h3>
                    <p className="text-[var(--university-gold)]/60 text-xs mb-3" style={{ fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      The Principle
                    </p>
                    <p className="text-white/55 text-sm" style={{ lineHeight: 1.8 }}>
                      {value.principle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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