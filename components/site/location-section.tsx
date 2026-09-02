import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type LocationSectionProps = {
  profile: DoctorProfile;
};

export function LocationSection({ profile }: LocationSectionProps) {
  return (
    <SectionShell
      className="bg-[#11100f] text-[#f7f1e8]"
      description="Atendimento presencial em endereços públicos confirmados, com rota aberta diretamente no Google Maps."
      eyebrow="Onde atendo"
      id="onde-atendo"
      title="Atendimento em Fernandópolis e São José do Rio Preto."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.locations.map((location) => (
          <article
            className="interactive-soft overflow-hidden border border-[#ead7bd]/16 bg-[#191716]"
            key={`${location.streetAddress}-${location.city}`}
          >
            <div className="p-7 sm:p-8">
              <div className="inline-flex size-12 items-center justify-center border border-[#ead7bd]/22 text-[var(--profile-gold)]">
                <Building2 aria-hidden="true" size={24} />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--profile-accent)]">
                {location.city}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-[#f7f1e8]">
                {location.clinic}
              </h3>
              <div className="mt-6 flex gap-3 text-[#c9b7a3]">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[var(--profile-gold)]"
                  size={20}
                />
                <p className="text-pretty text-base leading-8">
                  {location.streetAddress}
                  <br />
                  {location.postalCode}
                </p>
              </div>

              <a
                className="interactive-soft mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 bg-[var(--profile-accent)] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#14110f]"
                href={location.mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                Abrir rota
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>

            <div className="relative min-h-[280px] border-t border-[#ead7bd]/16 bg-[#11100f]">
              <iframe
                aria-label={`Mapa para ${location.clinic} em ${location.city}`}
                className="absolute inset-0 h-full w-full grayscale-[18%] sepia-[10%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={location.mapEmbedUrl}
                title={`Mapa de ${location.clinic} em ${location.city}`}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" />
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
