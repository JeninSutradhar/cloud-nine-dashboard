import { Diamond, HelpCircle, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-end gap-5 border-b border-border bg-surface px-6">
      <button className="flex items-center gap-1.5 text-[13px] font-medium text-foreground hover:text-primary">
        <Diamond className="h-3.5 w-3.5 rotate-45 fill-primary text-primary" />
        Ask AI
      </button>
      <button className="flex items-center gap-1.5 text-[13px] font-medium text-foreground hover:text-primary">
        <HelpCircle className="h-4 w-4" />
        Support
      </button>
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-surface-muted">
        <User className="h-4 w-4" />
      </button>
    </header>
  );
}