import { Clock3, MessageCircle } from "lucide-react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { hasContent } from "@/utils/profile-visibility";
import { SectionShell } from "./section-shell";

type AvailabilitySectionProps = {
  profile: DoctorProfile;
  className?: string;
};

export function AvailabilitySection({ profile, className }: AvailabilitySectionProps) {
  const hasWhatsapp = hasContent(profile.contact.whatsappNumber);

  return (
    <SectionShell
      className={className}
      description="Contato para agendamento, retornos e informações administrativas."
      eyebrow="Disponibilidade"
      id="disponibilidade"
      title="Atendimento com hora marcada e retorno organizado."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-lg border border-border bg-card p-6">
          <Clock3 aria-hidden="true" className="text-[var(--profile-accent)]" size={28} />
          <h3 className="mt-5 text-xl font-semibold text-foreground">
            {profile.availability.whatsappCommercialAvailability}
          </h3>
          <p className="mt-3 text-pretty text-sm leading-7 text-muted-foreground">
            {profile.availability.displayText}
          </p>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <MessageCircle
            aria-hidden="true"
            className="text-[var(--profile-detail)]"
            size={28}
          />
          <h3 className="mt-5 text-xl font-semibold text-foreground">
            WhatsApp comercial
          </h3>
          <p className="mt-3 text-pretty text-sm leading-7 text-muted-foreground">
            {hasWhatsapp
              ? "Use o canal comercial para solicitar horários disponíveis e orientações administrativas."
              : profile.availability.note}
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
