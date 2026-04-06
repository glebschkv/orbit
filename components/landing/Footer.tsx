"use client";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center max-md:flex-col max-md:gap-2 max-md:text-center">
        <span className="text-[13px] text-text-muted">&copy; 2026 Orbit</span>
        <span className="text-[13px] text-text-muted">
          Built for builders.
        </span>
      </div>
    </footer>
  );
}
