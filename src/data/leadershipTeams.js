import pastPresidents from "./pastPresidents.js";

const team2027 = [
  { id: "pres-1", name: "Jc. Chetan Kumar Tiruvaipati", role: "LOM President (2027)", dept: "Executive Board", level: "president" },
  { id: "sec-1", name: "JC VISHWANTH", role: "Secretary", dept: "Executive Board", reportsTo: "pres-1", level: "pst" },
  { id: "treas-1", name: "Jc. Karthik Rao", role: "Treasurer", dept: "Executive Board", email: "treasurer@jcihyderabad.org", phone: "+91 98765 43214", reportsTo: "pres-1", level: "pst", bio: "Chartered Accountant. Overlooking budget controls, financial audit structures, corporate compliance, and event underwriting.", achievements: ["Honors in Corporate Finance", "JCI Growth Catalyst 2025"] },
  { id: "vp-train", name: "Jc. Sneha Reddy", role: "Vice President (Training)", dept: "Trainers & Speakers", email: "training@jcihyderabad.org", phone: "+91 98765 43211", reportsTo: "pres-1", level: "vps", bio: "Professional soft-skills trainer and executive speech coach. Managing chapter-wide training events and leadership academies.", achievements: ["JCI Authorised Speech Evaluator", "Delivered 200+ hours of community sessions"] },
  { id: "vp-biz", name: "Jc. Vikram Malhotra", role: "Vice President (Business)", dept: "Business & Trade", email: "business@jcihyderabad.org", phone: "+91 98765 43212", reportsTo: "pres-1", level: "vps", bio: "Angel investor and serial founder. Driving global networking sessions, commercial partnerships, and B2B alliances.", achievements: ["Founder of TechVenture Labs", "JCI Creative Young Entrepreneur (CYE) Mentor"] },
  { id: "dir-pr", name: "Jc. Divya Naidu", role: "Director (Public Relations)", dept: "Public Relations", email: "pr@jcihyderabad.org", phone: "+91 98765 43215", reportsTo: "sec-1", level: "directors", bio: "Brand architect and corporate communications consultant. Managing social outreach, digital channels, and media relationships.", achievements: ["Social Media Campaign Award 2025", "JCI Voice of Impact Speaker"] },
  { id: "cye-head", name: "Jc. Manoj Joshi", role: "Head of CYE Programs", dept: "Business & Trade", email: "cye@jcihyderabad.org", phone: "+91 98765 43216", reportsTo: "vp-biz", level: "directors", bio: "Venture Builder at T-Hub. Leading young entrepreneur pitching challenges, mentorship cohorts, and incubator integrations.", achievements: ["T-Hub Startup Enabler Certificate", "JCI National Business Delegate"] },
  { id: "aratha-founder", name: "Vishnu Mustapure", role: "Founder, Aratha", dept: "Business & Trade", email: "Vishnu@aratha.in", phone: "8639581525", website: "https://www.aratha.in", reportsTo: "vp-biz", level: "directors" },
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
    .filter(({ year }) => Number(year) >= 1976 && Number(year) <= 2025)
    .map((president) => [
      president.year,
      [{
        id: `${president.year}-president`,
        name: president.name,
        role: `LOM President (${president.year})`,
        dept: "Executive Board",
        level: "president",
        photo: president.photo,
      }],
    ])
);

export const leadershipTeams = {
  ...historicalLeadershipTeams,
  "2027": team2027,
  "2026": team2026,
  "2025": [{
    id: "2025-president",
    name: "GANESH NAGU",
    role: "LOM President (2025)",
    dept: "Executive Board",
    level: "president",
    photo: "/images/members/ganesh-nagu.jpg",
  }],
};

export function slugifyMemberName(name) {
  return name
    .replace(/^jc\.?\s*/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getMemberProfileSlug(member, year) {
  return `${year}-${slugifyMemberName(member.name)}`;
}

const profilesBySlug = new Map();

for (const [year, members] of Object.entries(leadershipTeams)) {
  for (const member of members) {
    if (member.name.toLowerCase() === "vacat") continue;
    const slug = getMemberProfileSlug(member, year);
    profilesBySlug.set(slug, { ...member, year, slug });
  }
}

for (const president of pastPresidents) {
  if (president.name.toLowerCase() === "vacat") continue;
  const slug = getMemberProfileSlug(president, president.year);
  const existingProfile = profilesBySlug.get(slug);
  profilesBySlug.set(slug, {
    ...existingProfile,
    ...(!existingProfile && {
      id: `${president.year}-president`,
      dept: "Executive Board",
      role: `LOM President (${president.year})`,
    }),
    name: president.name,
    year: president.year,
    term: president.term,
    photo: existingProfile?.photo || president.photo,
    slug,
  });
}

export const memberProfiles = Array.from(profilesBySlug.values());

export function getMemberProfileHref(member, year) {
  if (member.name.toLowerCase() === "vacat") return null;
  return `/directory/${getMemberProfileSlug(member, year)}`;
}
