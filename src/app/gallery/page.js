import Image from "next/image";
import { Images } from "lucide-react";
import { memberProfiles } from "../../data/leadershipTeams.js";

const chapterImages = [
  {
    src: "/hero_leadership.png",
    alt: "JCI Hyderabad leadership and development",
    title: "Leadership in Action",
    category: "Chapter",
  },
  {
    src: "/hero_business.png",
    alt: "JCI Hyderabad entrepreneurship and business",
    title: "Business & Entrepreneurship",
    category: "Chapter",
  },
  {
    src: "/hero_community.png",
    alt: "JCI Hyderabad community impact",
    title: "Community Impact",
    category: "Chapter",
  },
];

const memberImages = memberProfiles
  .filter((member) => member.year === "2026" && member.photo)
  .map((member) => ({
    src: member.photo,
    alt: member.name,
    title: member.name,
    category: `${member.year} · ${member.role}`,
  }));

const galleryImages = [...chapterImages, ...memberImages];

export default function Gallery() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white py-16 text-slate-800">
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#EEF6FB]/70 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[#EEF6FB]/50 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-satoshi text-xs font-semibold uppercase tracking-widest text-jci-blue shadow-sm">
            <Images className="h-4 w-4" aria-hidden="true" />
            Moments &amp; Members
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold uppercase tracking-tight text-jci-navy md:text-5xl">
            Chapter Gallery
          </h1>
          <p className="mt-4 font-inter text-slate-500">
            A collection of JCI Hyderabad chapter visuals and member portraits.
          </p>
        </header>

        <section className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3" aria-label="Gallery images">
          {galleryImages.map((image) => (
            <article
              key={`${image.src}-${image.title}`}
              className="group overflow-hidden rounded-3xl border border-slate-200/85 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-jci-blue/40 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 sm:aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-5">
                <p className="font-satoshi text-[8px] font-semibold uppercase tracking-wide text-jci-teal sm:text-[10px] sm:tracking-widest">
                  {image.category}
                </p>
                <h2 className="mt-1 break-words font-display text-sm font-semibold text-jci-navy sm:mt-2 sm:text-lg">
                  {image.title}
                </h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
