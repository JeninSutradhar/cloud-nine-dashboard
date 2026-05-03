import { cn } from "@/lib/utils";

export function SectionCard({
  title,
  badge,
  actions,
  children,
  className,
  bodyClassName,
}: {
  title?: React.ReactNode;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("rounded-lg border border-border bg-surface", className)}>
      {(title || actions) && (
        <header className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <div className="flex items-center gap-2">
            {title && (
              <h3 className="text-[13px] font-semibold text-foreground">{title}</h3>
            )}
            {badge}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </section>
  );
}