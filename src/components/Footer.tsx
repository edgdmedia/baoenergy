import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-charcoal-950 text-gray-300 px-6 md:px-10 pt-17 pb-6.5">
      <div className="max-w-310 mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.4fr_1fr] gap-11">
        {/* Col 1 - Brand */}
        <div>
          <Link href="/">
            <Image
              src="/assets/logos/logo-white.png"
              width={130}
              height={48}
              className="h-12 w-auto mb-4.5"
              alt="Bao Energy"
            />
          </Link>
          <p className="text-[14px] leading-[1.75] text-gray-300 mb-5 max-w-85">
            We are an indigenous and integrated services provider formed to deliver value added services to various industries such as the Oil and Gas, Telecommunication, FMCG, etc. within Nigeria.
          </p>
          <div className="flex gap-2.5">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-border-on-dark flex items-center justify-center text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-border-on-dark flex items-center justify-center text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
              aria-label="X"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-border-on-dark flex items-center justify-center text-gray-300 hover:border-brand-accent hover:text-brand-accent transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2 - Company */}
        <div>
          <h4 className="text-white font-display font-bold mb-4.5 text-[16px]">Company</h4>
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
          <h4 className="text-white font-display font-bold mb-4.5 text-[16px]">Services</h4>
          <div className="flex flex-col gap-2.75">
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
          <h4 className="text-white font-display font-bold mb-4.5 text-[16px]">Get In Touch</h4>
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

      <div className="max-w-310 mx-auto mt-11 pt-5.5 border-t border-border-on-dark flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
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
