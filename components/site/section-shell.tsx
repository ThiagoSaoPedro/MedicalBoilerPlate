import type { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type SectionShellProps = PropsWithChildren<{
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  contentClassName?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  const titleId = `${id}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={cn("scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10", className)}
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--profile-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="editorial-title text-balance text-4xl text-current sm:text-5xl lg:text-7xl"
            id={titleId}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-current/70 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
