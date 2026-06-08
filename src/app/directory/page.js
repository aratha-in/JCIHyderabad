"use client";
import { useState } from "react";
import { Search, Mail, Phone, Users, ShieldAlert, X, ChevronDown, ChevronRight, Award, ShieldCheck, Sparkles } from "lucide-react";

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);
  const [viewMode, setViewMode] = useState("tree"); // "tree" or "grid"
  const [expandedNodes, setExpandedNodes] = useState({
    president: true,
    vps: true,
    directors: true
  });

  const departments = ["All", "Executive Board", "Trainers & Speakers", "Business & Trade", "Public Relations"];

  const members = [
    {
      id: "pres-1",
      name: "Jc. Ganesh Nagu",
      role: "LOM President",
      dept: "Executive Board",
      email: "president@jcihyderabad.org",
      phone: "+91 98765 43210",
      reportsTo: null,
      level: "president",
      bio: "Over 8 years of leadership experience within JCI. Entrepreneur and developer of tech solutions. Spearheading JCI Hyderabad's digital transformation in 2026.",
      achievements: ["Most Outstanding Member Zone XII", "JCI Certified Trainer", "Prime Minister's Youth Council Member"]
    },
    {
      id: "sec-1",
      name: "Jc. Ananya Sen",
      role: "Secretary",
      dept: "Executive Board",
      email: "secretary@jcihyderabad.org",
      phone: "+91 98765 43213",
      reportsTo: "pres-1",
      level: "vps",
      bio: "Advocate by profession. Leading chapter administration, compliance, national audit tracking, and executive board organization.",
      achievements: ["Best LOM Secretary Zone XII Runner-up", "Lead Mediator JCI Legal Cell"]
    },
    {
      id: "treas-1",
      name: "Jc. Karthik Rao",
      role: "Treasurer",
      dept: "Executive Board",
      email: "treasurer@jcihyderabad.org",
      phone: "+91 98765 43214",
      reportsTo: "pres-1",
      level: "vps",
      bio: "Chartered Accountant. Overlooking budget controls, financial audit structures, corporate compliance, and event underwriting.",
      achievements: ["Honors in Corporate Finance", "JCI Growth Catalyst 2025"]
    },
    {
      id: "vp-train",
      name: "Jc. Sneha Reddy",
      role: "Vice President (Training)",
      dept: "Trainers & Speakers",
      email: "training@jcihyderabad.org",
      phone: "+91 98765 43211",
      reportsTo: "pres-1",
      level: "vps",
      bio: "Professional soft-skills trainer and executive speech coach. Managing chapter-wide training events and leadership academies.",
      achievements: ["JCI Authorised Speech Evaluator", "Delivered 200+ hours of community sessions"]
    },
    {
      id: "vp-biz",
      name: "Jc. Vikram Malhotra",
      role: "Vice President (Business)",
      dept: "Business & Trade",
      email: "business@jcihyderabad.org",
      phone: "+91 98765 43212",
      reportsTo: "pres-1",
      level: "vps",
      bio: "Angel investor and serial founder. Driving global networking sessions, commercial partnerships, and B2B alliances.",
      achievements: ["Founder of TechVenture Labs", "JCI Creative Young Entrepreneur (CYE) Mentor"]
    },
    {
      id: "dir-pr",
      name: "Jc. Divya Naidu",
      role: "Director (Public Relations)",
      dept: "Public Relations",
      email: "pr@jcihyderabad.org",
      phone: "+91 98765 43215",
      reportsTo: "sec-1",
      level: "directors",
      bio: "Brand architect and corporate communications consultant. Managing social outreach, digital channels, and media relationships.",
      achievements: ["Social Media Campaign Award 2025", "JCI Voice of Impact Speaker"]
    },
    {
      id: "cye-head",
      name: "Jc. Manoj Joshi",
      role: "Head of CYE Programs",
      dept: "Business & Trade",
      email: "cye@jcihyderabad.org",
      phone: "+91 98765 43216",
      reportsTo: "vp-biz",
      level: "directors",
      bio: "Venture Builder at T-Hub. Leading young entrepreneur pitching challenges, mentorship cohorts, and incubator integrations.",
      achievements: ["T-Hub Startup Enabler Certificate", "JCI National Business Delegate"]
    }
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.dept.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || member.dept === selectedDept;
    return matchesSearch && matchesDept;
  });

  const toggleNode = (node) => {
    setExpandedNodes(prev => ({ ...prev, [node]: !prev[node] }));
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden py-16">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-jci-blue bg-white border border-slate-200 px-4 py-2 rounded-full font-satoshi shadow-sm">
            Interactive Roster
          </span>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-jci-navy mt-6 mb-4 uppercase tracking-tight">
            Chapter Directory
          </h1>
          <p className="text-slate-500 font-inter">
            Navigate the leadership structure of JCI Hyderabad using the interactive hierarchy tree or custom search.
          </p>
        </div>

        {/* View Selection & Search Bar */}
        <div className="glass-premium p-6 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200/50 bg-white">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search officers, name, role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-jci-blue text-slate-850 outline-none text-sm transition-all"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            {/* View Mode Toggle */}
            <div className="flex bg-slate-100 border border-slate-200 rounded-xl p-1">
              <button
                onClick={() => setViewMode("tree")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold font-satoshi transition-all cursor-pointer ${viewMode === "tree" ? "bg-gradient-to-r from-jci-blue to-jci-teal text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                Hierarchy Tree
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold font-satoshi transition-all cursor-pointer ${viewMode === "grid" ? "bg-gradient-to-r from-jci-blue to-jci-teal text-white shadow-sm" : "text-slate-500 hover:text-slate-900"
                  }`}
              >
                Roster Grid
              </button>
            </div>

            {/* Department Filter (Only for Grid mode) */}
            {viewMode === "grid" && (
              <div className="flex gap-2 overflow-x-auto max-w-full pb-1 md:pb-0 scrollbar-none">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold font-satoshi transition-all whitespace-nowrap cursor-pointer ${selectedDept === dept
                      ? "bg-slate-200 border border-slate-350 text-slate-800"
                      : "bg-white border border-slate-200 text-slate-500 hover:text-slate-800"
                      }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* VIEW 1: INTERACTIVE HIERARCHY TREE */}
        {viewMode === "tree" ? (
          <div className="flex flex-col items-center justify-center py-10 overflow-x-auto w-full min-w-[700px] border border-slate-200 rounded-3xl p-8 bg-white/40 backdrop-blur-md shadow-sm">

            {/* Tree ROOT: LOM President */}
            <div className="flex flex-col items-center">
              <div
                onClick={() => setSelectedMember(members.find(m => m.level === "president"))}
                className="glass-premium p-6 rounded-2xl cursor-pointer hover:border-jci-blue transition-all duration-300 w-64 text-center relative border border-slate-200/80 bg-white group shadow-md"
              >
                <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-jci-blue" />
                <span className="text-[10px] font-bold text-jci-blue tracking-widest uppercase font-satoshi">LOM Leader</span>
                <h3 className="font-display font-semibold text-lg text-jci-navy mt-2 group-hover:text-jci-blue transition-colors">
                  {members.find(m => m.level === "president").name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{members.find(m => m.level === "president").role}</p>
              </div>

              {/* Connector Line from Root to level 2 */}
              <div className="h-10 w-[2px] bg-gradient-to-b from-jci-blue/40 to-jci-teal/40" />

              {/* Branch Toggle */}
              <button
                onClick={() => toggleNode("vps")}
                className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer -mt-1 transition-all shadow-sm"
              >
                {expandedNodes.vps ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            {/* Level 2: VPs & Secretary / Treasurer */}
            {expandedNodes.vps && (
              <div className="relative mt-8">
                {/* Horizontal connector line */}
                <div className="absolute top-0 left-[12%] right-[12%] h-[2px] bg-slate-200" />

                <div className="grid grid-cols-4 gap-8 pt-8">
                  {members.filter(m => m.level === "vps").map((vp) => (
                    <div key={vp.id} className="flex flex-col items-center relative">
                      {/* Vertical line from horizontal line to card */}
                      <div className="absolute -top-8 w-[2px] h-8 bg-slate-200" />

                      <div
                        onClick={() => setSelectedMember(vp)}
                        className="glass-premium p-5 rounded-2xl cursor-pointer hover:border-jci-blue transition-all duration-300 w-56 text-center border border-slate-200 bg-white group shadow-sm"
                      >
                        <span className="text-[9px] font-semibold text-jci-blue tracking-widest uppercase font-satoshi">{vp.dept}</span>
                        <h4 className="font-display font-semibold text-base text-jci-navy mt-1 group-hover:text-jci-blue transition-colors">
                          {vp.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{vp.role}</p>
                      </div>

                      {/* Connectors from specific VPs to their reporters */}
                      {((vp.id === "sec-1" && expandedNodes.directors) || (vp.id === "vp-biz" && expandedNodes.directors)) && (
                        <>
                          <div className="h-8 w-[2px] bg-slate-200" />
                          {/* Render Sub-ordinate node below it */}
                          <div
                            onClick={() => setSelectedMember(members.find(m => m.reportsTo === vp.id))}
                            className="glass-premium p-4 rounded-xl cursor-pointer hover:border-jci-teal transition-all duration-300 w-48 text-center bg-white border border-slate-200 shadow-sm group mt-2"
                          >
                            <h5 className="font-display font-semibold text-sm text-jci-navy group-hover:text-jci-teal transition-colors">
                              {members.find(m => m.reportsTo === vp.id).name}
                            </h5>
                            <p className="text-[10px] text-slate-500 mt-0.5">{members.find(m => m.reportsTo === vp.id).role}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* VIEW 2: ROSTER GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="glass-premium p-6 rounded-3xl hover:border-jci-blue/40 border border-slate-200/85 bg-white cursor-pointer hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-jci-blue bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full font-satoshi font-semibold">
                        {member.dept}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-jci-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5 font-satoshi">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <span className="flex items-center gap-2.5 text-xs text-slate-655">
                      <Mail className="w-3.5 h-3.5 text-jci-blue" />
                      {member.email}
                    </span>
                    <span className="flex items-center gap-2.5 text-xs text-slate-655">
                      <Phone className="w-3.5 h-3.5 text-jci-teal" />
                      {member.phone}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center gap-4 shadow-sm">
                <ShieldAlert className="w-12 h-12 text-slate-400" />
                <h3 className="font-display font-semibold text-lg text-jci-navy">No Officers Found</h3>
                <p className="text-slate-500 text-sm font-inter">Try modifying your query or selecting another department.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* DETAIL MODAL POPUP */}
      {selectedMember && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-300">
          <div className="bg-white max-w-lg w-full rounded-[32px] overflow-hidden relative border border-slate-200/80 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Profile Content */}
            <div className="p-8 md:p-10 text-left flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-jci-blue uppercase tracking-widest font-satoshi bg-slate-50 px-3 py-1 rounded-full max-w-fit border border-slate-200">
                  {selectedMember.dept}
                </span>
                <h2 className="font-display font-semibold text-3xl text-jci-navy tracking-tight mt-2">
                  {selectedMember.name}
                </h2>
                <p className="text-sm text-jci-blue font-semibold uppercase tracking-wider font-satoshi">
                  {selectedMember.role}
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-slate-100">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center gap-3 text-xs text-slate-600 hover:text-jci-blue transition-all"
                >
                  <Mail className="w-4 h-4 text-jci-blue" />
                  <span>{selectedMember.email}</span>
                </a>
                <a
                  href={`tel:${selectedMember.phone}`}
                  className="flex items-center gap-3 text-xs text-slate-600 hover:text-jci-blue transition-all"
                >
                  <Phone className="w-4 h-4 text-jci-teal" />
                  <span>{selectedMember.phone}</span>
                </a>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-2">Biography</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-inter">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Achievements */}
              {selectedMember.achievements && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-satoshi mb-3">Honors & Credentials</h4>
                  <div className="flex flex-col gap-2">
                    {selectedMember.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-slate-600">
                        <Award className="w-4 h-4 text-jci-teal" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
