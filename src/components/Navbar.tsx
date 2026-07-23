"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
      <div className="max-w-310 mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/logos/primary.png"
            width={150}
            height={52}
            className="h-13 w-auto cursor-pointer"
            alt="Bao Energy"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9.5">
          <nav className="flex items-center gap-9.5">
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
          <a
            href="#footer"
            className="bg-brand-accent text-charcoal-900 font-display font-bold text-[15px] px-6 py-2.5 rounded-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="#footer"
            className="bg-brand-accent text-charcoal-900 font-display font-bold text-[14px] px-4 py-2 rounded-sm hover:bg-orange-600 transition-colors duration-200"
          >
            Contact
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-heading focus:outline-none p-1.5"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-display font-semibold text-[16px] py-2 border-b border-gray-50 transition-colors duration-200 ${
                    active ? "text-brand-accent" : "text-text-heading"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
