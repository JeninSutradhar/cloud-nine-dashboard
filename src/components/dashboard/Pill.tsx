import { cn } from "@/lib/utils";

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "success" | "warning" | "info" | "danger";
  className?: string;
}) {
  const map: Record<string, string> = {
    neutral: "bg-surface-muted text-foreground border-border",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    info: "bg-primary/10 text-primary border-primary/20",
    danger: "bg-destructive/10 text-destructive border-destructive/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11px] font-medium",
        map[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}