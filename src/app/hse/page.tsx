import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { hsePrinciples } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Health, Safety & Environment (HSE)",
  description:
    "Safety is the foundation of every service we deliver. Read our HSE commitment and core principles.",
};

export default function HSEPage() {
  return (
    <ScrollReveal>
      {/* Page Banner */}
      <div className="relative h-[360px] flex items-center overflow-hidden">
        <Image
          src="/assets/worker.jpg"
          alt="Worker Banner"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,7,0.8)] to-[rgba(10,9,7,0.45)]" />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 w-full">
          <div className="w-14 h-1 bg-brand-accent mb-5"></div>
          <h1 className="text-white font-sans font-extrabold text-4xl md:text-[2.5rem] leading-[1.15] max-w-[760px]">
            Health, Safety &amp; Environment
          </h1>
        </div>
      </div>

      {/* Commitment Section */}
      <section
        className="max-w-[1240px] mx-auto px-0 py-16 md:py-20"
        data-reveal
      >
        <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
          Our Commitment
        </div>
        <h2 className="text-text-heading font-sans font-bold text-3xl md:text-[2.25rem] leading-[1.2] mt-[22px] mb-6 text-pretty">
          Zero harm is the standard against which we measure every task
        </h2>
        <div className="flex flex-col gap-[18px] text-text-body font-sans text-[16px] leading-[1.65]">
          <p>
            At BaoEnergy Services Ltd. we regard the health of our people, the safety of every worksite, and the protection of the environment as inseparable from operational excellence. From valve servicing and instrumentation to metering recertification and manpower deployment, each scope of work is planned, executed and reviewed against a structured HSE framework.
          </p>
          <p>
            That framework is not a document that sits on a shelf — it shapes how our teams mobilise, how equipment is certified, and how every job is closed out. It is the reason our clients trust us on live, high-consequence assets.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="bg-surface-sunken py-16 md:py-[72px] px-6 md:px-10" data-reveal>
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            {hsePrinciples.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-[14px] p-8 border-t-3 border-brand-accent shadow-sm"
              >
                <h4 className="text-text-heading font-sans font-bold text-[18px] mb-3 leading-tight">
                  {p.title}
                </h4>
                <p className="text-text-body font-sans text-[16px] leading-[1.65]">
                  {p.long}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-10 text-center overflow-hidden">
        <Image
          src="/assets/refinery-night.jpg"
          alt="Refinery Night Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,6,5,0.84)] to-[rgba(7,6,5,0.9)]" />
        <div className="relative max-w-[760px] mx-auto">
          <h2 className="text-white font-sans font-bold text-3xl md:text-[2rem] leading-[1.2] mb-4 text-pretty">
            Work with a partner that puts safety first
          </h2>
          <div className="w-[72px] h-[3px] bg-brand-accent mx-auto mb-[26px]"></div>
          <a
            href="#footer"
            className="inline-flex items-center gap-2 bg-brand-accent text-charcoal-900 font-display font-bold text-[16px] px-[30px] py-[15px] rounded-[4px] hover:bg-orange-600 transition-colors duration-200"
          >
            ➜ Contact Us
          </a>
        </div>
      </section>
    </ScrollReveal>
  );
}
