"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Members", path: "/directory" },
    { name: "Leaders", path: "/leaders" },
    { name: "Gallery", path: "/gallery" },
    { name: "Wall of Fame", path: "/wall-of-fame" },
    { name: "Events", path: "/events" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/72 backdrop-blur-[18px] border-b border-white/65 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/jci_hyderabad.png" alt="JCI Hyderabad Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`font-semibold text-sm transition-colors duration-200 py-1 ${isActive
                    ? "text-jci-blue"
                    : "text-slate-600 hover:text-jci-navy"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/join"
            className="px-5 py-2.5 rounded-full bg-jci-navy text-white hover:bg-jci-navy/90 text-sm font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-md shadow-jci-navy/10 hover:shadow-lg hover:-translate-y-0.5"
          >
            Join JCI
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-jci-navy hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-73px)] overflow-y-auto bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden border-t border-slate-200/50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex min-h-full flex-col gap-6 p-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-semibold font-satoshi py-2 border-b border-slate-100 transition-colors ${isActive ? "text-jci-blue" : "text-slate-600 hover:text-jci-navy"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-4">
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-semibold flex items-center justify-center gap-2"
            >
              Join JCI Hyderabad
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
