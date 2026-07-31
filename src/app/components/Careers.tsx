import { motion, AnimatePresence } from "motion/react";
import { MapPin, Clock, DollarSign, ArrowRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import logoIcon from "../../assets/logo-watermark-hires.png";
import {
  openRoles,
  DEPARTMENTS,
  COMMITMENTS,
  LOCATION_TYPES,
  type Department,
  type Commitment,
  type LocationType,
} from "../data/openRoles";

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: readonly T[];
  selected: Set<T>;
  onToggle: (value: T) => void;
}) {
  return (
    <div>
      <div
        className="text-[var(--midnight-blue)]/45 text-xs mb-2.5 uppercase tracking-wide"
        style={{ fontWeight: 700, letterSpacing: "0.06em" }}
      >
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.has(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              className={`px-3.5 py-1.5 rounded-full text-sm border transition-all ${
                isSelected
                  ? "bg-[var(--university-gold)] border-[var(--university-gold)] text-[var(--midnight-blue)]"
                  : "bg-white border-gray-200 text-[var(--midnight-blue)]/60 hover:border-[var(--midnight-blue)]/30"
              }`}
              style={{ fontWeight: 600 }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RoleCard({ role }: { role: (typeof openRoles)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={role.applyPath}
        className="group block border border-gray-100 rounded-2xl bg-white hover:border-[var(--midnight-blue)]/20 hover:shadow-md transition-all duration-200 p-7 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="inline-block text-xs bg-[var(--university-gold)]/15 text-[var(--midnight-blue)] px-3 py-1 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {role.department}
              </span>
              <span
                className="inline-block text-xs bg-[var(--soft-grey)] text-[var(--midnight-blue)]/60 px-3 py-1 rounded-full"
                style={{ fontWeight: 600 }}
              >
                {role.commitment}
              </span>
            </div>
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

          <div
            className="flex items-center gap-2 text-[var(--midnight-blue)] shrink-0 self-start md:self-center"
            style={{ fontWeight: 700 }}
          >
            View Posting
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Careers() {
  const [departments, setDepartments] = useState<Set<Department>>(new Set());
  const [commitments, setCommitments] = useState<Set<Commitment>>(new Set());
  const [locationTypes, setLocationTypes] = useState<Set<LocationType>>(new Set());

  const toggle = <T,>(set: Set<T>, setSet: (s: Set<T>) => void, value: T) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setSet(next);
  };

  const filteredRoles = useMemo(() => {
    return openRoles.filter((role) => {
      if (departments.size > 0 && !departments.has(role.department)) return false;
      if (commitments.size > 0 && !commitments.has(role.commitment)) return false;
      if (locationTypes.size > 0 && !locationTypes.has(role.locationType)) return false;
      return true;
    });
  }, [departments, commitments, locationTypes]);

  const activeFilterCount = departments.size + commitments.size + locationTypes.size;

  const clearFilters = () => {
    setDepartments(new Set());
    setCommitments(new Set());
    setLocationTypes(new Set());
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

          {/* Filters */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <FilterGroup
                label="Department"
                options={DEPARTMENTS}
                selected={departments}
                onToggle={(value) => toggle(departments, setDepartments, value)}
              />
              <FilterGroup
                label="Time Commitment"
                options={COMMITMENTS}
                selected={commitments}
                onToggle={(value) => toggle(commitments, setCommitments, value)}
              />
              <FilterGroup
                label="Location"
                options={LOCATION_TYPES}
                selected={locationTypes}
                onToggle={(value) => toggle(locationTypes, setLocationTypes, value)}
              />
            </div>

            <AnimatePresence>
              {activeFilterCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-[var(--midnight-blue)]/50">
                      {filteredRoles.length} {filteredRoles.length === 1 ? "position" : "positions"} match your
                      filters
                    </span>
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 text-sm text-[var(--midnight-blue)] hover:underline"
                      style={{ fontWeight: 600 }}
                    >
                      <X className="w-3.5 h-3.5" />
                      Clear filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-6">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => <RoleCard key={role.slug} role={role} />)
            ) : (
              <div className="text-center bg-white border border-gray-100 rounded-2xl p-10">
                <p className="text-[var(--midnight-blue)]/55">
                  No open positions match those filters right now — try clearing a filter, or submit general
                  interest below.
                </p>
              </div>
            )}
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
              Tell us about yourself and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/careers/apply/general-interest"
              className="inline-block bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-md text-sm"
              style={{ fontWeight: 700 }}
            >
              Submit General Interest
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
