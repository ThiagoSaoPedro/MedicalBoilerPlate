import { MessageCircle } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { hasContent } from "@/utils/profile-visibility";

type FinalCtaSectionProps = {
  profile: DoctorProfile;
};

export function FinalCtaSection({ profile }: FinalCtaSectionProps) {
  if (!hasContent(profile.contact.whatsappNumber)) {
    return null;
  }

  const cleanWhatsapp = profile.contact.whatsappNumber.replace(/\D/g, "");

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-lg border border-border bg-[var(--profile-accent)] p-8 text-accent-foreground sm:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase opacity-80">
              Contato comercial
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl sm:text-4xl">
              Fale com a equipe para informações sobre atendimento.
            </h2>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent-soft"
            href={`https://wa.me/${cleanWhatsapp}`}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
            <MessageCircle aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
