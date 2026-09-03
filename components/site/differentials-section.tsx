import { HeartPulse, Microscope, Sparkles, type LucideIcon } from "lucide-react";
import type { DifferentialIcon, DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

const icons: Record<DifferentialIcon, LucideIcon> = {
  heartPulse: HeartPulse,
  microscope: Microscope,
  sparkles: Sparkles,
};

type DifferentialsSectionProps = {
  profile: DoctorProfile;
  className?: string;
};

export function DifferentialsSection({ profile, className }: DifferentialsSectionProps) {
  return (
    <SectionShell
      className={className}
      description="Pontos de posicionamento para uma prática cardiológica clara, técnica e próxima."
      eyebrow="Diferenciais"
      id="diferenciais"
      title="Uma experiência médica construída com critério."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profile.differentials.map((item) => {
          const Icon = icons[item.icon];

          return (
            <article
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
              key={item.title}
            >
              <div className="mb-6 inline-flex size-12 items-center justify-center rounded-lg bg-accent-soft text-[var(--profile-accent)]">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 text-pretty text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
