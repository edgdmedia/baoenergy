import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { stats } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BAO Energy Services Ltd., an indigenous, fully-integrated energy, telecom, and FMCG services provider in Nigeria.",
};

export default function AboutPage() {
  return (
    <ScrollReveal>
      {/* Page Banner */}
      <div className="relative h-[360px] flex items-center overflow-hidden">
        <Image
          src="/assets/containers.jpg"
          alt="Containers Banner"
          fill
          className="object-cover object-[center_55%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,7,0.8)] to-[rgba(10,9,7,0.5)]" />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 w-full">
          <div className="w-14 h-1 bg-brand-accent mb-5"></div>
          <h1 className="text-white font-sans font-extrabold text-4xl md:text-[2.5rem] leading-[1.15]">
            About Us
          </h1>
        </div>
      </div>

      {/* Who We Are Content */}
      <section
        className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-22"
        data-reveal
      >
        <div className="text-[13px] font-display font-bold text-brand-accent tracking-[0.06em] uppercase">
          Who We Are
        </div>
        <h2 className="text-text-heading font-sans font-bold text-3xl md:text-[2.25rem] leading-[1.2] mt-[22px] mb-9">
          Providing affordable and reliable energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-text-body font-sans text-[16px] leading-[1.65]">
          <div>
            <p className="mb-5">
              Welcome to BaoEnergy Services Ltd., an innovative and fully-integrated solutions provider established with the mission of delivering exceptional value-added services across a range of industries including Oil and Gas, Telecommunication, FMCG, and more, all within the vibrant landscape of Nigeria. Our core commitment revolves around the provision of unparalleled services to our esteemed clients, empowering them with top-notch solutions in the most proficient and adept manner. Our unwavering dedication is directed towards ensuring the utmost contentment of our clients, translating into heightened value while optimizing costs.
            </p>
            <p>
              At BaoEnergy Services Ltd., we take pride in our unique approach to catering to the diverse needs of industries, ensuring that each client benefits from a tailored and comprehensive experience.
            </p>
          </div>
          <div>
            <p className="mb-5">
              Our intricate understanding of the intricacies within sectors enables us to craft solutions that go beyond conventional boundaries, enabling our clients to thrive in the ever-evolving market. With an unwavering passion for excellence, BaoEnergy Services Ltd. embraces innovation as a driving force behind our operations. We constantly seek ways to elevate our services, introducing novel concepts and cutting-edge methodologies that propel our clients towards success.
            </p>
            <p>
              Our commitment to remaining at the forefront of technological advancements and industry trends ensures that our clients are equipped with the best tools to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-charcoal-900 py-16 md:py-20 px-6 md:px-10" data-reveal>
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <div key={i}>
              <div className="font-display font-extrabold text-3xl md:text-[30px] text-brand-accent leading-none">
                {st.big}
              </div>
              <div className="text-[14px] text-gray-300 leading-[1.55] mt-2">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
