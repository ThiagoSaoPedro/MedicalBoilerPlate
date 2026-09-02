import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { hasCommercialContact, hasContent } from "@/utils/profile-visibility";
import { Monogram } from "./monogram";

type HeroSectionProps = {
  profile: DoctorProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const hasPhoto = hasContent(profile.photo.src);
  const hasContact = hasCommercialContact(profile);

  return (
    <section
      className="hero-surface relative isolate overflow-hidden px-5 pb-20 pt-28 text-[#f7f1e8] sm:px-8 lg:px-10 lg:pb-24"
      id="inicio"
    >
      <div aria-hidden="true" className="fine-lines absolute inset-0 -z-10 opacity-55" />
      <div
        aria-hidden="true"
        className="absolute left-5 top-28 hidden h-px w-28 bg-[var(--profile-gold)]/45 lg:block"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[740px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="reveal-soft max-w-3xl">
          <Monogram className="mb-10 size-16 bg-black/10 text-lg" />
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[var(--profile-accent)]">
            {profile.specialty}
          </p>
          <h1 className="text-balance font-serif text-5xl leading-none text-[#f7f1e8] sm:text-7xl lg:text-8xl">
            {profile.professionalName}
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#ead7bd]">
            {profile.crm} | {profile.rqe}
          </p>
          <p className="mt-9 max-w-2xl text-pretty text-xl leading-9 text-[#d8c8b6] sm:text-2xl">
            {profile.institutionalCall}
          </p>
          {hasContact ? (
            <div className="mt-10 inline-flex">
              <a
                className="interactive-soft inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--profile-accent)] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#14110f] sm:px-10"
                href={profile.contact.schedulingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Agendar consulta
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
            </div>
          ) : null}
          <div className="mt-14 grid gap-6 border-l border-[var(--profile-gold)]/45 pl-6 text-sm text-[#c9b7a3] sm:grid-cols-2">
            <div>
              <span className="block font-bold uppercase tracking-[0.16em] text-[#f7f1e8]">
                Atendimento
              </span>
              <span className="mt-2 block leading-7">{profile.city}</span>
            </div>
            <div>
              <span className="block font-bold uppercase tracking-[0.16em] text-[#f7f1e8]">
                Clínica
              </span>
              <span className="mt-2 block leading-7">{profile.address.clinic}</span>
            </div>
          </div>
        </div>

        <div className="reveal-soft relative lg:justify-self-end">
          <div className="absolute -left-7 top-10 z-10 hidden h-[72%] w-px bg-[var(--profile-gold)]/35 lg:block" />
          <div className="relative min-h-[520px] overflow-hidden border border-[#ead7bd]/18 bg-[#191716] sm:min-h-[680px] lg:min-h-[760px] lg:w-[610px]">
            {hasPhoto ? (
              <Image
                alt={profile.photo.alt}
                className="object-cover object-[52%_28%] contrast-[1.04] saturate-[0.94]"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={profile.photo.src}
              />
            ) : (
              <div className="flex h-full min-h-[520px] items-center justify-center text-5xl font-serif text-[var(--profile-accent)]">
                {profile.photo.fallbackInitials}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/70 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 border border-[#ead7bd]/25 bg-[#11100f]/82 p-4 backdrop-blur-md sm:left-auto sm:w-80">
            <div className="flex items-start gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 text-[var(--profile-gold)]"
                size={20}
              />
              <div>
                <p className="font-semibold text-[#f7f1e8]">{profile.address.clinic}</p>
                <p className="mt-1 text-sm leading-6 text-[#c9b7a3]">
                  Fernandópolis e São José do Rio Preto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
