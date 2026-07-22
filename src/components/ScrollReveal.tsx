"use client";

import React, { useEffect, useRef } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = containerRef.current?.querySelectorAll("[data-reveal]");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
}
