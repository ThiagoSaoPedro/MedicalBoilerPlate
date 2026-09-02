import { BriefcaseMedical, GraduationCap } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type CredentialsSectionProps = {
  profile: DoctorProfile;
};

export function CredentialsSection({ profile }: CredentialsSectionProps) {
  const groups = [
    {
      title: "Formação",
      icon: GraduationCap,
      items: profile.credentials.education,
    },
    {
      title: "Experiência profissional",
      icon: BriefcaseMedical,
      items: profile.credentials.experience,
    },
  ];

  return (
    <SectionShell
      className="bg-[#ead7bd] text-[#14110f]"
      description="Trajetória médica apresentada de forma objetiva, com formação e experiência profissional confirmadas nos dados centrais."
      eyebrow="Credenciais"
      id="credenciais"
      title="Formação sólida para um cuidado reumatológico criterioso."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon;

          return (
            <article
              className="border-t border-[#14110f]/30 pt-8"
              key={group.title}
            >
              <div className="mb-9 inline-flex size-12 items-center justify-center border border-[#14110f]/25 text-[#5a3824]">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3 className="editorial-title text-4xl text-[#14110f]">{group.title}</h3>
              <ul className="mt-6 grid gap-4">
                {group.items.map((item) => (
                  <li className="flex gap-3 text-[#4f453b]" key={item}>
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-7 shrink-0 bg-[#14110f]/35"
                    />
                    <span className="text-pretty text-base leading-8">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
