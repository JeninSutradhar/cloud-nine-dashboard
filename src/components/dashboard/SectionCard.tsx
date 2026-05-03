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
    <section className={cn("overflow-hidden rounded-lg border border-border/60 bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.04)]", className)}>
      {(title || actions) && (
        <header className="flex items-center justify-between border-b border-border/60 px-3.5 py-2">
          <div className="flex items-center gap-2">
            {title && (
              <h3 className="text-[13px] font-semibold text-foreground">{title}</h3>
            )}
            {badge}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </header>
      )}
      <div className={cn("p-3.5", bodyClassName)}>{children}</div>
    </section>
  );
}