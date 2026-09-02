"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { DoctorProfile } from "@/schemas/doctor-profile";
import { cn } from "@/utils/cn";
import { hasCommercialContact } from "@/utils/profile-visibility";
import { InstagramIcon } from "./instagram-icon";
import { Monogram } from "./monogram";

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
  const hasContact = hasCommercialContact(profile);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ead7bd]/12 bg-[#11100f]/92 text-[#f7f1e8] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-5 sm:gap-5 sm:px-8 lg:px-10">
        <Link
          className="flex min-w-0 items-center gap-3 text-left"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          <Monogram className="size-10 shrink-0 bg-[#191716]" />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg font-medium leading-none text-[#f7f1e8] sm:text-2xl">
              {profile.shortName}
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#c9b7a3]">
              {profile.specialty}
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 lg:gap-7">
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#d8c8b6] transition hover:text-[var(--profile-accent)]"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            aria-label={`Abrir Instagram oficial de ${profile.shortName}`}
            className="interactive-soft inline-flex size-10 shrink-0 items-center justify-center border border-[#ead7bd]/18 bg-[#191716] text-[var(--profile-accent)] hover:border-[var(--profile-accent)] sm:size-11"
            href={profile.contact.instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon className="size-5" />
          </a>
          {hasContact ? (
            <a
              aria-label="Entrar em contato"
              className="interactive-soft inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap bg-[var(--profile-accent)] px-3 py-2.5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#14110f] sm:min-h-11 sm:px-5 sm:py-3"
              href={profile.contact.schedulingUrl}
              rel="noreferrer"
              target="_blank"
            >
              Agendar consulta
            </a>
          ) : null}
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar navegação" : "Abrir navegação"}
            className="inline-flex size-10 shrink-0 items-center justify-center border border-[#ead7bd]/18 bg-[#191716] text-[#f7f1e8] transition hover:border-[var(--profile-accent)] lg:hidden"
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
          "border-t border-[#ead7bd]/12 bg-[#11100f] px-5 py-4 shadow-[var(--shadow-soft)] lg:hidden",
          isOpen ? "block" : "hidden",
        )}
        id="mobile-navigation"
      >
        <nav aria-label="Navegação mobile" className="mx-auto grid max-w-7xl gap-2">
          {navigation.map((item) => (
            <Link
              className="px-3 py-3 text-sm font-semibold text-[#d8c8b6] transition hover:bg-[#191716] hover:text-[var(--profile-accent)]"
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
