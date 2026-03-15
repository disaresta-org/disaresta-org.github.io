import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3C2970]">
      <img
        src="/logo.png"
        alt="Disaresta"
        width={1584}
        height={396}
        className="max-w-[min(90vw,800px)] h-auto"
      />
    </div>
  );
}
