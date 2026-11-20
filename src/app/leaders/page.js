"use client";
import Link from "next/link";
import { Award, ShieldCheck } from "lucide-react";
import pastPresidents from "../../data/pastPresidents.js";
import { getMemberProfileHref } from "../../data/leadershipTeams.js";
import MemberImage from "../../components/MemberImage.js";

export default function Leaders() {
  const board = [
    {
      name: "Jc. Chetan Kumar Tiruvaipati",
      role: "LOM President (2027)",
      desc: "LOM President for 2027."
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
      name: "JC VISHWANTH",
      role: "Secretary",
      desc: "Secretary for 2027."
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
            Meet the dedicated executive officers and past presidents who steer JCI Hyderabad toward excellence. Open a profile to learn more.
          </p>
        </div>

        {/* Executive Board */}
        <div className="mb-24">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-jci-navy mb-10 text-center flex items-center justify-center gap-3 uppercase">
            <ShieldCheck className="w-8 h-8 text-jci-blue" />
            Executive Committee (2027)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member, idx) => (
              <Link
                key={idx}
                href={getMemberProfileHref(member, "2027")}
                className="glass-premium rounded-3xl p-8 border border-slate-200/85 bg-white hover:border-jci-blue/40 cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="flex flex-col gap-4">
                  <MemberImage
                    src={member.photo}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">{member.name}</h3>
                    <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5 font-satoshi">{member.role}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-jci-blue font-semibold uppercase font-satoshi">View Full Bio →</span>
                </div>
              </Link>
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

                {getMemberProfileHref(pres, pres.year) ? (
                  <Link
                    href={getMemberProfileHref(pres, pres.year)}
                    className="glass-premium p-6 rounded-2xl cursor-pointer bg-white border border-slate-200 hover:border-jci-teal/40 hover:-translate-x-1 transition-all duration-300 shadow-sm flex items-center gap-4"
                  >
                  {pres.name.toLowerCase() !== "vacat" && (
                    <MemberImage
                      src={pres.photo}
                      alt={pres.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                    />
                  )}
                  <div>
                    <h4 className="font-display font-semibold text-lg text-jci-navy group-hover:text-jci-teal transition-colors">{pres.name}</h4>
                    <p className="text-xs text-slate-500 font-medium italic mt-1">{pres.term}</p>
                  </div>
                  </Link>
                ) : (
                  <div className="glass-premium p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                    <div>
                      <h4 className="font-display font-semibold text-lg text-jci-navy">{pres.name}</h4>
                      <p className="text-xs text-slate-500 font-medium italic mt-1">{pres.term}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
