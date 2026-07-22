import Link from "next/link";
import Image from "next/image";
import { Service } from "@/data/servicesData";

interface ServiceCardProps {
  service: Service;
  heightClass?: string;
  showExcerpt?: boolean;
}

export default function ServiceCard({
  service,
  heightClass = "h-[340px]",
  showExcerpt = true,
}: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative ${heightClass} w-full overflow-hidden rounded-xl bg-charcoal-800 cursor-pointer block transition-transform duration-400 cubic-bezier(0.2, 0.7, 0.2, 1) hover:-translate-y-1.5`}
    >
      <Image
        src={service.img}
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,8,6,0.95)] via-[rgba(9,8,6,0.15)] via-62% to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h4 className="text-white font-sans font-bold text-[18px] leading-tight mb-2 group-hover:text-brand-accent transition-colors duration-200">
          {service.title}
        </h4>
        {showExcerpt && (
          <p className="text-gray-300 font-sans text-[14px] leading-[1.55]">
            {service.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
