import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <img
        src="/logo.png"
        alt="Disaresta"
        width={2048}
        height={2048}
        className="max-w-[min(80vw,80vh,600px)] h-auto"
      />
    </div>
  );
}
