import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type CareSectionProps = {
  profile: DoctorProfile;
};

export function CareSection({ profile }: CareSectionProps) {
  return (
    <SectionShell
      className="bg-[#f7f1e8] text-[#14110f]"
      description={profile.care.description}
      eyebrow={profile.care.eyebrow}
      id="cuidado"
      title={profile.care.title}
    >
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border border-[#c99a68]/35 bg-[#ead7bd] p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5a3824]">
            Ponto de partida
          </p>
          <p className="mt-6 text-pretty font-serif text-3xl leading-10 text-[#14110f]">
            “{profile.approvedBaseText}”
          </p>
        </div>
        <div className="grid gap-5">
          {profile.care.paragraphs.map((paragraph) => (
            <p
              className="border-b border-[#c99a68]/30 pb-5 text-pretty text-base leading-8 text-[#4f453b]"
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
