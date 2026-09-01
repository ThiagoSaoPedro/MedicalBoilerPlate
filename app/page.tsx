import type { CSSProperties } from "react";
import { AvailabilitySection } from "@/components/site/availability-section";
import { CareSection } from "@/components/site/care-section";
import { DifferentialsSection } from "@/components/site/differentials-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { LocationSection } from "@/components/site/location-section";
import {
  FaqSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/site/optional-sections";
import { VisualHealthSection } from "@/components/site/visual-health-section";
import { doctorProfile } from "@/data/doctor-profile";
import { hasCommercialContact, hasItems } from "@/utils/profile-visibility";

const navigation = [
  { label: "Início", href: "#inicio", visible: doctorProfile.sections.hero },
  { label: "Cuidado", href: "#cuidado", visible: doctorProfile.sections.care },
  {
    label: "Diferenciais",
    href: "#diferenciais",
    visible:
      doctorProfile.sections.differentials && hasItems(doctorProfile.differentials),
  },
  {
    label: "Onde atender",
    href: "#onde-atender",
    visible: doctorProfile.sections.location,
  },
  {
    label: "Disponibilidade",
    href: "#disponibilidade",
    visible: doctorProfile.sections.availability,
  },
]
  .filter((item) => item.visible)
  .map(({ href, label }) => ({ href, label }));

const profileTheme = {
  "--profile-background": doctorProfile.colors.background,
  "--profile-foreground": doctorProfile.colors.foreground,
  "--profile-accent": doctorProfile.colors.accent,
  "--profile-accent-soft": doctorProfile.colors.accentSoft,
  "--profile-detail": doctorProfile.colors.detail,
} as CSSProperties;

export default function Home() {
  const showServices =
    doctorProfile.sections.services && hasItems(doctorProfile.services);
  const showTestimonials =
    doctorProfile.sections.testimonials && hasItems(doctorProfile.testimonials);
  const showFaq = doctorProfile.sections.faq && hasItems(doctorProfile.faq);
  const showFinalCta =
    doctorProfile.sections.finalCta && hasCommercialContact(doctorProfile);

  return (
    <div
      className="min-h-screen bg-[var(--profile-background)] text-[var(--profile-foreground)]"
      style={profileTheme}
    >
      <SiteHeader navigation={navigation} profile={doctorProfile} />
      <main>
        {doctorProfile.sections.hero ? <HeroSection profile={doctorProfile} /> : null}
        {doctorProfile.sections.care ? <CareSection profile={doctorProfile} /> : null}
        {doctorProfile.sections.visualHealth ? (
          <VisualHealthSection profile={doctorProfile} />
        ) : null}
        {doctorProfile.sections.differentials && hasItems(doctorProfile.differentials) ? (
          <DifferentialsSection profile={doctorProfile} />
        ) : null}
        {doctorProfile.sections.location ? (
          <LocationSection profile={doctorProfile} />
        ) : null}
        {doctorProfile.sections.availability ? (
          <AvailabilitySection profile={doctorProfile} />
        ) : null}
        {showServices ? <ServicesSection profile={doctorProfile} /> : null}
        {showTestimonials ? <TestimonialsSection profile={doctorProfile} /> : null}
        {showFaq ? <FaqSection profile={doctorProfile} /> : null}
        {showFinalCta ? <FinalCtaSection profile={doctorProfile} /> : null}
      </main>
      <SiteFooter profile={doctorProfile} />
    </div>
  );
}
