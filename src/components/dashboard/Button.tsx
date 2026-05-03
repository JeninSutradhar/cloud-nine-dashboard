import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

export function CFButton({
  variant = "secondary",
  className,
  size = "md",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: "sm" | "md";
}) {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors disabled:opacity-50",
        size === "sm" ? "h-7 px-2.5 text-[12px]" : "h-8 px-3 text-[13px]",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        variant === "secondary" &&
          "border border-border bg-surface text-foreground hover:bg-surface-muted",
        variant === "outline" &&
          "border border-border-strong bg-transparent text-foreground hover:bg-surface-muted",
        variant === "ghost" && "text-foreground hover:bg-surface-muted",
        className,
      )}
    />
  );
}