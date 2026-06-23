import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";

const faqCategories = [
  { label: "All", value: "all" },
  { label: "General", value: "general" },
  { label: "Product", value: "product" },
  { label: "Implementation", value: "implementation" },
  { label: "Security", value: "security" },
];

const faqs = [
  {
    category: "general",
    question: "What is Schedule Beacon?",
    answer:
      "Schedule Beacon is a master scheduling software platform built specifically for K-12 school districts. We give counselors and administrators the tools to build, optimize, and publish master schedules faster and more accurately, replacing spreadsheets and legacy systems with purpose-built technology.",
  },
  {
    category: "general",
    question: "Who is Schedule Beacon designed for?",
    answer:
      "Schedule Beacon is designed for K-12 school districts of all sizes, from single-school districts to large multi-school systems. Our primary users are school counselors, principals, and central office administrators responsible for building and maintaining master schedules.",
  },
  {
    category: "general",
    question: "How is Schedule Beacon different from other scheduling tools?",
    answer:
      "Most scheduling tools were built decades ago and require significant manual effort. Schedule Beacon was purpose-built for modern districts with an intelligent optimization engine that automates the heavy lifting and constraint-aware configuration, so you spend days, not months, building your schedule.",
  },
  {
    category: "product",
    question: "What student information systems (SIS) does Schedule Beacon integrate with?",
    answer:
      "SIS integration is a feature we are actively working on and plan to support in a future release. We will provide updates as this becomes available. In the meantime, our team is happy to discuss your district's data workflow and how we can accommodate it during implementation.",
  },
  {
    category: "product",
    question: "Can Schedule Beacon handle complex scheduling constraints?",
    answer:
      "Absolutely. Our Constraint Optimization module lets districts configure scheduling logic that reflects their unique needs, including room capacity limits, course sequencing rules, special education accommodation requirements, and period or block structure preferences.",
  },
  {
    category: "product",
    question: "Does Schedule Beacon support block scheduling and other non-traditional structures?",
    answer:
      "Schedule Beacon supports traditional period-based schedules, A/B block schedules, semester-based structures, and hybrid models. Support for unique bell schedules is a feature we are currently working to implement and is not yet available. During onboarding, our team works with you to configure the platform to match your district's existing schedule structure.",
  },
  {
    category: "product",
    question: "Can we make changes to the schedule after it's published?",
    answer:
      "Yes. Schedule Beacon supports real-time edits throughout the school year. As you make changes, our platform can accommodate accordingly and flag any conflicts so you can resolve them before they affect students.",
  },
  {
    category: "implementation",
    question: "How long does it take to get up and running?",
    answer:
      "From the start of your training period through go-live, districts are typically up and running in less than two weeks. Our dedicated implementation specialist guides you through every step, including configuration of your district's scheduling constraints and hands-on training for your scheduling team.",
  },
  {
    category: "implementation",
    question: "What kind of support does Schedule Beacon provide?",
    answer:
      "We provide hands-on support throughout implementation and ongoing support once you're live. All support requests receive a response within one business day, and every interaction connects you with a real scheduling expert — not a chatbot or automated queue. We also provide increased support coverage during peak scheduling periods.",
  },
  {
    category: "implementation",
    question: "Do you offer training for our scheduling team?",
    answer:
      "Yes. Every implementation includes in-person training sessions for your scheduling team, covering everything from initial data setup to building your first schedule. We also provide recorded walkthroughs your team can reference at any time.",
  },
  {
    category: "security",
    question: "Is Schedule Beacon FERPA compliant?",
    answer:
      "Yes. Schedule Beacon is built around FERPA requirements. We treat student scheduling data as education records subject to FERPA protections, and our data handling practices reflect that obligation.",
  },
  {
    category: "security",
    question: "Does Schedule Beacon comply with New York Education Law §2-d?",
    answer:
      "Yes. Schedule Beacon's data practices align with New York Education Law §2-d. We are glad to provide a Data Processing Agreement to any district that requires one as part of their vendor approval process.",
  },
  {
    category: "security",
    question: "Does Schedule Beacon have a Written Information Security Program (WISP)?",
    answer:
      "Yes. Schedule Beacon maintains a WISP in accordance with Massachusetts 201 CMR 17.00, which establishes our documented policies and procedures for protecting personal information.",
  },
  {
    category: "security",
    question: "How is student data protected within Schedule Beacon?",
    answer:
      "Student and district data is encrypted both in transit and at rest. Access to scheduling data is governed by role-based access controls, ensuring only authorized district personnel can view or modify records. Our infrastructure is hosted on reputable cloud providers configured around the principle of least privilege.",
  },
  {
    category: "security",
    question: "Who can we contact with security or compliance questions?",
    answer:
      "Reach out to our team directly at info@schedulebeacon.com or by calling 518-419-5335. We are glad to work directly with your district's IT or compliance staff to answer any questions.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-[var(--midnight-blue)]/20 transition-colors duration-200"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <span className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600, lineHeight: 1.5 }}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-[var(--soft-grey)] flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-[var(--midnight-blue)]/60" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="px-7 pb-6 border-t border-gray-100">
              <p className="text-[var(--midnight-blue)]/65 text-sm pt-4" style={{ lineHeight: 1.75 }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--midnight-blue) 1px, transparent 1px), linear-gradient(90deg, var(--midnight-blue) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[var(--university-gold)]/8 to-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        {/* Watermark icon */}
        <img
          src={logoIcon}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[420px] pointer-events-none select-none"
          style={{ opacity: 0.06 }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-4 py-1.5 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[var(--university-gold)]" />
              <span className="text-sm" style={{ fontWeight: 600 }}>FAQ</span>
            </div>
            <h1 className="text-5xl text-[var(--midnight-blue)] mb-5" style={{ lineHeight: 1.1 }}>
              Frequently Asked <br />
              <span className="text-[var(--university-gold)]">Questions</span>
            </h1>
            <p className="text-lg text-[var(--midnight-blue)]/55 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
              Everything you need to know about Schedule Beacon. Can't find the answer you're looking for?{" "}
              <Link to="/contact" className="text-[var(--midnight-blue)] underline underline-offset-2 hover:text-[var(--university-gold)] transition-colors" style={{ fontWeight: 600 }}>
                Reach out to our team.
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Body ─────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--soft-grey)]">
        <div className="max-w-3xl mx-auto px-6">

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10 justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {faqCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeCategory === cat.value
                    ? "bg-[var(--midnight-blue)] text-white shadow-md"
                    : "bg-white text-[var(--midnight-blue)]/60 hover:text-[var(--midnight-blue)] border border-gray-200 hover:border-[var(--midnight-blue)]/20"
                }`}
                style={{ fontWeight: activeCategory === cat.value ? 600 : 500 }}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <FAQItem key={`${activeCategory}-${i}`} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Still Have Questions CTA ─────────────────────────── */}
      <section className="py-20 bg-[var(--midnight-blue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--university-gold)]/8 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/55 mb-10 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
              Our team is happy to walk you through any details and show you exactly how Schedule Beacon can work for your district.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-7 py-3.5 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-lg hover:shadow-[var(--university-gold)]/25 hover:-translate-y-0.5"
                style={{ fontWeight: 700 }}
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-xl border border-white/15 hover:bg-white/15 transition-all"
                style={{ fontWeight: 600 }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}