import type { DoctorProfile } from "@/schemas/doctor-profile";
import { SectionShell } from "./section-shell";

type OptionalSectionProps = {
  profile: DoctorProfile;
};

export function ServicesSection({ profile }: OptionalSectionProps) {
  return (
    <SectionShell
      description="Serviços só aparecem quando forem preenchidos e revisados no arquivo de dados."
      eyebrow="Serviços"
      id="servicos"
      title="Linhas de cuidado"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {profile.services.map((service) => (
          <article
            className="rounded-lg border border-border bg-card p-6"
            key={service.title}
          >
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

export function TestimonialsSection({ profile }: OptionalSectionProps) {
  return (
    <SectionShell
      description="Depoimentos só devem ser publicados com autorização expressa."
      eyebrow="Depoimentos"
      id="depoimentos"
      title="Relatos autorizados"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {profile.testimonials
          .filter((testimonial) => testimonial.permissionConfirmed)
          .map((testimonial) => (
            <figure
              className="rounded-lg border border-border bg-card p-6"
              key={`${testimonial.author}-${testimonial.quote}`}
            >
              <blockquote className="text-pretty text-base leading-8 text-foreground">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
      </div>
    </SectionShell>
  );
}

export function FaqSection({ profile }: OptionalSectionProps) {
  return (
    <SectionShell
      description="Perguntas frequentes ficam ocultas até receberem respostas aprovadas."
      eyebrow="FAQ"
      id="faq"
      title="Perguntas frequentes"
    >
      <div className="grid gap-4">
        {profile.faq.map((item) => (
          <details
            className="rounded-lg border border-border bg-card p-6"
            key={item.question}
          >
            <summary className="cursor-pointer text-lg font-semibold text-foreground">
              {item.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
