import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our six integrated service lines covering maintenance support, asset integrity, procurement, metering, and manpower solutions.",
};

export default function ServicesPage() {
  return (
    <ScrollReveal>
      {/* Page Banner */}
      <div className="relative h-90 flex items-center overflow-hidden">
        <Image
          src="/assets/refinery-sunset.jpg"
          alt="Refinery Sunset Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(10,9,7,0.78)] to-[rgba(10,9,7,0.5)]" />
        <div className="relative max-w-310 mx-auto px-6 md:px-10 w-full">
          <div className="w-14 h-1 bg-brand-accent mb-5"></div>
          <h1 className="text-white font-sans font-extrabold text-4xl md:text-[2.5rem] leading-[1.15]">
            Our Services
          </h1>
        </div>
      </div>

      {/* Grid listing */}
      <section
        className="max-w-310 mx-auto px-6 md:px-10 py-16 md:py-22"
        data-reveal
      >
        <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
          What We Offer
        </div>
        <h2 className="text-text-heading font-sans font-bold text-2xl md:text-[1.5rem] leading-[1.3] mt-5.5 mb-11 max-w-195 text-pretty">
          Our sustained competitive advantage within the industry strategically positions us to accomplish our clients&apos; goals.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} heightClass="h-[320px]" />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
