"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "#",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#130F2D] text-slate-400 border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background visual shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-jci-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-jci-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <img src="/jci_hyderabad.png" alt="JCI Hyderabad Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              JCI Hyderabad is a premier youth leadership organization empowering young citizens aged 18 to 40 to create positive sustainable change in society.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-jci-blue hover:to-jci-teal text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-transparent hover:scale-105"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-satoshi font-semibold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Directory", href: "/directory" },
                { name: "Our Leaders", href: "/leaders" },
                { name: "Wall of Fame", href: "/wall-of-fame" },
                { name: "Events Portal", href: "/events" },
                { name: "Sponsors & Partners", href: "/partners" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-jci-blue transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-satoshi font-semibold text-white text-sm uppercase tracking-wider">
              Resources & Affiliations
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {[
                { name: "JCI International Official", href: "https://jci.cc" },
                { name: "JCI India Headquarters", href: "https://jciindia.in" },
                { name: "Membership Benefits", href: "/join" },
                { name: "Contact Headquarters", href: "/contact" },
                { name: "JCI Creed & Creed Principles", href: "/about#creed" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-jci-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Apps */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="font-satoshi font-semibold text-white text-sm uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to the JCI Hyderabad legacy newsletter.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-jci-blue text-sm pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-lg bg-gradient-to-tr from-jci-blue to-jci-teal text-white flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} JCI Hyderabad. Zone XII, JCI India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

