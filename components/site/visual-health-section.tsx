import Image from "next/image";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type VisualHealthSectionProps = {
  profile: DoctorProfile;
};

export function VisualHealthSection({ profile }: VisualHealthSectionProps) {
  return (
    <SectionShell
      className="bg-card/65"
      description={profile.visualHealth.description}
      eyebrow={profile.visualHealth.eyebrow}
      id="pele-e-cabelo"
      title={profile.visualHealth.title}
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1fr]">
        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-border bg-muted shadow-[var(--shadow-soft)] sm:min-h-[620px] lg:min-h-[680px]">
          <Image
            alt={profile.visualHealth.image.alt}
            className="object-cover object-[50%_28%]"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            src={profile.visualHealth.image.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/44 via-black/8 to-transparent" />
          <div className="absolute left-5 top-5 rounded-lg border border-white/40 bg-card/86 px-4 py-3 text-sm font-semibold uppercase text-[var(--profile-accent)] backdrop-blur-md">
            Medicina capilar
          </div>
          <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/35 bg-card/90 p-5 backdrop-blur-md sm:p-6">
            <p className="text-xs font-bold uppercase text-[var(--profile-accent)]">
              cuidado capilar
            </p>
            <p className="mt-2 text-pretty text-base leading-7 text-muted-foreground">
              Imagem real de bastidor profissional, reforçando atenção técnica, precisão e
              cuidado durante o atendimento.
            </p>
          </div>
        </div>

        <div className="grid content-center gap-0 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          {profile.visualHealth.topics.map((topic) => (
            <article
              className="group grid gap-5 border-border p-6 transition hover:bg-muted/45 sm:grid-cols-[4rem_1fr] sm:p-8 [&:not(:last-child)]:border-b"
              key={topic.title}
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-accent-soft font-serif text-xl text-[var(--profile-accent)] transition group-hover:bg-[var(--profile-accent)] group-hover:text-accent-foreground">
                {topic.label}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{topic.title}</h3>
                <p className="mt-3 text-pretty text-base leading-7 text-muted-foreground">
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
