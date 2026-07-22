"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { stats } from "@/data/servicesData";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[660px] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-[-60px_0] bg-[url(/assets/hero-workers.jpg)] bg-center bg-[length:cover] will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,7,0.86)] via-[rgba(10,9,7,0.42)] via-60% to-[rgba(10,9,7,0.2)]" />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 h-full flex flex-col justify-center pb-24 md:pb-16">
        <div className="w-16 h-1 bg-brand-accent mb-7"></div>
        <h1 className="text-white font-sans font-extrabold text-4xl md:text-[3.5rem] leading-[1.08] max-w-[820px] tracking-tight text-pretty">
          Meeting Future Demand In A Sustainable Way
        </h1>
        <p className="text-gray-150 font-sans font-medium text-lg leading-relaxed mt-[22px] mb-[34px] max-w-[560px]">
          An indigenous, fully-integrated services provider delivering value-added solutions across Oil & Gas, Telecommunications and FMCG in Nigeria.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-accent text-charcoal-900 font-display font-bold px-6 py-3.5 rounded-[4px] hover:bg-orange-600 transition-colors duration-200"
          >
            ➜ Explore Our Services
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-display font-bold px-6 py-3.5 rounded-[4px] hover:bg-white hover:text-charcoal-900 transition-all duration-200"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute left-0 right-0 bottom-0 bg-[rgba(7,6,5,0.55)] backdrop-blur-[2px] border-t border-[rgba(255,255,255,0.12)]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-5.5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((st, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-[26px] text-brand-accent leading-none">
                {st.big}
              </div>
              <div className="text-[13px] text-gray-300 leading-normal mt-1">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
