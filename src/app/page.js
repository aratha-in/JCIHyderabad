"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Star, Users, Award, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", interest: "Membership" });
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 30 });

  const slides = [
    {
      title: "Empowering Hyderabad's Next Generation of Leaders",
      desc: "Developing entrepreneurial capacity, global connections, and civic influence for young professionals aged 18 to 40. Welcome to the digital benchmark of JCI India.",
      image: "/hero_leadership.png",
      badge: "World-Class Leadership Chapter",
      ctaPrimary: "Join JCI Hyderabad",
      ctaPrimaryLink: "/join",
      ctaSecondary: "Explore Events",
      ctaSecondaryLink: "/events",
      tag: "LO ID: 73291 • Zone XII"
    },
    {
      title: "Incubating High-Impact Startups & Businesses",
      desc: "Connect with venture funding, pitch in the Creative Young Entrepreneurs (CYE) challenge, and scale your commercial alliances.",
      image: "/hero_business.png",
      badge: "Business & Entrepreneurship",
      ctaPrimary: "View Partners",
      ctaPrimaryLink: "/partners",
      ctaSecondary: "Explore Challenges",
      ctaSecondaryLink: "/events",
      tag: "Business Incubation Portfolio"
    },
    {
      title: "Building UNSDG Community Welfare Initiatives",
      desc: "Driving local actions aligned with UN Sustainable Development Goals (SDGs), focusing on environmental growth and vocational skills.",
      image: "/hero_community.png",
      badge: "Community & SDG Impact",
      ctaPrimary: "Our Wall of Fame",
      ctaPrimaryLink: "/wall-of-fame",
      ctaSecondary: "Register to Help",
      ctaSecondaryLink: "/join",
      tag: "Civic Outreach Portfolio"
    }
  ];

  // Auto-play interval
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  // Countdown timer logic for the featured event
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "500+", label: "Active Members", Icon: Users },
    { value: "150+", label: "Impact Projects", Icon: Sparkles },
    { value: "35+", label: "Years of Legacy", Icon: Award },
    { value: "12K+", label: "Volunteer Hours", Icon: ShieldCheck },
    { value: "25K+", label: "Lives Impacted", Icon: Globe },
    { value: "12+", label: "Local Chapters", Icon: Globe },
  ];

  const benefits = [
    { title: "Executive Leadership", desc: "Gain hands-on managerial and presidency experience by leading active JCI portfolios." },
    { title: "Strategic Networking", desc: "Connect directly with thousands of young business owners and corporate professionals." },
    { title: "CYE Incubation", desc: "Compete in Creative Young Entrepreneurs challenge to access mentorship and venture funding." },
    { title: "Business Opportunities", desc: "Leverage national and international alliances to scale products and services." },
    { title: "Public Speaking", desc: "Master speech delivery and debate moderation via JCI world-recognized courses." },
    { title: "International Exposure", desc: "Attend global General Assemblies, Area Conferences, and JCI World Congresses." },
  ];

  const pillars = [
    { title: "Individual Development", desc: "Capacity building through expert-led leadership masterclasses, soft skills clinics, and debating programs." },
    { title: "Business & Entrepreneurship", desc: "Scaling startup opportunities through direct commercial channels, incubators, and CyE pitch platforms." },
    { title: "Community Impact", desc: "Direct local action addressing civic challenges, aligned with UN Sustainable Development Goals (SDGs)." },
    { title: "International Cooperation", desc: "Cross-border delegation summits, international friendship alliances, and global leadership opportunities." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setLeadForm({ name: "", email: "", phone: "", interest: "Membership" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden">
      {/* Dynamic Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      {/* SECTION 1: HERO CAROUSEL */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative">

          {/* Left Column: Text Information (Active Slide Content) */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left transition-all duration-500 animate-in fade-in slide-in-from-left-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EEF6FB] border border-jci-blue/10 text-jci-blue text-xs font-semibold uppercase tracking-wider max-w-fit font-satoshi shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slides[activeSlide].badge}</span>
            </div>
            <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-jci-navy uppercase">
              {slides[activeSlide].title}
            </h1>
            <p className="text-slate-550 text-base md:text-lg leading-relaxed max-w-2xl font-inter">
              {slides[activeSlide].desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href={slides[activeSlide].ctaPrimaryLink}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-jci-blue/20"
              >
                {slides[activeSlide].ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={slides[activeSlide].ctaSecondaryLink}
                className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all hover:scale-105"
              >
                {slides[activeSlide].ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Right Column: Carousel Image Frame */}
          <div className="lg:col-span-5 relative flex flex-col items-center gap-6">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.06)] group bg-slate-50">
              <img
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 z-10 text-left">
                <span className="text-[10px] text-jci-teal font-semibold uppercase tracking-widest font-satoshi">
                  {slides[activeSlide].tag}
                </span>
                <h3 className="font-display font-semibold text-lg text-white mt-1">
                  JCI Hyderabad Portal
                </h3>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeSlide === i ? "bg-jci-blue w-6" : "bg-slate-200"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: IMPACT DASHBOARD */}
      <section className="py-20 bg-[#F8FAFC] border-y border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-slate-200/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2 px-4 first:pl-0">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-1 shadow-sm">
                  <stat.Icon className="w-5 h-5 text-jci-blue" />
                </div>
                <span className="font-stats font-bold text-3xl md:text-4xl text-jci-navy">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-satoshi">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRESIDENT'S LEADERSHIP MESSAGE */}
      <section className="py-32 bg-[#130F2D] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 rounded-[24px] bg-white/5 border border-white/10 shadow-2xl max-w-sm w-full">
                <div className="relative aspect-[3/4] rounded-[18px] overflow-hidden bg-slate-900/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <Users className="w-20 h-20 text-slate-700" />
                  <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                    <h4 className="font-display font-semibold text-2xl tracking-wide text-white">Jc. Ganesh Nagu</h4>
                    <p className="text-xs text-jci-teal font-semibold uppercase tracking-widest mt-1 font-satoshi">
                      LOM President, JCI Hyderabad (2026)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-jci-teal font-semibold text-xs uppercase tracking-widest font-satoshi">
                President's Message
              </span>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-white leading-tight uppercase">
                "Leading with Legacy, <br />
                Innovating for the Future"
              </h2>
              <p className="font-quote text-slate-300 italic text-2xl leading-relaxed mt-2">
                "Welcome to JCI Hyderabad. Our theme for 2026 is Legacy Reimagined. We are committed to fostering an ecosystem where every member receives high-value skill development, develops strategic business networks, and designs local projects to impact Hyderabad positively."
              </p>
              <div className="flex flex-col gap-4 mt-4 text-slate-300 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jci-teal flex-shrink-0" />
                  <span>Developing 50+ accredited leadership trainers this year.</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-jci-teal flex-shrink-0" />
                  <span>Driving 15+ UNSDG community welfare projects.</span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6 flex flex-col gap-1">
                <span className="font-quote text-2xl italic text-jci-teal">Ganesh Nagu</span>
                <span className="text-xs uppercase tracking-wider text-slate-400">JCI President, Hyderabad</span>
              </div>

              <div className="mt-6">
                <Link
                  href="/leaders"
                  className="inline-flex items-center gap-2 text-jci-teal hover:text-white font-bold text-sm transition-colors font-satoshi"
                >
                  View Leadership Directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY JOIN JCI HYDERABAD */}
      <section className="py-32 bg-white border-t border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-jci-blue font-semibold text-xs uppercase tracking-widest font-satoshi mb-3 inline-block">
            Member Perks
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mb-6 uppercase">
            Why Join JCI Hyderabad
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-base font-inter">
            JCI offers a unique environment where young leaders can sharpen skills, expand business, and engage globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((perk, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-jci-blue/30 text-left flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                    <Star className="w-5 h-5 text-jci-blue group-hover:text-white" />
                  </div>
                  <h3 className="font-satoshi font-semibold text-xl text-jci-navy">
                    {perk.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-inter">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FOUR AREAS OF OPPORTUNITY */}
      <section className="py-32 bg-[#F8FAFC] border-t border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-jci-teal font-semibold text-xs uppercase tracking-widest font-satoshi mb-3 inline-block">
            Foundations
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mb-6 uppercase">
            Four Areas of Opportunity
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20 text-base font-inter">
            Structuring JCI's global curriculum to enable personal growth and community development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-200/60 hover:border-jci-teal/40 text-left flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-all duration-300"
              >
                <div className="flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-jci-blue/5 to-jci-teal/5 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-jci-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-jci-navy tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-inter">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: UPCOMING EVENTS WITH COUNTDOWN */}
      <section className="py-32 bg-white border-t border-slate-200/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <span className="text-jci-blue font-semibold text-xs uppercase tracking-widest font-satoshi">
                Featured Flagship
              </span>
              <h2 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy uppercase">
                Zone Conference <br />
                <span className="text-jci-gradient">JCON 2026</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-inter">
                Register for the largest gather of business minds, national officers, and leadership trainers under Zone XII in Hyderabad.
              </p>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3 max-w-sm mt-2">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hours", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.minutes },
                  { label: "Secs", val: timeLeft.seconds },
                ].map((t, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-200/60 shadow-sm">
                    <span className="font-display font-semibold text-2xl text-jci-navy block">
                      {String(t.val).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold font-satoshi">{t.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/events"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold text-sm inline-flex items-center gap-2 hover:scale-105 transition-all shadow-md shadow-jci-blue/10"
                >
                  Register Ticket
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-[32px] glass-premium flex flex-col gap-6 text-left bg-white">
                <span className="text-xs font-bold text-jci-blue uppercase tracking-widest font-satoshi">
                  Other Event Sessions
                </span>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "CYE Pitch Challenge", date: "Sep 08, 2026", desc: "Startups pitch to VCs at T-Hub Phase 2." },
                    { title: "NALANDA Leadership Camp", date: "Aug 20, 2026", desc: "Accredited PR and speech workshops in Jubilee Hills." },
                  ].map((evt, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-colors flex items-center justify-between shadow-sm">
                      <div>
                        <h4 className="font-satoshi font-semibold text-jci-navy text-base">{evt.title}</h4>
                        <p className="text-xs text-slate-500 mt-1">{evt.desc}</p>
                      </div>
                      <span className="text-xs text-jci-blue font-bold whitespace-nowrap ml-4">{evt.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: JOIN CTA FORM */}
      <section className="py-32 bg-[#130F2D] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-jci-teal font-semibold text-xs uppercase tracking-widest font-satoshi">
              Get Started
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-white uppercase">
              Become a Catalyst <br />
              of Leadership
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg font-inter">
              Submit your interest profile to schedule a membership committee call and start your onboarding.
            </p>
            <div className="flex flex-col gap-4 mt-2 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-jci-teal flex-shrink-0" />
                <span>Accredited certificate modules.</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-jci-teal flex-shrink-0" />
                <span>Access to corporate board appointments.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 md:p-12 rounded-[32px] glass-premium-dark shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-jci-teal animate-bounce" />
                  <h3 className="font-display font-semibold text-2xl text-white">Application Logged!</h3>
                  <p className="text-slate-400 text-sm font-inter">
                    A LOM officer will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-satoshi">Full Name</label>
                    <input
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-jci-blue text-white outline-none text-sm transition-all placeholder-slate-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-satoshi">Email Address</label>
                      <input
                        type="email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="Enter email"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-jci-blue text-white outline-none text-sm transition-all placeholder-slate-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-satoshi">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        placeholder="Enter phone"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-jci-blue text-white outline-none text-sm transition-all placeholder-slate-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-satoshi">Primary Interest Area</label>
                    <select
                      value={leadForm.interest}
                      onChange={(e) => setLeadForm({ ...leadForm, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#130F2D] border border-white/10 focus:border-jci-blue text-white outline-none text-sm transition-all"
                    >
                      <option value="Membership">General Membership</option>
                      <option value="Training">Skills & Leadership Trainings</option>
                      <option value="Business">Business Networking (CYE)</option>
                      <option value="Community">Community Impact Projects</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-jci-blue/20"
                  >
                    Submit Form Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
