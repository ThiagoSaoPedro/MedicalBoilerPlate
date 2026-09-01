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
      className={cn("scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10", className)}
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase text-[var(--profile-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-balance font-serif text-3xl text-[var(--profile-foreground)] sm:text-4xl lg:text-5xl"
            id={titleId}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
