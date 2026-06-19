import { motion } from "motion/react";
import { FileText, Video, Download, BookOpen, ExternalLink, Calendar, Clock, ArrowRight, Search, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import logoIcon from "../../assets/logo-watermark-hires.png";

const resourceCategories = [
  { label: "All", value: "all" },
  { label: "Guides", value: "guide" },
  { label: "Videos", value: "video" },
  { label: "Case Studies", value: "case-study" },
  { label: "Webinars", value: "webinar" },
  { label: "Security", value: "security" },
];

export function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

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

        {/* Brand watermark */}
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
              Learning Center
            </span>
            <h1
              className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Resources &{" "}
              <span className="text-[var(--university-gold)]">Support</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55" style={{ lineHeight: 1.7 }}>
              Guides, videos, case studies, and live webinars to help you get the most out of Schedule Beacon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Resource Library ────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {resourceCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-xl text-sm transition-all ${
                  activeCategory === cat.value
                    ? "bg-[var(--midnight-blue)] text-white shadow-md"
                    : "bg-[var(--soft-grey)] text-[var(--midnight-blue)]/60 hover:text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)]/8"
                }`}
                style={{ fontWeight: 600 }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Coming soon state */}
          <motion.div
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-200 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-[var(--university-gold)]/15 rounded-2xl flex items-center justify-center mb-5">
              <BookOpen className="w-7 h-7 text-[var(--midnight-blue)]/40" />
            </div>
            <h3 className="text-[var(--midnight-blue)] mb-2" style={{ fontSize: "1.15rem" }}>
              Resources Coming Soon
            </h3>
            <p className="text-[var(--midnight-blue)]/45 text-sm max-w-md" style={{ lineHeight: 1.7 }}>
              We are actively developing guides, video tutorials, case studies, and documentation. Check back here as we build out our resource library.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Upcoming Webinars ───────────────────────────────── */}
      <section className="py-24 bg-[var(--soft-grey)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-sm text-[var(--midnight-blue)]/50 bg-white px-4 py-1.5 rounded-full mb-4"
              style={{ fontWeight: 600 }}
            >
              LIVE EVENTS
            </span>
            <h2 className="text-4xl text-[var(--midnight-blue)] mb-4">Upcoming Webinars</h2>
            <p className="text-[var(--midnight-blue)]/55 max-w-2xl mx-auto">
              Join live sessions to deepen your scheduling expertise and discover new platform features.
            </p>
          </motion.div>

          {/* Coming soon state */}
          <motion.div
            className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-[var(--midnight-blue)]/15 rounded-2xl text-center max-w-2xl mx-auto bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-[var(--midnight-blue)]/8 rounded-2xl flex items-center justify-center mb-5">
              <Calendar className="w-7 h-7 text-[var(--midnight-blue)]/35" />
            </div>
            <h3 className="text-[var(--midnight-blue)] mb-2" style={{ fontSize: "1.15rem" }}>
              Webinars Coming Soon
            </h3>
            <p className="text-[var(--midnight-blue)]/45 text-sm max-w-sm" style={{ lineHeight: 1.7 }}>
              We are planning live sessions covering scheduling best practices, platform walkthroughs, and more. Dates will be announced here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Support CTA ─────────────────────────────────────── */}
      <section className="py-20 bg-[var(--midnight-blue)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-white mb-6">Need a hand?</h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Our dedicated scheduling experts are here to help with setup, training, troubleshooting, or anything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--university-gold)] text-[var(--midnight-blue)] px-8 py-4 rounded-xl hover:bg-[var(--university-gold)]/90 transition-all"
                style={{ fontWeight: 700 }}
              >
                Contact Support
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/15 transition-all border border-white/20"
                style={{ fontWeight: 600 }}
              >
                Browse FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}