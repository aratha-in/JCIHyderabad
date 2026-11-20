import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, ArrowLeft, ExternalLink, Mail, Phone } from "lucide-react";
import ProfileSocialLinks from "../../../components/ProfileSocialLinks.js";
import MemberImage from "../../../components/MemberImage.js";
import { memberProfiles } from "../../../data/leadershipTeams.js";

function formatMemberName(name) {
  return name
    .replace(/^jc\.?\s*/i, "")
    .toLowerCase()
    .replace(/(^|[\s'-])([a-z])/g, (_, separator, letter) => `${separator}${letter.toUpperCase()}`);
}

export function generateStaticParams() {
  return memberProfiles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const profile = memberProfiles.find((member) => member.slug === slug);

  return {
    title: profile ? `${formatMemberName(profile.name)} | JCI Hyderabad` : "Member Profile | JCI Hyderabad",
  };
}

export default async function MemberProfilePage({ params }) {
  const { slug } = await params;
  const member = memberProfiles.find((profile) => profile.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="h-2 bg-gradient-to-r from-jci-blue to-jci-teal" />
        <div className="p-8 md:p-12">
          <Link href="/directory" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-jci-blue">
            <ArrowLeft className="h-4 w-4" />
            Back to Directory
          </Link>

          <header className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <MemberImage
              src={member.photo}
              alt={formatMemberName(member.name)}
              width={128}
              height={128}
              className="h-32 w-32 rounded-3xl object-cover"
              priority
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-jci-blue">{member.dept}</p>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-jci-navy md:text-4xl">
                {formatMemberName(member.name)}
              </h1>
              <p className="mt-2 font-satoshi text-sm font-semibold uppercase tracking-wide text-slate-600">
                {member.role}
              </p>
              <p className="mt-2 text-sm text-slate-500">{member.year} Leadership Team</p>
              <ProfileSocialLinks links={member.socialLinks} />
            </div>
          </header>

          {(member.email || member.phone || member.website) && (
            <section className="mt-8 grid gap-4 border-y border-slate-100 py-6 sm:grid-cols-2" aria-label="Contact information">
              {member.email && (
                <a href={`mailto:${member.email}`} className="flex min-w-0 items-center gap-3 text-sm text-slate-600 hover:text-jci-blue">
                  <Mail className="h-4 w-4 flex-shrink-0 text-jci-blue" />
                  <span className="break-all">{member.email}</span>
                </a>
              )}
              {member.phone && (
                <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-sm text-slate-600 hover:text-jci-blue">
                  <Phone className="h-4 w-4 flex-shrink-0 text-jci-teal" />
                  <span>{member.phone}</span>
                </a>
              )}
              {member.website && (
                <a href={member.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-slate-600 hover:text-jci-blue">
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-jci-blue" />
                  <span>{member.website.replace(/^https?:\/\//, "")}</span>
                </a>
              )}
            </section>
          )}

          {member.bio && (
            <section className="mt-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Biography</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{member.bio}</p>
            </section>
          )}

          {member.achievements?.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Honors &amp; Credentials</h2>
              <ul className="mt-3 flex flex-col gap-3">
                {member.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center gap-3 text-sm text-slate-600">
                    <Award className="h-4 w-4 flex-shrink-0 text-jci-teal" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}
