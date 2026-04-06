"use client";

import { useState, useEffect } from "react";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setReady(true), 1500);
    document.fonts.ready.then(() => {
      clearTimeout(fallback);
      setTimeout(() => setReady(true), 300);
    });
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {!ready && (
        <div
          className="fixed inset-0 z-[100] bg-[var(--color-background)] flex items-center justify-center"
        >
          <p className="font-mono text-sm text-[var(--color-text-muted)]">
            orbit
          </p>
        </div>
      )}
      <div style={{ visibility: ready ? "visible" : "hidden" }}>
        {children}
      </div>
    </>
  );
}
