"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "HSE", href: "/hse" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href;
  };

  return (
    <div
      id="v2-nav"
      className={`sticky top-0 z-50 bg-white border-b border-border-subtle transition-all duration-300 ${
        isScrolled ? "shadow-[0_6px_24px_rgba(12,10,8,0.12)]" : "shadow-none"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/logo-primary.svg"
            width={120}
            height={44}
            className="h-11 w-auto cursor-pointer"
            alt="Bao Energy"
            priority
          />
        </Link>
        <div className="flex items-center gap-6 md:gap-[38px]">
          <nav className="hidden sm:flex items-center gap-[38px]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-display font-semibold text-[15px] cursor-pointer py-1.5 border-b-2 transition-colors duration-200 ${
                    active
                      ? "text-brand-accent border-brand-accent"
                      : "text-text-heading border-transparent hover:text-brand-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          {/* Mobile indicator layout or direct Nav Links for smaller screens */}
          <nav className="sm:hidden flex items-center gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-display font-semibold text-[13px] py-1 border-b-2 ${
                    active ? "text-brand-accent border-brand-accent" : "text-text-heading border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <a
            href="mailto:info@baoenergyng.com"
            className="bg-brand-accent text-charcoal-900 font-display font-bold text-[15px] px-6 py-2.5 rounded-[4px] hover:bg-orange-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
