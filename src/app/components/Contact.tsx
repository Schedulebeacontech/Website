import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import logoIcon from "../../assets/logo-watermark-hires.png";
import { EMAILJS_CONFIG, isEmailJSConfigured } from "../lib/emailjs";
import { US_STATES } from "../lib/usStates";

const contactChannels = [
  {
    icon: Mail,
    title: "Email Us",
    href: "mailto:info@schedulebeacon.com",
    detail: "info@schedulebeacon.com",
    sub: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    href: "tel:+15184195335",
    detail: "(518) 419-5335",
    sub: "Mon–Fri, 8 AM–6 PM EST",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    district: "",
    state: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // If EmailJS hasn't been configured yet, warn in dev but still show success UI
    if (!isEmailJSConfigured()) {
      console.warn(
        "[Schedule Beacon] EmailJS is not configured. Open /src/app/lib/emailjs.ts and fill in your credentials."
      );
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Not provided",
          district: formData.district || "Not provided",
          state: formData.state || "Not provided",
          subject: formData.subject,
          message: formData.message,
          to_email: "info@schedulebeacon.com",
        },
        { publicKey: EMAILJS_CONFIG.PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your message. Please try emailing us directly at info@schedulebeacon.com.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Contact Us
            </span>
            <h1
              className="text-5xl lg:text-6xl text-[var(--midnight-blue)] mb-6"
              style={{ lineHeight: 1.1 }}
            >
              We'd love to{" "}
              <span className="text-[var(--university-gold)]">hear from you</span>
            </h1>
            <p className="text-xl text-[var(--midnight-blue)]/55">
              Whether you have a question, want a demo, or just want to chat about scheduling — we're here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Channels ────────────────────────────────── */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-8 sm:gap-0 sm:divide-x sm:divide-gray-150">
            {contactChannels.map((channel, i) => (
              <motion.a
                key={i}
                href={channel.href}
                className="group flex items-center gap-4 sm:px-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-[var(--soft-grey)] flex items-center justify-center shrink-0 group-hover:bg-[var(--university-gold)]/15 transition-colors">
                  <channel.icon className="w-5 h-5 text-[var(--midnight-blue)]/70 group-hover:text-[var(--midnight-blue)] transition-colors" />
                </div>
                <div>
                  <div className="text-[var(--midnight-blue)]/45 text-xs mb-0.5" style={{ fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {channel.title}
                  </div>
                  <div
                    className="text-[var(--midnight-blue)] group-hover:text-[var(--university-gold)] transition-colors underline-offset-4 group-hover:underline"
                    style={{ fontSize: "1.15rem", fontWeight: 700 }}
                  >
                    {channel.detail}
                  </div>
                  <div className="text-[var(--midnight-blue)]/45 text-xs mt-0.5">{channel.sub}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl text-[var(--midnight-blue)] mb-4">Get in touch</h2>
                <p className="text-[var(--midnight-blue)]/55 text-sm" style={{ lineHeight: 1.8 }}>
                  Fill out the form and a member of our team will be in touch within one business day. For urgent
                  issues, please call us directly.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--soft-grey)] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--midnight-blue)]/60" />
                  </div>
                  <div>
                    <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600 }}>
                      Office
                    </div>
                    <div className="text-[var(--midnight-blue)]/55 text-sm">
                      TBD
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--soft-grey)] rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--midnight-blue)]/60" />
                  </div>
                  <div>
                    <div className="text-[var(--midnight-blue)] text-sm" style={{ fontWeight: 600 }}>
                      Business Hours
                    </div>
                    <div className="text-[var(--midnight-blue)]/55 text-sm">
                      Monday – Friday<br />8:00 AM – 6:00 PM EST
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ nudge */}
              <div className="bg-[var(--soft-grey)] rounded-2xl p-6">
                <div className="text-[var(--midnight-blue)] text-sm mb-2" style={{ fontWeight: 600 }}>
                  Looking for quick answers?
                </div>
                <p className="text-[var(--midnight-blue)]/55 text-xs mb-4">
                  Check our resources library for guides, FAQs, and video tutorials.
                </p>
                <a
                  href="/resources"
                  className="text-xs text-[var(--midnight-blue)] underline underline-offset-2"
                  style={{ fontWeight: 600 }}
                >
                  Browse resources →
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl text-[var(--midnight-blue)] mb-3">Message sent!</h3>
                    <p className="text-[var(--midnight-blue)]/55">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@district.edu"
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
                        School District
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="Lincoln Unified School District"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      State
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)]"
                    >
                      <option value="">Select state</option>
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)]"
                    >
                      <option value="">Select a topic</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing &amp; Packages</option>
                      <option value="support">Technical Support</option>
                      <option value="integration">SIS Integration</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--midnight-blue)] mb-1.5" style={{ fontWeight: 600 }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your scheduling challenges or questions..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--university-gold)] focus:border-transparent transition-all bg-white text-[var(--midnight-blue)] placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  {/* Error banner */}
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
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-[var(--midnight-blue)]/40">
                    By submitting, you agree to be contacted by Schedule Beacon about our products and services.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}