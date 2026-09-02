import type { DoctorProfile } from "@/schemas/doctor-profile";
import { InstagramIcon } from "./instagram-icon";

type SiteFooterProps = {
  profile: DoctorProfile;
};

export function SiteFooter({ profile }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-card px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-muted-foreground md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-serif text-xl text-foreground">{profile.professionalName}</p>
          <p className="mt-2">
            {profile.specialty} · {profile.crm} · {profile.rqe}
          </p>
          <p className="mt-1">Atendimento presencial em {profile.city}</p>
        </div>
        <a
          aria-label={`Abrir Instagram oficial de ${profile.shortName}`}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-[var(--profile-accent)] transition hover:border-[var(--profile-accent)]"
          href={profile.contact.instagramUrl}
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon className="size-5" />
        </a>
      </div>
    </footer>
  );
}
