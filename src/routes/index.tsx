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
        width={1024}
        height={1024}
        className="max-w-[min(80vw,80vh,600px)] h-auto"
      />
    </div>
  );
}
