"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { cn } from "@/utils/cn";

export type NavigationItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  profile: DoctorProfile;
  navigation: readonly NavigationItem[];
};

export function SiteHeader({ profile, navigation }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link
          className="min-w-0 text-left"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          <span className="block truncate font-serif text-xl font-medium leading-none text-foreground sm:text-2xl">
            {profile.shortName}
          </span>
          <span className="mt-1 block text-sm font-medium text-muted-foreground">
            Dermatologia & Tricologia
          </span>
        </Link>

        <div className="flex items-center gap-7">
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                className="text-sm font-semibold text-foreground/75 transition hover:text-[var(--profile-accent)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            aria-label="Agendar consulta pelo WhatsApp"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--profile-accent)] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgb(143_70_87_/_0.22)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--profile-accent)_88%,black)] sm:px-5"
            href={profile.contact.schedulingUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={16} />
            <span className="hidden sm:inline">Agendar Consulta</span>
            <span className="sm:hidden">Agendar</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:border-[var(--profile-accent)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? (
              <X aria-hidden="true" size={19} />
            ) : (
              <Menu aria-hidden="true" size={19} />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border bg-background px-5 py-4 shadow-[var(--shadow-soft)] lg:hidden",
          isOpen ? "block" : "hidden",
        )}
        id="mobile-navigation"
      >
        <nav aria-label="Navegação mobile" className="mx-auto grid max-w-7xl gap-2">
          {navigation.map((item) => (
            <Link
              className="rounded-lg px-3 py-3 text-sm font-semibold text-foreground/75 transition hover:bg-muted hover:text-[var(--profile-accent)]"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
