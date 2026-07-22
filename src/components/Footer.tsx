import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal-950 text-gray-300 px-6 md:px-10 pt-[68px] pb-[26px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.4fr_1fr] gap-[44px]">
        {/* Col 1 - Brand */}
        <div>
          <Link href="/">
            <Image
              src="/assets/logo-white.svg"
              width={130}
              height={48}
              className="h-[48px] w-auto mb-[18px]"
              alt="Bao Energy"
            />
          </Link>
          <p className="text-[14px] leading-[1.75] text-gray-300 mb-5 max-w-[340px]">
            We are an indigenous and integrated services provider formed to deliver value added services to various industries such as the Oil and Gas, Telecommunication, FMCG, etc. within Nigeria.
          </p>
          <div className="flex gap-[10px]">
            <a
              href="#"
              className="w-[36px] height-[36px] h-[36px] rounded-full border border-border-on-dark flex items-center justify-center text-[13px] text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
            >
              f
            </a>
            <a
              href="#"
              className="w-[36px] height-[36px] h-[36px] rounded-full border border-border-on-dark flex items-center justify-center text-[13px] text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
            >
              ✕
            </a>
            <a
              href="#"
              className="w-[36px] height-[36px] h-[36px] rounded-full border border-border-on-dark flex items-center justify-center text-[13px] text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
            >
              ▶
            </a>
          </div>
        </div>

        {/* Col 2 - Company */}
        <div>
          <h4 className="text-white font-display font-bold mb-[18px] text-[16px]">Company</h4>
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[14px] text-gray-300 hover:text-brand-accent transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-[14px] text-gray-300 hover:text-brand-accent transition-colors duration-200">
              About
            </Link>
            <Link href="/services" className="text-[14px] text-gray-300 hover:text-brand-accent transition-colors duration-200">
              Services
            </Link>
            <Link href="/hse" className="text-[14px] text-gray-300 hover:text-brand-accent transition-colors duration-200">
              HSE
            </Link>
          </div>
        </div>

        {/* Col 3 - Services */}
        <div>
          <h4 className="text-white font-display font-bold mb-[18px] text-[16px]">Services</h4>
          <div className="flex flex-col gap-[11px]">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="text-[14px] text-gray-300 hover:text-brand-accent transition-colors duration-200 text-left"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4 - Get In Touch */}
        <div>
          <h4 className="text-white font-display font-bold mb-[18px] text-[16px]">Get In Touch</h4>
          <div className="text-[14px] leading-[1.9] text-gray-300">
            36 Calabar Street, Surulere, Lagos
            <br />
            <a href="mailto:info@baoenergyng.com" className="text-brand-accent hover:underline">
              info@baoenergyng.com
            </a>
            <br />
            <a href="mailto:baoenergyng@gmail.com" className="text-brand-accent hover:underline">
              baoenergyng@gmail.com
            </a>
            <br />
            <a href="tel:+2348188041526" className="text-gray-300 hover:text-brand-accent transition-colors duration-200">
              +234 818 804 1526
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-11 pt-[22px] border-t border-border-on-dark flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
        <span>© 2026 BAO Energy, All rights reserved.</span>
        <span className="flex gap-5">
          <Link href="/about" className="text-gray-500 hover:text-brand-accent transition-colors duration-200">
            About
          </Link>
          <a href="#" className="text-gray-500 hover:text-brand-accent transition-colors duration-200">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  );
}
