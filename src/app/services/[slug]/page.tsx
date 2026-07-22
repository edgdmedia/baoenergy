import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.excerpt,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  // Get other services (slice to first 2 other than current)
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <ScrollReveal>
      {/* Page Banner */}
      <div className="relative h-[440px] flex items-center overflow-hidden">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,9,7,0.82)] to-[rgba(10,9,7,0.42)]" />
        <div className="relative max-w-[1240px] mx-auto px-6 md:px-10 w-full flex flex-col justify-center h-full">
          <Link
            href="/services"
            className="text-gray-150 hover:text-brand-accent text-[14px] mb-3 transition-colors duration-200"
          >
            ← Back to Services
          </Link>
          <div className="w-14 h-1 bg-brand-accent mb-[18px]"></div>
          <h1 className="text-white font-sans font-extrabold text-4xl md:text-[2.5rem] leading-[1.15] max-w-[820px]">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Service Body Copy */}
      <section
        className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-20"
        data-reveal
      >
        <div className="flex flex-col gap-[22px] text-text-body font-sans text-[16px] leading-[1.65]">
          {service.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-10 text-center overflow-hidden">
        <Image
          src="/assets/cooling-towers.jpg"
          alt="Cooling towers background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,6,5,0.82)] to-[rgba(7,6,5,0.9)]" />
        <div className="relative max-w-[780px] mx-auto">
          <h2 className="text-white font-sans font-bold text-3xl md:text-[2rem] leading-[1.2] text-pretty">
            A Vital Energy Resource For A Better Tomorrow
          </h2>
          <div className="w-[80px] h-[3px] bg-brand-accent mx-auto mt-[22px] mb-[26px]"></div>
          <a
            href="mailto:info@baoenergyng.com"
            className="inline-flex items-center gap-2 bg-brand-accent text-charcoal-900 font-display font-bold text-[16px] px-[30px] py-[15px] rounded-[4px] hover:bg-orange-600 transition-colors duration-200"
          >
            ➜ Contact Us
          </a>
        </div>
      </section>

      {/* Other Services */}
      <section
        className="max-w-[1240px] mx-auto px-6 md:px-10 py-16 md:py-20"
        data-reveal
      >
        <h3 className="text-text-heading font-sans font-bold text-[18px] leading-[1.4] mb-[22px]">
          Other Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
          {relatedServices.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              heightClass="h-[230px]"
              showExcerpt={false}
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
