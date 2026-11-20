"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, Mail, Phone, ShieldAlert, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import pastPresidents from "../../data/pastPresidents.js";
import { getMemberProfileHref, leadershipTeams as profileLeadershipTeams } from "../../data/leadershipTeams.js";
import MemberImage from "../../components/MemberImage.js";

function formatMemberName(name) {
  return name
    .toLowerCase()
    .replace(/(^|[\s'-])([a-z])/g, (_, separator, letter) => `${separator}${letter.toUpperCase()}`);
}

function MemberProfileLink({ member, year, className, children }) {
  const href = getMemberProfileHref(member, year);
  const Element = href ? Link : "div";

  return (
    <Element href={href || undefined} className={className}>
      {children}
    </Element>
  );
}

export default function Directory({ initialYear = "2027" }) {
  const initialYearIndex = Object.keys(profileLeadershipTeams)
    .sort((a, b) => Number(b) - Number(a))
    .indexOf(initialYear);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedTeamYear] = useState(initialYear);
  const [teamYearPage, setTeamYearPage] = useState(Math.floor(Math.max(initialYearIndex, 0) / 12));
  const [viewMode, setViewMode] = useState("tree"); // "tree" or "grid"
  const [expandedNodes, setExpandedNodes] = useState({
    president: true,
    vps: true,
    directors: true
  });

  const departments = ["All", "Current Presidents", "Executive Board", "Trainers & Speakers", "Business & Trade", "Public Relations", "Management", "Community Development", "Internationalism", "Growth & Development", "Past Presidents"];

  const members = [
    {
      id: "pres-1",
      name: "Jc. Chetan Kumar Tiruvaipati",
      role: "LOM President (2027)",
      dept: "Current Presidents",
      reportsTo: null,
      level: "president",
    },
    {
      id: "sec-1",
      name: "JC VISHWANTH",
      role: "Secretary",
      dept: "Executive Board",
      reportsTo: "pres-1",
      level: "pst",
    },
    {
      id: "treas-1",
      name: "Jc. Karthik Rao",
      role: "Treasurer",
      dept: "Executive Board",
      email: "treasurer@jcihyderabad.org",
      phone: "+91 98765 43214",
      reportsTo: "pres-1",
      level: "pst",
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
    },
    {
      id: "aratha-founder",
      name: "Vishnu Mustapure",
      role: "Founder, Aratha",
      dept: "Business & Trade",
      email: "Vishnu@aratha.in",
      phone: "8639581525",
      website: "https://www.aratha.in",
      reportsTo: "vp-biz",
      level: "directors",
    }
  ];

  const team2026 = [
    { id: "2026-president", name: "GANESH NAGU", role: "LO President", dept: "Executive Board", level: "president", photo: "/images/members/ganesh-nagu.jpg" },
    { id: "2026-ipp", name: "Damodar Somani", role: "IPP", dept: "Executive Board", level: "pst", reportsTo: "2026-president", photo: "/images/members/damodar-somani.jpg" },
    { id: "2026-treasurer", name: "JC Keerthi Chaugule", role: "Treasurer", dept: "Executive Board", level: "pst", reportsTo: "2026-president", photo: "/images/members/keerthi-chaugule.jpg" },
    { id: "2026-vp-management", name: "NANDHARAPU NARAYANA SWAMY", role: "VP Management", dept: "Management", level: "vps", reportsTo: "2026-president", photo: "/images/members/narayana-swamy.jpg" },
    { id: "2026-director-community", name: "Salian Ravi Kumar", role: "Director Community Development", dept: "Community Development", level: "directors", reportsTo: "2026-vp-community", photo: "/images/members/ravi-kumar-salian.jpeg" },
    { id: "2026-vp-community", name: "Anand kaloba", role: "VP Community Development", dept: "Community Development", level: "vps", reportsTo: "2026-president", photo: "/images/members/anand-kaloba.jpg" },
    { id: "2026-director-business", name: "Vignadipati Geetri", role: "Director Business", dept: "Business & Trade", level: "directors", reportsTo: "2026-vp-business", photo: "/images/members/vignadipati-geetri.jpg" },
    { id: "2026-director-management", name: "Sarayu Kundena", role: "Director Management", dept: "Management", level: "directors", reportsTo: "2026-vp-management", photo: "/images/members/sarayu-kundena.jpeg" },
    { id: "2026-director-internationalism", name: "BAKKANOLLA HARNATH REDDY", role: "Director Internationalism", dept: "Internationalism", level: "directors", reportsTo: "2026-vp-internationalism", photo: "/images/members/harnath-reddy.jpg" },
    { id: "2026-bulletin-editor", name: "Divya shilamkoti", role: "Bulletin Editor", dept: "Public Relations", level: "directors", reportsTo: "2026-vp-pr", photo: "/images/members/divya-shilamkoti.jpeg" },
    { id: "2026-vp-business", name: "Yash Gupta", role: "VP Business", dept: "Business & Trade", level: "vps", reportsTo: "2026-president", photo: "/images/members/yash-gupta.jpg" },
    { id: "2026-vp-training", name: "Aparna Venreddy", role: "VP Training", dept: "Trainers & Speakers", level: "vps", reportsTo: "2026-president", photo: "/images/members/aparna-venreddy.JPG" },
    { id: "2026-vp-gd", name: "Anusha Anand Jaayam", role: "VP G&D", dept: "Growth & Development", level: "vps", reportsTo: "2026-president", photo: "/images/members/anusha-anand-jaayam.jpg" },
    { id: "2026-vp-internationalism", name: "Vishwanth Uppununthala", role: "VP Internationalism", dept: "Internationalism", level: "vps", reportsTo: "2026-president", photo: "/images/members/vishwanth-uppununthala.jpg" },
    { id: "2026-joint-secretary", name: "Jujhar bhatia", role: "Joint Secretary", dept: "Executive Board", level: "pst", reportsTo: "2026-president", photo: "/images/members/jujhar-bhatia.jpeg" },
    { id: "2026-vp-pr", name: "Chavhan Pruthviraj Durgasingh", role: "VP PR & MARKETING", dept: "Public Relations", level: "vps", reportsTo: "2026-president", photo: "/images/members/pruthviraj-chavhan.jpg" },
  ];

  const historicalLeadershipTeams = Object.fromEntries(
    pastPresidents
      .filter((president) => Number(president.year) >= 1976 && Number(president.year) <= 2015)
      .map((president) => [
        president.year,
        [{
          id: `${president.year}-president`,
          name: president.name,
          role: `LOM President (${president.year})`,
          dept: "Executive Board",
          level: "president",
        }],
      ])
  );

  const leadershipTeams = {
    ...historicalLeadershipTeams,
    "2027": members,
    "2026": team2026,
    "2025": [
      {
        id: "2025-president",
        name: "GANESH NAGU",
        role: "LOM President (2025)",
        dept: "Executive Board",
        level: "president",
        photo: "/images/members/ganesh-nagu.jpg",
        photo: "/images/members/damodar-somani.jpg",
      },
    ],
    "2024": [
      {
        id: "2024-president",
        name: "Sai Vamshi Bhandwalkar",
        role: "LOM President (2024)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2023": [
      {
        id: "2023-president",
        name: "Ch Vivek",
        role: "LOM President (2023)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2022": [
      {
        id: "2022-president",
        name: "Rubina Virani",
        role: "LOM President (2022)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2021": [
      {
        id: "2021-president",
        name: "Srivalli Konduri",
        role: "LOM President (2021)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2020": [
      {
        id: "2020-president",
        name: "Harsha Dheeraj",
        role: "LOM President (2020)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2019": [
      {
        id: "2019-president",
        name: "Harsha Dheeraj",
        role: "LOM President (2019)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2018": [
      {
        id: "2018-president",
        name: "Venkatesh",
        role: "LOM President (2018)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2017": [
      {
        id: "2017-president",
        name: "Sampoorna Pasuparthi",
        role: "LOM President (2017)",
        dept: "Executive Board",
        level: "president",
      },
    ],
    "2016": [
      {
        id: "2016-president",
        name: "Phanindra Ellentala",
        role: "LOM President (2016)",
        dept: "Executive Board",
        level: "president",
      },
    ],
  };
  const availableTeamYears = Object.keys(leadershipTeams).sort((a, b) => Number(b) - Number(a));
  const teamYearPageSize = 12;
  const teamYearPageCount = Math.ceil(availableTeamYears.length / teamYearPageSize);
  const visibleTeamYears = availableTeamYears.slice(
    teamYearPage * teamYearPageSize,
    (teamYearPage + 1) * teamYearPageSize
  );
  const hierarchyMembers = leadershipTeams[selectedTeamYear];
  const firstTierMembers = hierarchyMembers.filter((member) => ["president", "pst"].includes(member.level));
  const vicePresidents = hierarchyMembers.filter((member) => member.level === "vps");
  const directors = hierarchyMembers.filter((member) => member.level === "directors");

  const directoryMembers = [
    ...hierarchyMembers.map((member) => ({ ...member, year: selectedTeamYear })),
    ...(selectedTeamYear !== "2027"
      ? leadershipTeams["2027"].filter((member) => member.level === "president").map((member) => ({ ...member, year: "2027" }))
      : []),
    ...pastPresidents.filter((president) => president.year !== selectedTeamYear && president.year !== "2027").map((president, index) => ({
      id: `past-president-${president.year}-${index}`,
      name: president.name,
      role: president.term,
      dept: "Past Presidents",
      year: president.year,
      level: "past-president",
      photo: president.photo,
    })),
  ];

  const filteredMembers = directoryMembers.filter((member) => {
    if (member.name.toLowerCase() === "vacat") return false;
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
        <div className="glass-premium p-6 rounded-3xl mb-12 flex flex-col gap-5 border border-slate-200/50 bg-white">
          {/* Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
          </div>

          {/* Department Filter (Only for Grid mode) */}
          {viewMode === "grid" && (
            <div className="flex w-full flex-wrap justify-center gap-2">
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

        {/* VIEW 1: INTERACTIVE HIERARCHY TREE */}
        {viewMode === "tree" ? (
          <div>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setTeamYearPage((page) => Math.max(0, page - 1))}
                disabled={teamYearPage === 0}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-jci-blue/40 hover:text-jci-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                Newer years
              </button>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Leadership team year">
                {visibleTeamYears.map((year) => (
                  <button
                    key={year}
                    type="button"
                    role="tab"
                    aria-selected={selectedTeamYear === year}
                    onClick={() => {
                      router.push(`/directory/${year}`);
                    }}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                      selectedTeamYear === year
                        ? "bg-gradient-to-r from-jci-blue to-jci-teal text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-jci-blue/40 hover:text-jci-blue"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setTeamYearPage((page) => Math.min(teamYearPageCount - 1, page + 1))}
                disabled={teamYearPage >= teamYearPageCount - 1}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:border-jci-blue/40 hover:text-jci-blue disabled:cursor-not-allowed disabled:opacity-40"
              >
                Older years
              </button>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/40 p-3 py-5 shadow-sm backdrop-blur-md sm:rounded-3xl sm:p-8 sm:py-10">

            {firstTierMembers.length > 0 && (
              <section className="w-full" aria-label="Leadership level one">
                <h2 className="mb-3 text-center text-[10px] font-bold uppercase tracking-widest text-jci-blue sm:mb-5 sm:text-xs">President, Secretary &amp; Treasurer</h2>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
                  {firstTierMembers.map((member) => (
                    <MemberProfileLink
                      key={member.id}
                      member={member}
                      year={selectedTeamYear}
                      className="glass-premium relative flex h-auto min-h-44 w-full cursor-pointer flex-col items-center rounded-xl border border-slate-200/80 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:border-jci-blue sm:h-60 sm:w-56 sm:rounded-2xl sm:p-5"
                    >
                      <div className="mb-2 h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16">
                        <MemberImage src={member.photo} alt={formatMemberName(member.name)} width={64} height={64} className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16" />
                      </div>
                      <span className="font-satoshi text-[8px] font-semibold uppercase tracking-widest text-jci-blue sm:text-[9px]">{member.dept}</span>
                      <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-jci-navy transition-colors group-hover:text-jci-blue sm:mt-2 sm:text-lg">{formatMemberName(member.name)}</h3>
                      <p className="mt-1 line-clamp-2 text-[10px] text-slate-500 sm:text-xs">{member.role}</p>
                    </MemberProfileLink>
                  ))}
                </div>
              </section>
            )}

            {vicePresidents.length > 0 && (
              <section className="mt-6 w-full sm:mt-10" aria-label="Leadership level two">
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:mb-5 sm:gap-3">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-jci-blue">Vice Presidents</h2>
                  {directors.length > 0 && (
                    <button
                      type="button"
                      onClick={() => toggleNode("vps")}
                      aria-label={expandedNodes.vps ? "Collapse level two" : "Expand level two"}
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-slate-800"
                    >
                      {expandedNodes.vps ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                {expandedNodes.vps && (
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
                    {vicePresidents.map((member) => (
                      <MemberProfileLink
                        key={member.id}
                        member={member}
                        year={selectedTeamYear}
                        className="glass-premium flex h-auto min-h-44 w-full cursor-pointer flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:border-jci-blue sm:h-60 sm:w-56 sm:rounded-2xl sm:p-5"
                      >
                        <div className="mb-2 h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16">
                          <MemberImage src={member.photo} alt={formatMemberName(member.name)} width={64} height={64} className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16" />
                        </div>
                        <span className="font-satoshi text-[8px] font-semibold uppercase tracking-widest text-jci-blue sm:text-[9px]">{member.dept}</span>
                        <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-jci-navy transition-colors group-hover:text-jci-blue sm:mt-2 sm:text-lg">{formatMemberName(member.name)}</h3>
                        <p className="mt-1 line-clamp-2 text-[10px] text-slate-500 sm:text-xs">{member.role}</p>
                      </MemberProfileLink>
                    ))}
                  </div>
                )}
              </section>
            )}

            {directors.length > 0 && (
              <section className="mt-6 w-full sm:mt-10" aria-label="Leadership level three">
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:mb-5 sm:gap-3">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-jci-teal">Directors</h2>
                  <button
                    type="button"
                    onClick={() => toggleNode("directors")}
                    aria-label={expandedNodes.directors ? "Collapse level three" : "Expand level three"}
                    className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-slate-800"
                  >
                    {expandedNodes.directors ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>
                {expandedNodes.directors && (
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
                    {directors.map((member) => (
                      <MemberProfileLink
                        key={member.id}
                        member={member}
                        year={selectedTeamYear}
                        className="glass-premium flex h-auto min-h-44 w-full cursor-pointer flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:border-jci-teal sm:h-60 sm:w-56 sm:rounded-2xl sm:p-5"
                      >
                        <div className="mb-2 h-12 w-12 flex-shrink-0 sm:h-16 sm:w-16">
                          <MemberImage src={member.photo} alt={formatMemberName(member.name)} width={64} height={64} className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16" />
                        </div>
                        <h3 className="mt-1 line-clamp-2 font-display text-sm font-semibold text-slate-900 transition-colors group-hover:text-jci-teal sm:mt-2 sm:text-lg">{formatMemberName(member.name)}</h3>
                        <p className="mt-1 line-clamp-2 text-[10px] text-slate-500 sm:text-xs">{member.role}</p>
                      </MemberProfileLink>
                    ))}
                  </div>
                )}
              </section>
            )}
            </div>
          </div>
        ) : (
          /* VIEW 2: ROSTER GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <Link
                  key={member.id}
                  href={getMemberProfileHref(member, member.year || selectedTeamYear)}
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
                      <MemberImage
                        src={member.photo}
                        alt={formatMemberName(member.name)}
                        width={64}
                        height={64}
                        className="mb-3 h-16 w-16 rounded-full object-cover"
                      />
                      <h3 className="font-display font-semibold text-xl text-jci-navy group-hover:text-jci-blue transition-colors">
                        {formatMemberName(member.name)}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wide mt-0.5 font-satoshi">
                        {member.year ? `${member.year} • ${member.role}` : member.role}
                      </p>
                    </div>
                    {member.bio && (
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                        {member.bio}
                      </p>
                    )}
                  </div>

                  {(member.email || member.phone || member.website) && (
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                      {member.email && (
                        <span className="flex items-center gap-2.5 text-xs text-slate-655">
                          <Mail className="w-3.5 h-3.5 text-jci-blue" />
                          {member.email}
                        </span>
                      )}
                      {member.phone && (
                        <span className="flex items-center gap-2.5 text-xs text-slate-655">
                          <Phone className="w-3.5 h-3.5 text-jci-teal" />
                          {member.phone}
                        </span>
                      )}
                      {member.website && (
                        <span className="flex items-center gap-2.5 text-xs text-slate-655">
                          <ExternalLink className="w-3.5 h-3.5 text-jci-blue" />
                          www.aratha.in
                        </span>
                      )}
                    </div>
                  )}
                </Link>
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

    </div>
  );
}
