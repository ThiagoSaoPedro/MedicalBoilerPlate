import { Activity, CircleDot } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type CareAreasSectionProps = {
  profile: DoctorProfile;
};

export function CareAreasSection({ profile }: CareAreasSectionProps) {
  return (
    <SectionShell
      className="bg-[#11100f] text-[#f7f1e8]"
      description="Condições reumatológicas podem envolver dor, rigidez, fadiga, inflamação e impacto funcional. A avaliação médica organiza esses sinais com cuidado."
      eyebrow="Áreas de cuidado"
      id="areas-de-cuidado"
      title="Acompanhamento para diferentes formas de dor e inflamação."
    >
      <div className="grid gap-px overflow-hidden border border-[#ead7bd]/16 bg-[#ead7bd]/16 md:grid-cols-2 lg:grid-cols-5">
        {profile.careAreas.map((area, index) => (
          <article
            className="interactive-soft bg-[#151312] p-6 hover:bg-[#1d1a18]"
            key={area.title}
          >
            <div className="mb-10 flex items-center justify-between gap-4">
              <span className="font-serif text-3xl text-[var(--profile-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <CircleDot aria-hidden="true" size={20} />
            </div>
            <h3 className="min-h-14 text-lg font-bold uppercase tracking-[0.08em] leading-7 text-[#f7f1e8]">
              {area.title}
            </h3>
            <p className="mt-4 text-pretty text-sm leading-7 text-[#c9b7a3]">
              {area.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 border border-[#ead7bd]/20 bg-[#c99a68] p-6 text-[#14110f]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Activity aria-hidden="true" className="shrink-0 text-[#14110f]" />
          <p className="text-pretty text-base leading-8">
            O foco está em compreender a pessoa além do sintoma, com condução responsável
            para quadros crônicos, articulares e autoimunes.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
