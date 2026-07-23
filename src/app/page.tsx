import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { services, hsePrinciples, sectors, stats } from "@/data/servicesData";

export default function Home() {
  const homeServices = services.slice(0, 3);

  return (
    <ScrollReveal>
      {/* Hero Component */}
      <Hero />

      {/* Mobile Stats Strip - Below Home Banner */}
      <div className="block md:hidden bg-charcoal-900 border-b border-charcoal-800 py-6 px-6">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((st, i) => (
            <div key={i} className="bg-charcoal-800 p-4 rounded-xl border border-charcoal-700/50">
              <div className="font-display font-extrabold text-[20px] text-brand-accent leading-none">
                {st.big}
              </div>
              <div className="text-[11px] text-gray-300 leading-normal mt-1.5">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who We Are */}
      <section
        className="max-w-310 mx-auto px-6 md:px-10 py-16 md:py-24"
        data-reveal
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left card */}
          <div className="relative h-75 sm:h-100 sm:h-115 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/containers.jpg"
              alt="Operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute left-0 bottom-0 bg-brand-accent text-charcoal-900 p-6 md:py-5 md:px-6.5 rounded-tr-xl max-w-70">
              <div className="font-display font-extrabold text-lg md:text-[20px] leading-snug">
                A Vital Energy Resource For A Better Tomorrow
              </div>
            </div>
          </div>

          {/* Right details */}
          <div>
            <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
              Who We Are
            </div>
            <div className="w-16 h-1 bg-brand-accent mt-3 mb-5"></div>
            <h2 className="text-text-heading font-sans font-bold text-3xl md:text-[2.25rem] leading-[1.2] mb-5.5 text-pretty">
              Providing affordable and reliable energy services
            </h2>
            <p className="text-text-body font-sans text-[16px] leading-[1.65] mb-4.5">
              BaoEnergy Services Ltd. was established to deliver exceptional value-added services across a range of industries, empowering our clients with top-notch solutions in the most proficient and adept manner. Our sustained competitive advantage strategically positions us to accomplish our clients&apos; goals.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6.5 mb-7.5">
              {sectors.map((sec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-display font-semibold text-[15px] text-text-heading"
                >
                  <span className="text-brand-accent">➜</span>
                  {sec}
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-charcoal-900 text-white font-display font-semibold px-6 py-3 rounded-sm hover:bg-brand-accent hover:text-charcoal-900 transition-colors duration-200"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-charcoal-900 text-white py-16 md:py-24 px-6 md:px-10" data-reveal>
        <div className="max-w-310 mx-auto">
          <div className="max-w-160 mb-12 md:mb-13">
            <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
              What We Offer
            </div>
            <div className="w-16 h-0.75 bg-brand-accent mt-3 mb-5.5"></div>
            <h2 className="text-white font-sans font-bold text-3xl md:text-[2.25rem] leading-[1.2] text-pretty">
              Integrated support across the full asset lifecycle
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
            {homeServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="flex mt-9">
            <Link
              href="/services"
              className="inline-flex items-center bg-brand-accent text-charcoal-900 font-display font-semibold px-6 py-3 rounded-sm hover:bg-orange-600 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HSE teaser */}
      <section
        className="max-w-310 mx-auto px-6 md:px-10 py-16 md:py-24"
        data-reveal
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
              Health, Safety &amp; Environment
            </div>
            <div className="w-16 h-1 bg-brand-accent mt-3 mb-5"></div>
            <h2 className="text-text-heading font-sans font-bold text-3xl md:text-[2.25rem] leading-[1.2] mb-5 text-pretty">
              Safety is the foundation of every service we deliver
            </h2>
            <p className="text-text-body font-sans text-[16px] leading-[1.65] mb-6.5">
              We regard the health of our people, the safety of every worksite, and the protection of the environment as inseparable from operational excellence. Every campaign is planned, executed and reviewed against a structured HSE framework built around a single commitment — zero harm.
            </p>
            <Link
              href="/hse"
              className="inline-flex items-center justify-center bg-charcoal-900 text-white font-display font-semibold px-6 py-3 rounded-sm hover:bg-brand-accent hover:text-charcoal-900 transition-colors duration-200"
            >
              Our HSE Approach
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {hsePrinciples.map((p, i) => (
              <div
                key={i}
                className="border border-border-subtle rounded-xl p-6 bg-white shadow-sm"
              >
                <div className="font-display font-extrabold text-[15px] text-brand-accent mb-2">
                  {p.no}
                </div>
                <h4 className="text-text-heading font-sans font-bold text-[18px] mb-2 leading-tight">
                  {p.title}
                </h4>
                <p className="text-text-muted font-sans text-[14px] leading-[1.55]">
                  {p.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="bg-surface-sunken py-12 md:py-16 px-6 md:px-10" data-reveal>
        <div className="max-w-310 mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14">
          <div className="shrink-0">
            <div className="text-[13px] font-display font-bold text-text-heading tracking-[0.06em] uppercase">
              Trusted Brands
            </div>
            <div className="w-14 h-0.75 bg-brand-accent mt-2.5"></div>
          </div>
          <div className="flex flex-wrap items-center gap-14">
            <div className="relative h-13 w-35">
              <Image
                src="/assets/client-seplat.jpg"
                alt="Seplat Energy"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="relative h-15 w-40">
              <Image
                src="/assets/client-firstep.png"
                alt="First Exploration & Petroleum"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact banner */}
      <section className="relative py-24 md:py-32 px-6 md:px-10 text-center overflow-hidden">
        <Image
          src="/assets/cooling-towers.jpg"
          alt="Cooling towers background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[rgba(7,6,5,0.82)] to-[rgba(7,6,5,0.9)]" />
        <div className="relative max-w-205 mx-auto" data-reveal>
          <h2 className="text-white font-sans font-extrabold text-3xl md:text-[2.5rem] leading-[1.15] text-pretty">
            Together, We Can Create A Safe And Sustainable Future
          </h2>
          <div className="w-20 h-0.75 bg-brand-accent mx-auto mt-6 mb-6.5"></div>
          <p className="text-gray-150 font-sans font-medium text-lg leading-relaxed mb-8">
            Speak with our team about maintenance, integrity, procurement, metering and manpower support tailored to your operations.
          </p>
          <a
            href="mailto:info@baoenergyng.com"
            className="inline-flex items-center gap-2 bg-brand-accent text-charcoal-900 font-display font-bold text-[16px] px-8 py-4 rounded-sm hover:bg-orange-600 transition-colors duration-200"
          >
            ➜ Contact Us
          </a>
        </div>
      </section>
    </ScrollReveal>
  );
}
