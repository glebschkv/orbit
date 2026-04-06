"use client";

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 h-14 border-b border-border"
      style={{
        background: "rgba(8, 8, 10, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        willChange: "transform",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-[15px] font-bold text-text-primary">
            orbit
          </span>
          <span className="text-text-muted">&middot;</span>
          <span className="font-mono text-[15px] font-normal text-text-muted">
            x growth
          </span>
        </div>
        <a
          href="#pricing"
          className="bg-text-primary text-background text-[13px] font-semibold px-5 py-2 rounded-lg transition-opacity duration-200 hover:opacity-85"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
