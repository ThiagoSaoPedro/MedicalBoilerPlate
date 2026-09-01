import type { DoctorProfile } from "@/schemas/doctor-profile";

export function hasContent(value: string | null | undefined): value is string {
  return Boolean(value?.trim());
}

export function hasItems<T>(items: readonly T[]): boolean {
  return items.length > 0;
}

export function hasCommercialContact(profile: DoctorProfile): boolean {
  return (
    hasContent(profile.contact.whatsappNumber) ||
    hasContent(profile.contact.schedulingUrl) ||
    hasContent(profile.contact.email)
  );
}
