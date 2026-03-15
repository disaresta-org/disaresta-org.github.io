import { createFileRoute } from "@tanstack/react-router";

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
      <iframe
        width="644"
        height="362"
        src="https://www.youtube.com/embed/DaKVJMFLHGk?list=PLopbORF1jH6OUPpXYQUGaqVrRS9QqaLTi&start=10561"
        title="Reunited Rose - Ch. 3 The Accursed - Riviera The Promised Land #3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="max-w-[90vw]"
      />
    </div>
  );
}
