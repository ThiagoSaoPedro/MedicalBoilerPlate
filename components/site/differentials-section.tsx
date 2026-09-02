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
};

export function DifferentialsSection({ profile }: DifferentialsSectionProps) {
  return (
    <SectionShell
      className="bg-[#ead7bd] text-[#14110f]"
      description="Pontos iniciais de posicionamento, mantidos em dados editáveis para revisão comercial e médica."
      eyebrow="Diferenciais"
      id="diferenciais"
      title="Uma experiência médica construída com critério."
    >
      <div className="grid gap-px overflow-hidden border border-[#14110f]/16 bg-[#14110f]/16 md:grid-cols-3">
        {profile.differentials.map((item) => {
          const Icon = icons[item.icon];

          return (
            <article
              className="interactive-soft bg-[#ead7bd] p-7 hover:bg-[#f7f1e8]"
              key={item.title}
            >
              <div className="mb-8 inline-flex size-12 items-center justify-center border border-[#14110f]/22 text-[#8a5d35]">
                <Icon aria-hidden="true" size={22} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-[0.08em] text-[#14110f]">
                {item.title}
              </h3>
              <p className="mt-4 text-pretty text-sm leading-7 text-[#5a5148]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
