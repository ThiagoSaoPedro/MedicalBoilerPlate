import { cn } from "@/utils/cn";

type MonogramProps = {
  className?: string;
};

export function Monogram({ className }: MonogramProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex aspect-square items-center justify-center border border-[var(--profile-gold)] font-serif text-sm italic tracking-[0.08em] text-[var(--profile-gold)]",
        className,
      )}
    >
      FM
    </span>
  );
}
