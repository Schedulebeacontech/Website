import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      <div className="text-center">
        <div className="text-8xl text-[var(--university-gold)] mb-4" style={{ fontWeight: 900 }}>404</div>
        <h2 className="text-3xl text-[var(--midnight-blue)] mb-4">Page Not Found</h2>
        <p className="text-[var(--midnight-blue)]/55 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[var(--midnight-blue)] text-white px-6 py-3 rounded-xl hover:bg-[var(--midnight-blue)]/90 transition-all hover:shadow-lg"
          style={{ fontWeight: 600 }}
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}