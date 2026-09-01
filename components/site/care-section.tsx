import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type CareSectionProps = {
  profile: DoctorProfile;
};

export function CareSection({ profile }: CareSectionProps) {
  return (
    <SectionShell
      description={profile.care.description}
      eyebrow={profile.care.eyebrow}
      id="cuidado"
      title={profile.care.title}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase text-[var(--profile-accent)]">
            Texto-base aprovado
          </p>
          <p className="mt-5 text-pretty font-serif text-2xl leading-10 text-foreground">
            “{profile.approvedBaseText}”
          </p>
        </div>
        <div className="grid gap-5">
          {profile.care.paragraphs.map((paragraph) => (
            <p
              className="rounded-lg border border-border/80 bg-card/70 p-6 text-pretty text-base leading-8 text-muted-foreground"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
