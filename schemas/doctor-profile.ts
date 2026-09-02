export type ProfileSectionKey =
  | "hero"
  | "care"
  | "visualHealth"
  | "differentials"
  | "location"
  | "availability"
  | "services"
  | "testimonials"
  | "faq"
  | "finalCta";

export type SectionVisibility = Record<ProfileSectionKey, boolean>;

export type ProfilePhoto = {
  src: string;
  alt: string;
  fallbackInitials: string;
};

export type ProfileColors = {
  background: string;
  foreground: string;
  accent: string;
  accentSoft: string;
  detail: string;
  gold: string;
};

export type ProfileAddress = {
  clinic: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  mapUrl: string;
  mapEmbedUrl: string;
};

export type ProfileAvailability = {
  whatsappCommercialAvailability: string;
  displayText: string;
  note: string;
};

export type ProfileContact = {
  instagramUrl: string;
  whatsappNumber: string;
  email: string;
  schedulingUrl: string;
};

export type ProfileOfficeHours = {
  publicLabel: string;
  items: readonly string[];
  showOnSite: boolean;
};

export type ProfileListItem = {
  title: string;
  description: string;
};

export type DifferentialIcon = "heartPulse" | "microscope" | "sparkles";

export type ProfileDifferential = ProfileListItem & {
  icon: DifferentialIcon;
};

export type ProfileVisualTopic = ProfileListItem & {
  label: string;
};

export type ProfileTestimonial = {
  quote: string;
  author: string;
  permissionConfirmed: boolean;
};

export type ProfileFaq = {
  question: string;
  answer: string;
};

export type DoctorProfile = {
  professionalName: string;
  shortName: string;
  crm: string;
  rqe: string;
  city: string;
  specialty: string;
  specialtyValidationNote: string;
  tagline: string;
  institutionalCall: string;
  approvedBaseText: string;
  biography: readonly string[];
  photo: ProfilePhoto;
  colors: ProfileColors;
  address: ProfileAddress;
  locations: readonly ProfileAddress[];
  availability: ProfileAvailability;
  contact: ProfileContact;
  officeHours: ProfileOfficeHours;
  care: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: readonly string[];
  };
  visualHealth: {
    eyebrow: string;
    title: string;
    description: string;
    image: ProfilePhoto;
    topics: readonly ProfileVisualTopic[];
  };
  careAreas: readonly ProfileListItem[];
  credentials: {
    education: readonly string[];
    experience: readonly string[];
  };
  differentials: readonly ProfileDifferential[];
  services: readonly ProfileListItem[];
  testimonials: readonly ProfileTestimonial[];
  faq: readonly ProfileFaq[];
  sections: SectionVisibility;
};
