"use client";
import { useState } from "react";
import { Sparkles, Building, Handshake, CheckCircle2, X, Star, FileText } from "lucide-react";

export default function Partners() {
  const [partnerForm, setPartnerForm] = useState({ company: "", contactPerson: "", email: "", tier: "Strategic Partner" });
  const [submitted, setSubmitted] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const tiers = [
    {
      id: "strategic",
      name: "Strategic Partners",
      desc: "Collaborating with local chapters on city-wide leadership academies and incubation programs.",
      count: "3 Partners",
      caseStudy: {
        title: "T-Hub Incubation Alliance",
        description: "How JCI Hyderabad and T-Hub built the CYE Startup Pitch Competition to support 50+ local startup founders.",
        stats: ["50+ founders trained", "$100K seed money enabled", "12 mentors engaged"],
        deliverables: "Co-working space access, seed pitch validation clinics, and regulatory advice channels."
      }
    },
    {
      id: "knowledge",
      name: "Knowledge Partners",
      desc: "Co-authoring training manuals, hosting masterclass courses, and mentoring CYE candidates.",
      count: "4 Partners",
      caseStudy: {
        title: "Ascent corporate masterclasses",
        description: "Designed and certified over 300 young executives in strategic negotiation, public speaking, and board management.",
        stats: ["300+ professionals certified", "16 masterclass chapters", "98% satisfaction rating"],
        deliverables: "Official certificates of coordination, executive training toolkits, and virtual campus access."
      }
    },
    {
      id: "community",
      name: "Community Sponsors",
      desc: "Providing financial grants and resources for JCI Rise local projects and UNSDG initiatives.",
      count: "8 Sponsors",
      caseStudy: {
        title: "Project SPOORTHI Skill Centers",
        description: "Partnered with local industrial brands to establish vocational hubs supporting skills development for underprivileged groups.",
        stats: ["5 centers deployed", "1,500 women trained", "85% job placement rate"],
        deliverables: "Skill-based training equipment, localized tutor wages, and recruitment assistance directories."
      }
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setPartnerForm({ company: "", contactPerson: "", email: "", tier: "Strategic Partner" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-blue bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-md">
            Our Sponsors
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Corporate Partners
          </h1>
          <p className="text-slate-500 font-inter">
            JCI Hyderabad collaborates with local industries, incubators, and knowledge hubs to finance and drive community programs. Click any card to view its strategic case study.
          </p>
        </div>

        {/* Partner Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedCaseStudy(tier.caseStudy)}
              className="glass-premium p-8 rounded-3xl bg-white border border-slate-200/85 hover:border-jci-teal/40 hover:-translate-y-1 cursor-pointer transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                  <Handshake className="w-6 h-6 text-jci-blue group-hover:text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">{tier.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tier.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-jci-blue font-semibold uppercase font-satoshi">{tier.count}</span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase font-satoshi">View Case Study →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Form Section */}
        <div className="max-w-3xl mx-auto glass-premium p-8 md:p-12 rounded-[32px] bg-white border border-slate-200/85 relative shadow-md">
          <div className="absolute inset-0 bg-gradient-to-tr from-jci-blue/5 to-transparent pointer-events-none" />

          <div className="text-center max-w-lg mx-auto mb-10 relative z-10">
            <h2 className="font-display font-semibold text-2xl md:text-3xl text-jci-navy uppercase">Inquire Partnership</h2>
            <p className="text-slate-600 text-sm mt-2 font-inter">
              Collaborate with JCI Hyderabad to boost CSR initiatives and connect with high-potential young leaders.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center gap-4 relative z-10">
              <CheckCircle2 className="w-14 h-14 text-jci-blue animate-bounce" />
              <h3 className="font-display font-semibold text-xl text-jci-navy">Inquiry Sent Successfully</h3>
              <p className="text-slate-550 text-sm font-inter">
                Our public relations team will review your proposal and contact your business lead within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Company Name</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.company}
                    onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                    placeholder="Enter company name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Contact Person</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.contactPerson}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contactPerson: e.target.value })}
                    placeholder="Enter name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Official Email</label>
                <input
                  type="email"
                  required
                  value={partnerForm.email}
                  onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  placeholder="Enter work email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-satoshi">Partnership Tier Interest</label>
                <select
                  value={partnerForm.tier}
                  onChange={(e) => setPartnerForm({ ...partnerForm, tier: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-800 outline-none text-sm transition-all"
                >
                  <option value="Strategic Partner">Strategic Partner</option>
                  <option value="Knowledge Partner">Knowledge Partner</option>
                  <option value="Community Sponsor">Community Sponsor</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-jci-blue to-jci-teal text-white font-bold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send Partnership Request
              </button>
            </form>
          )}
        </div>
      </div>

      {/* CASE STUDY OVERLAY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white max-w-lg w-full rounded-[32px] overflow-hidden relative border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="p-8 md:p-10 text-left flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-jci-blue uppercase tracking-widest font-satoshi flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Partnership Case Study
                </span>
                <h3 className="font-display font-semibold text-2xl text-jci-navy mt-1">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Scope & Impact</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {selectedCaseStudy.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-3">Key Metrics Accomplished</h4>
                <div className="flex flex-col gap-2">
                  {selectedCaseStudy.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Star className="w-4 h-4 text-jci-teal" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Resources Exchanged</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {selectedCaseStudy.deliverables}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
