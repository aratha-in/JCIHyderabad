"use client";
import { useState } from "react";
import { Users, Award, ShieldCheck, Mail, X, Star } from "lucide-react";

export default function Leaders() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const board = [
    {
      name: "Jc. Ganesh Nagu",
      role: "LOM President (2026)",
      desc: "Overall lead officer overseeing chapter expansion and strategic collaborations.",
      email: "president@jcihyderabad.org",
      bio: "An active JCI member for 8 years, Rajesh focuses on expanding the local organization's corporate and startup footprint, incubating new leadership workshops, and scaling the chapter's community welfare projects.",
      milestones: ["National President's Merit Award 2025", "100+ Community Trainings Moderated"]
    },
    {
      name: "Jc. Sneha Reddy",
      role: "Vice President (Training)",
      desc: "Responsible for organizing soft skills seminars and personal development masterclasses.",
      email: "training@jcihyderabad.org",
      bio: "Sneha is an HR consultant and accredited corporate coach. She directs training clinics, public speaking panels, and the flagship NALANDA academy.",
      milestones: ["Best Trainer of Zone XII (2024)", "Initiated 'Women in Public Speaking' Forum"]
    },
    {
      name: "Jc. Vikram Malhotra",
      role: "Vice President (Business)",
      desc: "Drives CYE (Creative Young Entrepreneurs) pitch programs and B2B alliances.",
      email: "business@jcihyderabad.org",
      bio: "Vikram coordinates business networks and matches young founders with institutional funding channels. He is a primary advisor for the CYE Incubation cohort.",
      milestones: ["Facilitated $2M startup investment pool", "National Business Excellence Delegate"]
    },
    {
      name: "Jc. Ananya Sen",
      role: "Secretary",
      desc: "Manages chapter records, national board communications, and governance audits.",
      email: "secretary@jcihyderabad.org",
      bio: "Ananya is a corporate attorney ensuring complete adherence to constitutional JCI mandates, coordinating executive board meets, and conducting chapter audit cycles.",
      milestones: ["Chapter Compliance Standard Award", "Zone Legal Counsel 2025"]
    },
    {
      name: "Jc. Karthik Rao",
      role: "Treasurer",
      desc: "Oversees financial planning, budget allocations, and audits.",
      email: "treasurer@jcihyderabad.org",
      bio: "Karthik implements stringent budgeting standards, ensures resource optimizations for community efforts, and authors the LOM annual financial audit.",
      milestones: ["Achieved 100% Audit Transparency", "Strategic Asset Allocation Lead"]
    },
  ];

  const pastPresidents = [
    {
      year: "2025",
      name: "Jc. Harish Chandra",
      theme: "Ignite Passion",
      bio: "Harish steered JCI Hyderabad to win the Best LOM in India award. He championed grassroots leadership camps across twin cities.",
      milestones: ["Led SPOORTHI vocational setups", "Awarded Outstanding LOM President"]
    },
    {
      year: "2024",
      name: "Jc. Priya Sharma",
      theme: "Lead by Example",
      bio: "Priya prioritized public-private collaborations and green belt initiatives, aligning local projects with global UN goals.",
      milestones: ["50K trees planted under green program", "Zone XII Eco-Impact Award"]
    },
    {
      year: "2023",
      name: "Jc. Sanjay Dutt",
      theme: "Empower Each Other",
      bio: "Sanjay built startup accelerator programs and structured the first corporate mentorship panels inside JCI Hyderabad.",
      milestones: ["Formed JCI Incubation Labs", "CYE India Leadership Chair"]
    },
    {
      year: "2022",
      name: "Jc. K. Srinivasan",
      theme: "Drive Positive Impact",
      bio: "Srinivasan initiated massive blood donation drives, flood relief taskforces, and permanent community centers.",
      milestones: ["Established JCI Hyderabad Relief Wing", "Lives Impacted: 20,000+"]
    },
    {
      year: "2021",
      name: "Jc. Amit Varma",
      theme: "Youth Leadership Amplified",
      bio: "Amit pioneered the transformation of local trainings to virtual formats, building virtual lecture courses that reached 10,000+ students.",
      milestones: ["Digital Chapter Pioneer Award", "JCI India Technology Officer"]
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-blue bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-md">
            Our Officers
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Chapter Leadership
          </h1>
          <p className="text-slate-500 font-inter">
            Meet the dedicated executive officers and past presidents who steer JCI Hyderabad toward excellence. Click any officer for bio details.
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-24">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-jci-navy mb-10 text-center flex items-center justify-center gap-3 uppercase">
            <ShieldCheck className="w-8 h-8 text-jci-blue" />
            Executive Committee (2026)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLeader({ ...member, type: "executive" })}
                className="glass-premium rounded-3xl p-8 border border-slate-200/85 bg-white hover:border-jci-blue/40 cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-jci-blue group-hover:to-jci-teal transition-all">
                    <Users className="w-6 h-6 text-jci-blue group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">{member.name}</h3>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5 font-satoshi">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-jci-blue font-semibold uppercase font-satoshi">View Full Bio →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Presidents Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-jci-navy mb-12 text-center flex items-center justify-center gap-3 uppercase">
            <Award className="w-8 h-8 text-jci-teal" />
            Legacy of Past Presidents
          </h2>
          <div className="relative border-l border-slate-200 ml-4 md:ml-32 flex flex-col gap-8">
            {pastPresidents.map((pres, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year display left of timeline on md screen */}
                <div className="absolute top-0.5 left-0 md:-left-32 md:w-24 text-left md:text-right font-display font-semibold text-lg text-jci-blue">
                  {pres.year}
                </div>
                {/* Timeline dot */}
                <div className="absolute top-2 -left-[7px] w-3 h-3 rounded-full bg-slate-200 border border-slate-300 group-hover:bg-jci-teal group-hover:scale-110 transition-all" />

                <div
                  onClick={() => setSelectedLeader({ ...pres, type: "president" })}
                  className="glass-premium p-6 rounded-2xl cursor-pointer bg-white border border-slate-200 hover:border-jci-teal/40 hover:-translate-x-1 transition-all duration-300 shadow-sm"
                >
                  <h4 className="font-display font-semibold text-lg text-jci-navy group-hover:text-jci-teal transition-colors">{pres.name}</h4>
                  <p className="text-xs text-slate-500 font-medium italic mt-1">Theme: "{pres.theme}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LEADER DETAIL MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white max-w-lg w-full rounded-[32px] overflow-hidden relative border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Profile Content */}
            <div className="p-8 md:p-10 text-left flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-jci-blue uppercase tracking-widest font-satoshi bg-slate-50 px-3 py-1 rounded-full max-w-fit border border-slate-200">
                  {selectedLeader.type === "executive" ? "Executive Board Member" : `LOM President (${selectedLeader.year})`}
                </span>
                <h2 className="font-display font-semibold text-3xl text-jci-navy tracking-tight mt-2">
                  {selectedLeader.name}
                </h2>
                <p className="text-sm text-jci-blue font-semibold uppercase tracking-wider font-satoshi">
                  {selectedLeader.role || `Presidential Theme: "${selectedLeader.theme}"`}
                </p>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Biography</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {selectedLeader.bio}
                </p>
              </div>

              {/* Milestones */}
              {selectedLeader.milestones && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-3">Key Milestones & Honors</h4>
                  <div className="flex flex-col gap-2">
                    {selectedLeader.milestones.map((milestone, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <Star className="w-4 h-4 text-jci-teal" />
                        <span>{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedLeader.email && (
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`mailto:${selectedLeader.email}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-jci-blue hover:text-jci-teal transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {selectedLeader.email}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
