"use client";
import { useState } from "react";
import { Award, Trophy, Star, Sparkles, ShieldCheck, ChevronRight, X } from "lucide-react";

export default function WallOfFame() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [activeYearFilter, setActiveYearFilter] = useState("All");

  const recognitions = [
    {
      id: "rec-1",
      title: "Best Outstanding LOM (India)",
      year: "2025",
      category: "National Awards",
      desc: "Awarded at JCON National Convention for exceptional impact across all areas of JCI opportunities.",
      details: "JCI Hyderabad secured the highest score among 500+ local organizations in India, driven by our extensive training portfolios, corporate incubation programs, and 15+ community impact projects.",
      highlights: ["500+ active members engaged", "12 community projects completed", "Highest rating in leadership governance audits"]
    },
    {
      id: "rec-2",
      title: "CYE National Winner",
      year: "2024",
      category: "Entrepreneurship",
      desc: "Our chapter delegate won the Creative Young Entrepreneur National Finals for an AI Agritech startup pitch.",
      details: "Representing Zone XII, our startup cohort presented a deep-tech solution for crop yield forecasting, gaining mentorship access and securing initial seed capital.",
      highlights: ["$10,000 grant won", "Mentorship under top venture capitals", "Represented India at Asia-Pacific Senate"]
    },
    {
      id: "rec-3",
      title: "Best UNSDG Project Award",
      year: "2024",
      category: "Community Projects",
      desc: "Recognized for driving the absolute best water conservation project in Zone XII, benefiting 10,000+ citizens.",
      details: "Installed automated rainwater harvesting systems and held conservation clinics across suburban schools, reducing local water dependency by 30%.",
      highlights: ["10,000+ citizens benefited", "6 rain harvesting assets deployed", "Zone XII Environmental Impact Award"]
    },
    {
      id: "rec-4",
      title: "Most Active Zone Member Award",
      year: "2023",
      category: "Individual Honors",
      desc: "Awarded to our portfolio officer for spearheading 24+ trainings across Telangana and Andhra Pradesh.",
      details: "Acknowledged at the Area Level Conference, highlighting excellence in training delivery, civic administration, and volunteer coordination.",
      highlights: ["24+ training modules conducted", "1,200+ students certified", "Zone XII President Citation"]
    },
  ];

  const legacyProjects = [
    { title: "Project JCI Spoorthi", desc: "A flagship program that established 5 vocational skill centers for underprivileged women in Hyderabad." },
    { title: "JCI Hyderabad Green Belt", desc: "A massive plantation drive resulting in the plantation of over 50,000 saplings in and around outer ring road." },
    { title: "Youth Leadership Academy", desc: "Annual summer academy training 1,000+ students in civic leadership and basic entrepreneurial skills." },
  ];

  const filteredRecognitions = activeYearFilter === "All"
    ? recognitions
    : recognitions.filter(r => r.year === activeYearFilter);

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-teal bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-md">
            Flagship Pride Page
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Wall of Fame
          </h1>
          <p className="text-slate-500 font-inter">
            Celebrating the milestones, prestigious national awards, and legacy initiatives that define JCI Hyderabad's excellence.
          </p>
        </div>

        {/* Dynamic Milestone Counts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: "National Awards", value: "12+", icon: Trophy },
            { label: "Lives Impacted", value: "25K+", icon: ShieldCheck },
            { label: "Legacy Projects", value: "15+", icon: Sparkles },
            { label: "Zone Accolades", value: "48+", icon: Star }
          ].map((item, idx) => (
            <div key={idx} className="glass-premium p-6 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-4 hover:border-slate-350 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-250/60 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-jci-blue" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-2xl text-jci-navy">{item.value}</h3>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-satoshi mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Floating Year Navigation Panel */}
          <div className="lg:col-span-3 lg:sticky lg:top-28 flex flex-col gap-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Filter Milestone Year</h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {["All", "2025", "2024", "2023"].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setActiveYearFilter(yr)}
                  className={`px-5 py-3 rounded-xl text-left text-xs font-semibold font-satoshi transition-all flex items-center justify-between whitespace-nowrap min-w-[100px] lg:w-full cursor-pointer ${activeYearFilter === yr
                      ? "bg-gradient-to-r from-jci-blue to-jci-teal text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800"
                    }`}
                >
                  <span>{yr === "All" ? "All Milestones" : `Year ${yr}`}</span>
                  <ChevronRight className="w-4 h-4 opacity-65" />
                </button>
              ))}
            </div>
          </div>

          {/* Awards Timeline Grid */}
          <div className="lg:col-span-9 flex flex-col gap-8">
            <h2 className="font-display font-semibold text-2xl text-jci-navy flex items-center gap-3 uppercase">
              <Trophy className="w-6 h-6 text-jci-blue" />
              National & Zone Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredRecognitions.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => setSelectedAward(rec)}
                  className="glass-premium rounded-3xl p-8 bg-white border border-slate-200/85 hover:border-jci-blue/40 cursor-pointer hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group shadow-sm hover:shadow-md"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-display font-semibold text-lg text-slate-350/30 pt-6 pr-6">
                    {rec.year}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                      <Award className="w-6 h-6 text-jci-blue group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">{rec.title}</h3>
                      <span className="text-[10px] font-bold text-jci-blue uppercase mt-1 inline-block font-satoshi">
                        {rec.category} • Year {rec.year}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{rec.desc}</p>
                    <span className="text-[10px] text-jci-blue font-semibold uppercase font-satoshi mt-2 block">Read Story Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legacy Projects Section */}
        <div className="mt-32">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-jci-navy mb-12 text-center flex items-center justify-center gap-3 uppercase">
            <Sparkles className="w-8 h-8 text-jci-teal" />
            Legacy Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legacyProjects.map((proj, idx) => (
              <div
                key={idx}
                className="glass-premium p-8 rounded-3xl bg-white border border-slate-200/85 hover:border-jci-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                    <ShieldCheck className="w-6 h-6 text-jci-teal group-hover:text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-teal transition-colors">{proj.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED AWARD STORY MODAL */}
      {selectedAward && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white max-w-lg w-full rounded-[32px] overflow-hidden relative border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedAward(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10 text-left flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-jci-blue uppercase tracking-widest font-satoshi bg-slate-50 px-3 py-1 rounded-full max-w-fit border border-slate-200">
                  {selectedAward.category} • Year {selectedAward.year}
                </span>
                <h2 className="font-display font-semibold text-3xl text-jci-navy tracking-tight mt-2">
                  {selectedAward.title}
                </h2>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Award Overview</h4>
                <p className="text-slate-655 text-sm leading-relaxed font-inter">
                  {selectedAward.details}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-3">Key Highlights</h4>
                <div className="flex flex-col gap-3">
                  {selectedAward.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs text-slate-600">
                      <Star className="w-4 h-4 text-jci-teal flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
