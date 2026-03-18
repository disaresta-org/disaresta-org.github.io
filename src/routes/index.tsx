import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#3C2970] gap-8">
      <img
        src="/logo-v2.png"
        alt="Disaresta"
        width={1584}
        height={396}
        className="max-w-[min(90vw,800px)] h-auto"
      />
      <p className="text-white text-2xl md:text-3xl tracking-wide" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        We build software
      </p>

      <div className="mt-8 w-full max-w-2xl px-6" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <h2 className="text-white/60 text-sm uppercase tracking-widest mb-6 text-center">Projects</h2>
        <a
          href="https://loglayer.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-5"
        >
          <img src="/loglayer.png" alt="LogLayer" className="w-16 h-16 rounded-lg shrink-0" />
          <div>
            <h3 className="text-white text-lg font-semibold">LogLayer</h3>
            <p className="text-white/70 text-sm">A unified logging library for JavaScript / TypeScript</p>
          </div>
        </a>
      </div>

      <div className="flex gap-6 text-sm" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <Link to="/privacy" className="text-white/60 hover:text-white/90 transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-white/60 hover:text-white/90 transition-colors">
          Terms of Service
        </Link>
      </div>
    </div>
  );
}
