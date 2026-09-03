import { MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { hasContent } from "@/utils/profile-visibility";

type HeroSectionProps = {
  profile: DoctorProfile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  const hasPhoto = hasContent(profile.photo.src);
  const hasSchedulingUrl = hasContent(profile.contact.schedulingUrl);
  const hasClinicAddress =
    hasContent(profile.address.clinic) &&
    hasContent(profile.address.streetAddress) &&
    hasContent(profile.address.city);

  return (
    <section
      className="hero-surface relative isolate overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-24"
      id="inicio"
    >
      <div aria-hidden="true" className="fine-lines absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold uppercase text-[var(--profile-accent)]">
            {profile.specialty}
          </p>
          <h1 className="text-balance font-serif text-4xl text-[var(--profile-foreground)] sm:text-5xl lg:text-6xl">
            {profile.professionalName}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase text-muted-foreground">
            {profile.crm}
          </p>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            {profile.institutionalCall}
          </p>
          {hasSchedulingUrl ? (
            <div className="mt-9 inline-flex">
              <a
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[var(--profile-accent)] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgb(143_70_87_/_0.22)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--profile-accent)_88%,black)] sm:px-10 sm:text-lg"
                href={profile.contact.schedulingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Agendar consulta
                <MessageCircle aria-hidden="true" size={20} />
              </a>
            </div>
          ) : null}
          {hasClinicAddress ? (
            <div className="mt-12 grid gap-3 border-l border-[var(--profile-accent)] pl-5 text-sm text-muted-foreground sm:grid-cols-2">
              <div>
                <span className="block font-semibold text-foreground">
                  Atendimento em
                </span>
                <span>{profile.city}</span>
              </div>
              <div>
                <span className="block font-semibold text-foreground">Consultório</span>
                <span>{profile.address.clinic}</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-border bg-accent-soft shadow-[var(--shadow-soft)] sm:min-h-[560px] lg:min-h-[660px]">
            {hasPhoto ? (
              <Image
                alt={profile.photo.alt}
                className="object-cover object-center"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                src={profile.photo.src}
              />
            ) : (
              <div className="flex h-full min-h-[430px] items-center justify-center text-5xl font-serif text-[var(--profile-accent)]">
                {profile.photo.fallbackInitials}
              </div>
            )}
          </div>
          {hasClinicAddress ? (
            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/55 bg-card/92 p-4 backdrop-blur-md sm:left-auto sm:w-80">
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 text-[var(--profile-accent)]"
                  size={20}
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {profile.address.clinic}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {profile.address.streetAddress}, {profile.address.city}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
