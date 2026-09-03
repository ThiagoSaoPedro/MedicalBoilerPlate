import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { hasContent } from "@/utils/profile-visibility";
import { SectionShell } from "./section-shell";

type LocationSectionProps = {
  profile: DoctorProfile;
  className?: string;
};

export function LocationSection({ profile, className }: LocationSectionProps) {
  const hasMapUrl = hasContent(profile.address.mapUrl);
  const hasMapEmbedUrl = hasContent(profile.address.mapEmbedUrl);

  return (
    <SectionShell
      className={className}
      description="Endereço público confirmado, com rota e mapa incorporado."
      eyebrow="Onde atender"
      id="onde-atender"
      title="Atendimento presencial em localização central."
    >
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="flex flex-col justify-between rounded-lg border border-border bg-card p-7 shadow-sm sm:p-8">
          <div>
            <div className="inline-flex size-12 items-center justify-center rounded-lg bg-accent-soft text-[var(--profile-accent)]">
              <Building2 aria-hidden="true" size={24} />
            </div>
            <p className="mt-8 text-sm font-semibold uppercase text-[var(--profile-accent)]">
              Consultório
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-foreground">
              {profile.address.clinic}
            </h3>
            <div className="mt-6 flex gap-3 text-muted-foreground">
              <MapPin
                aria-hidden="true"
                className="mt-1 shrink-0 text-[var(--profile-accent)]"
                size={20}
              />
              <p className="text-pretty text-base leading-8">
                {profile.address.streetAddress}
                <br />
                {profile.address.city}
              </p>
            </div>
          </div>

          {hasMapUrl ? (
            <a
              className="mt-9 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-lg bg-[var(--profile-accent)] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgb(143_70_87_/_0.2)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--profile-accent)_88%,black)]"
              href={profile.address.mapUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ver rota
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          ) : null}
        </aside>

        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)]">
          {hasMapEmbedUrl ? (
            <iframe
              aria-label={`Mapa para ${profile.address.clinic}`}
              className="absolute inset-0 h-full w-full grayscale-[12%] sepia-[8%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={profile.address.mapEmbedUrl}
              title={`Mapa de ${profile.address.clinic}`}
            />
          ) : (
            <div className="flex h-full min-h-[420px] items-center justify-center p-8 text-center text-sm font-semibold uppercase text-muted-foreground">
              Mapa será exibido após inserir a URL de incorporação.
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" />
        </div>
      </div>
    </SectionShell>
  );
}
