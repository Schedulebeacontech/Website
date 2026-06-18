import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoIcon from "figma:asset/5671362e46764389b665ff1fad478cea5f46eaa8.png";

export function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- BRANDING ---
  useEffect(() => {
    document.title = "Schedule Beacon";
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 80);
        }
      };
      setTimeout(() => attempt(10), 80);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/products", label: "Products" },
    { path: "/resources", label: "Resources" },
    { path: "/faq", label: "FAQ" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 bg-white/98 backdrop-blur-md transition-all duration-200 ${
          scrolled ? "shadow-[0_1px_20px_rgba(0,33,71,0.08)]" : "border-b border-[var(--midnight-blue)]/8"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logoIcon} alt="Schedule Beacon" className="h-11 w-auto" />
            <span
              className="text-[var(--midnight-blue)] leading-none"
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}
            >
              Schedule Beacon
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive(link.path)
                    ? "text-[var(--midnight-blue)] bg-[var(--midnight-blue)]/5"
                    : "text-[var(--midnight-blue)]/60 hover:text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)]/5"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--university-gold)] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.schedulebeacon.com"
              className="text-sm text-[var(--midnight-blue)] px-4 py-2.5 rounded-lg hover:bg-[var(--midnight-blue)]/5 transition-all font-semibold"
            >
              Login
            </a>
            <Link
              to="/demo"
              className="text-sm bg-[var(--university-gold)] text-[var(--midnight-blue)] px-5 py-2.5 rounded-lg hover:bg-[var(--university-gold)]/90 transition-all hover:shadow-md font-semibold"
            >
              Request a Demo
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--midnight-blue)] p-2 rounded-lg hover:bg-[var(--midnight-blue)]/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-[var(--midnight-blue)]/8 bg-white"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm transition-colors ${
                      isActive(link.path)
                        ? "text-[var(--midnight-blue)] bg-[var(--midnight-blue)]/5"
                        : "text-[var(--midnight-blue)]/70 hover:text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)]/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t border-[var(--midnight-blue)]/8 space-y-2">
                  <a
                    href="https://app.schedulebeacon.com"
                    className="w-full block text-center text-[var(--midnight-blue)] px-6 py-3 rounded-lg font-semibold text-sm border border-[var(--midnight-blue)]/15"
                  >
                    Login
                  </a>
                  <Link
                    to="/demo"
                    className="w-full block text-center bg-[var(--university-gold)] text-[var(--midnight-blue)] px-6 py-3 rounded-lg font-semibold text-sm"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-[var(--midnight-blue)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex justify-center mb-10 pb-10 border-b border-white/10">
            <img
              src={logoIcon}
              alt="Schedule Beacon"
              className="h-20"
              style={{ mixBlendMode: "screen", opacity: 0.7 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="text-white mb-4" style={{ fontFamily: "'Source Sans 3', sans-serif", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>Schedule Beacon</p>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Better schedules, brighter futures. Empowering K-12 school districts with intelligent master scheduling software.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 tracking-wide uppercase" style={{letterSpacing: '0.08em', fontSize: '0.75rem'}}>Product</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Scheduling Features", path: "/products#features" },
                  { label: "The Difference", path: "/products#difference" },
                  { label: "Enterprise Platform", path: "/products#platform" },
                  { label: "Pricing", path: "/products#pricing" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-white/50 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 tracking-wide uppercase" style={{letterSpacing: '0.08em', fontSize: '0.75rem'}}>Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About", path: "/about" },
                  { label: "Contact", path: "/contact" },
                  { label: "Resources", path: "/resources" },
                  { label: "FAQ", path: "/faq" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-white/50 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm mb-4 tracking-wide uppercase" style={{letterSpacing: '0.08em', fontSize: '0.75rem'}}>Get Started</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Request a Demo", path: "/demo" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-white/50 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Schedule Beacon. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                  <span
                    key={item}
                    title="Coming soon"
                    className="text-white/25 text-sm cursor-default select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/25 text-xs italic">
                Legal policies are currently in preparation — coming soon.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}