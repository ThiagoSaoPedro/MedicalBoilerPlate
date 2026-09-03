import type { Metadata, Viewport } from "next";
import { doctorProfile } from "@/data/doctor-profile";
import "./globals.css";

const pageTitle = `${doctorProfile.professionalName} | ${doctorProfile.specialty}`;

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${doctorProfile.shortName}`,
  },
  description: doctorProfile.tagline,
  applicationName: "Boilerplate Médico Institucional",
  authors: [{ name: "Boilerplate Médico Institucional" }],
  openGraph: {
    title: pageTitle,
    description: doctorProfile.tagline,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: doctorProfile.tagline,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: doctorProfile.colors.background,
};

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{props.children}</body>
    </html>
  );
}
