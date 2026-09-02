import Image from "next/image";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type VisualHealthSectionProps = {
  profile: DoctorProfile;
};

export function VisualHealthSection({ profile }: VisualHealthSectionProps) {
  return (
    <SectionShell
      className="bg-[#f7f1e8] text-[#14110f]"
      description={profile.visualHealth.description}
      eyebrow={profile.visualHealth.eyebrow}
      id="percurso-clinico"
      title={profile.visualHealth.title}
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative min-h-[520px] overflow-hidden border border-[#14110f]/12 bg-[#191716] sm:min-h-[620px] lg:min-h-[680px]">
          <Image
            alt={profile.visualHealth.image.alt}
            className="object-cover object-[50%_28%]"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src={profile.visualHealth.image.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/44 via-black/8 to-transparent" />
          <div className="absolute left-5 top-5 border border-[#ead7bd]/30 bg-[#11100f]/78 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#ead7bd] backdrop-blur-md">
            Reumatologia
          </div>
          <div className="absolute inset-x-5 bottom-5 border border-[#ead7bd]/24 bg-[#11100f]/84 p-5 backdrop-blur-md sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--profile-accent)]">
              cuidado com escuta
            </p>
            <p className="mt-2 text-pretty text-base leading-7 text-[#d8c8b6]">
              Placeholder abstrato até que exista uma foto profissional autorizada para
              publicação.
            </p>
          </div>
        </div>

        <div className="grid content-center gap-0 overflow-hidden border border-[#14110f]/12 bg-[#fffaf2]">
          {profile.visualHealth.topics.map((topic) => (
            <article
              className="group grid gap-5 border-[#14110f]/12 p-6 transition hover:bg-[#ead7bd]/55 sm:grid-cols-[4rem_1fr] sm:p-8 [&:not(:last-child)]:border-b"
              key={topic.title}
            >
              <span className="flex size-12 items-center justify-center border border-[#c99a68]/45 font-serif text-xl text-[#8a5d35] transition group-hover:border-[#14110f]/35">
                {topic.label}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-[#14110f]">{topic.title}</h3>
                <p className="mt-3 text-pretty text-base leading-7 text-[#5a5148]">
                  {topic.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
