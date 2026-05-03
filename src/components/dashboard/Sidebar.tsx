import { useState } from "react";
import {
  Home, Clock, Globe, Search as SearchIcon, ChevronDown, ChevronRight,
  Compass, BarChart3, Box, Sparkles, Database, PlayCircle,
  ShieldCheck, Lock, Network, Zap, Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  active?: boolean;
  children?: { label: string; active?: boolean }[];
  expandable?: boolean;
};

const sectionTop: Item[] = [
  { label: "Account home", icon: Home, active: true },
  { label: "Recents", icon: Clock, expandable: true },
  {
    label: "Domains",
    icon: Globe,
    expandable: true,
    children: [
      { label: "Overview" },
      { label: "Registrations" },
      { label: "Transfers" },
    ],
  },
];

const observe: Item[] = [
  { label: "Investigate", icon: Compass, expandable: true },
  { label: "Analytics", icon: BarChart3, expandable: true },
];

const build: Item[] = [
  { label: "Compute", icon: Box, expandable: true },
  { label: "AI", icon: Sparkles, expandable: true },
  { label: "Storage & databases", icon: Database, expandable: true },
  { label: "Media", icon: PlayCircle, expandable: true },
];

const protect: Item[] = [
  { label: "Application security", icon: ShieldCheck, expandable: true },
  { label: "Zero Trust", icon: Lock },
  { label: "Networking", icon: Network, expandable: true },
  { label: "Delivery & performance", icon: Zap, expandable: true },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 pt-5 pb-1.5 text-[11px] font-medium tracking-wide text-muted-foreground/70">
      {children}
    </div>
  );
}

function NavRow({ item }: { item: Item }) {
  const [open, setOpen] = useState(!!item.children);
  const Icon = item.icon;
  return (
    <div>
      <button
        onClick={() => item.expandable && setOpen((v) => !v)}
        className={cn(
          "group flex w-full items-center gap-2.5 rounded-md px-3 py-1.5 text-[13px] font-normal text-sidebar-foreground transition-colors",
          "hover:bg-sidebar-accent",
          item.active && "bg-sidebar-accent font-medium text-foreground",
        )}
      >
        {Icon && <Icon className="h-4 w-4 shrink-0 stroke-[1.5] text-muted-foreground" />}
        <span className="flex-1 text-left">{item.label}</span>
        {item.expandable &&
          (open ? (
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          ))}
      </button>
      {open && item.children && (
        <div className="mt-0.5 space-y-px pl-9">
          {item.children.map((c) => (
            <a
              key={c.label}
              href="#"
              className={cn(
                "block rounded-md px-3 py-1.5 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent",
                c.label === "Overview" && "bg-sidebar-accent text-foreground",
              )}
            >
              {c.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function DashboardSidebar() {
  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-border bg-sidebar">
      {/* Brand */}
      <div className="flex h-14 items-center gap-2 border-b border-border px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand/10">
          <svg viewBox="0 0 32 32" className="h-5 w-5" fill="hsl(var(--brand))">
            <path d="M22.6 19.5c.3-1 .2-1.9-.3-2.6-.5-.6-1.2-1-2.1-1l-12-.2c-.2 0-.3-.1-.4-.2 0-.1 0-.3.1-.4 0-.1.1-.2.3-.2l12-.2c1.4 0 3-1.2 3.5-2.5l.7-1.9c0-.1 0-.2 0-.3a7.7 7.7 0 0 0-14.7-.8c-1-.7-2.1-1-3.4-.9C4 8.7 2.4 10.3 2.2 12.3c-.1.5 0 1 .1 1.5C1 14 0 15.3 0 16.8c0 .2.1.3.3.3h21.8c.2 0 .4-.1.5-.3l.1-.3z"/>
          </svg>
        </div>
        <span className="truncate text-[13px] font-semibold text-foreground">
          Agency.artifice@gmail.c…
        </span>
      </div>

      {/* Search */}
      <div className="px-3 pt-3">
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Quick search…"
            className="h-8 w-full rounded-md border border-border bg-surface pl-8 pr-10 text-[13px] outline-none placeholder:text-muted-foreground focus:border-primary"
          />
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-surface-muted px-1 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-3 text-sm">
        <div className="space-y-px">
          {sectionTop.map((i) => <NavRow key={i.label} item={i} />)}
        </div>
        <SectionLabel>Observe</SectionLabel>
        <div className="space-y-px">
          {observe.map((i) => <NavRow key={i.label} item={i} />)}
        </div>
        <SectionLabel>Build</SectionLabel>
        <div className="space-y-px">
          {build.map((i) => <NavRow key={i.label} item={i} />)}
        </div>
        <SectionLabel>Protect &amp; Connect</SectionLabel>
        <div className="space-y-px">
          {protect.map((i) => <NavRow key={i.label} item={i} />)}
        </div>
      </nav>

      <div className="border-t border-border p-2">
        <NavRow item={{ label: "Manage account", icon: Settings, expandable: true }} />
      </div>
    </aside>
  );
}