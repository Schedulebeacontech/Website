export type Department = "Technical" | "Sales" | "Marketing" | "Customer Experience";
export type Commitment = "Full-time" | "Part-time";
export type LocationType = "Remote" | "Hybrid" | "On-site";

export interface JobSection {
  heading: string;
  items: string[];
}

export interface OpenRole {
  slug: string;
  title: string;
  postingPath: string;
  applyPath: string;
  company: string;
  department: Department;
  commitment: Commitment;
  locationType: LocationType;
  location: string;
  hours: string;
  compensation: string;
  intro: string;
  sections: JobSection[];
}

export const DEPARTMENTS: Department[] = ["Technical", "Sales", "Marketing", "Customer Experience"];
export const COMMITMENTS: Commitment[] = ["Full-time", "Part-time"];
export const LOCATION_TYPES: LocationType[] = ["Remote", "Hybrid", "On-site"];

export const openRoles: OpenRole[] = [
  {
    slug: "engineering-lead",
    title: "Engineering Lead",
    postingPath: "/careers/engineering-lead",
    applyPath: "/careers/apply/engineering-lead",
    company: "Schedule Beacon LLC",
    department: "Technical",
    commitment: "Part-time",
    locationType: "Remote",
    location: "Remote — US time zones preferred",
    hours: "~10–20 hrs/week, part-time, remote",
    compensation: "Equity and/or cash, flexible structure",
    intro:
      "We're looking for a technical leader to own our engineering direction as we scale from MVP to a production platform serving live school districts. This is a hands-on leadership role: part architect, part builder, part strategic partner to the founding team. You'll set the technical vision, make foundational architecture decisions, and play a hands-on role with the codebase as well.",
    sections: [
      {
        heading: "Company Background",
        items: [
          "Schedule Beacon LLC is an EdTech startup built to automate K-12 master scheduling in the United States. Our platform is built with students and staff members in mind, with the mission of helping schools operate with the insights necessary to put student success at the center of every decision. We've moved from concept to early traction as we are actively launching our pilot phase. Please read more at ScheduleBeacon.com.",
        ],
      },
      {
        heading: "Role Overview",
        items: [
          "This is an ideal fit for an experienced engineer or technical founder who wants ownership and influence without a full-time commitment. We want someone excited to help shape a company at an inflection point.",
        ],
      },
      {
        heading: "Leadership Skillset",
        items: [
          "Comfort setting technical strategy while staying hands-on across the stack",
          "Judgment around technical hiring, vendor selection, and building/mentoring a small engineering team over time",
          "Willing to work closely with the founders to understand the market and market requirements",
          "Experience handling customer technical support",
        ],
      },
      {
        heading: "Technical Skillset",
        items: [
          "Senior full-stack engineering background with a track record of shipping production software",
          "Experience owning technical architecture and making high-leverage build decisions in a startup or early-stage environment",
          "Ability to design and scale APIs, data models, and distributed systems",
          "Awareness of the data privacy, security, and compliance expectations relevant to K-12 education (e.g., FERPA, student data handling), or a willingness to come up to speed quickly",
        ],
      },
      {
        heading: "Our Stack",
        items: [
          "Frontend: Next.js 15 + TypeScript + Tailwind (apps/web)",
          "Backend: FastAPI + Python 3.12 (apps/api)",
          "Solver: Google OR-Tools CP-SAT — runtime dispatch toggle (self-hosted Celery worker · GCP Cloud Run · GCP Batch)",
          "Database: PostgreSQL 16 with Row-Level Security",
          "Queue/cache: Redis + Celery",
          "Auth: Custom JWT (argon2id, refresh-token rotation)",
          "Hosting: Railway (app tier) + Google Cloud (ephemeral solver)",
        ],
      },
      {
        heading: "Pluses",
        items: [
          "Experience with optimization systems, constraint solvers, schedulers, or high-compute workloads",
          "Familiarity with EdTech, K-12 data standards (e.g., OneRoster), or selling into public-sector/education buyers",
          "Prior fractional, advisory, or founding-engineer experience",
        ],
      },
      {
        heading: "What Success Looks Like",
        items: [
          "A clear, scalable technical roadmap aligned to our commercial milestones",
          "A stable, secure, and maintainable platform as we grow our district customer base",
          "Sound foundational decisions that keep future engineering velocity high",
          "High customer retention and success rates",
        ],
      },
    ],
  },
];
