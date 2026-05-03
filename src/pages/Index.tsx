import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CFButton } from "@/components/dashboard/Button";
import { Pill } from "@/components/dashboard/Pill";
import { Sparkline } from "@/components/dashboard/Sparkline";
import {
  Calendar, Plus, Tag, MoreHorizontal, Star, ShieldCheck, Gauge, Activity,
  Check, ChevronRight, Box, Lock,
} from "lucide-react";

const wave = (n = 24, base = 30, amp = 30, seed = 1) =>
  Array.from({ length: n }, (_, i) =>
    Math.round(base + Math.sin(i / 2 + seed) * amp + ((i * seed) % 7)),
  );

export default function Index() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="text-[12px] text-muted-foreground">Account home</div>
          <h1 className="mt-1 text-[28px] font-semibold leading-tight tracking-tight text-foreground">
            Agency.example@workspace.com's Account
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <CFButton variant="secondary" className="h-8 w-8 px-0">
            <Tag className="h-4 w-4" />
          </CFButton>
          <CFButton variant="secondary" className="h-8 w-8 px-0">
            <MoreHorizontal className="h-4 w-4" />
          </CFButton>
          <CFButton variant="primary">
            <Plus className="h-4 w-4" /> Add
          </CFButton>
        </div>
      </div>

      {/* Analytics */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-foreground">Analytics</h2>
        <CFButton variant="secondary" size="sm">
          <Calendar className="h-3.5 w-3.5" /> Last 24 hours
        </CFButton>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" /> Security
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-4"
        >
          <MetricCard
            label="Security insights"
            value="10"
            sub="7 high, 3 low"
          />
          <MetricCard
            label="Encrypted requests"
            value="100.0%"
            delta={{ value: "0.0%", trend: "up", tone: "neutral" }}
            spark={{ data: wave(20, 80, 5, 2), color: "hsl(var(--primary))" }}
          />
        </SectionCard>

        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-muted-foreground" /> Performance
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-4"
        >
          <MetricCard
            label="Cache rate"
            value="1.0%"
            delta={{ value: "9.6%", trend: "up", tone: "good" }}
            spark={{ data: wave(20, 20, 18, 3) }}
          />
          <MetricCard
            label="Client errors"
            value="1.03k"
            delta={{ value: "305.9%", trend: "up", tone: "bad" }}
            spark={{ data: wave(20, 25, 25, 5), color: "hsl(var(--destructive))" }}
          />
        </SectionCard>

        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-muted-foreground" /> Activity
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-4"
        >
          <MetricCard
            label="Web traffic"
            value="3.08k"
            delta={{ value: "214.3%", trend: "up", tone: "good" }}
            spark={{ data: wave(20, 30, 25, 7) }}
          />
          <MetricCard
            label="Total bandwidth"
            value="40.58 MB"
            delta={{ value: "291.2%", trend: "up", tone: "good" }}
            spark={{ data: wave(20, 35, 30, 9) }}
          />
        </SectionCard>
      </div>

      {/* Domains, Workers, Zero Trust */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SectionCard
          title={
            <span className="flex items-center gap-2">
              Domains
              <span className="rounded-md bg-surface-muted px-1.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                1
              </span>
            </span>
          }
          actions={
            <div className="flex items-center gap-1">
              <button className="rounded p-1 text-muted-foreground hover:bg-surface-muted">
                <Star className="h-4 w-4" />
              </button>
              <button className="rounded p-1 text-muted-foreground hover:bg-surface-muted">
                <Plus className="h-4 w-4" />
              </button>
              <button className="rounded p-1 text-muted-foreground hover:bg-surface-muted">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          }
          bodyClassName="p-0"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <Pill tone="success" className="h-5 w-5 justify-center px-0">
                <Check className="h-3 w-3" />
              </Pill>
              <a href="#" className="text-[13px] font-medium text-foreground hover:underline">
                example.domain
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-32">
                <Sparkline data={wave(24, 30, 30, 4)} />
              </div>
              <span className="text-[12px] text-muted-foreground">3.1K</span>
            </div>
          </div>
          <div className="px-4 py-12 text-center text-[12px] text-muted-foreground">
            Showing 1 of 1 domain
          </div>
        </SectionCard>

        <SectionCard title="Workers and Pages" bodyClassName="flex flex-col items-center justify-center gap-3 py-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground">
            <Box className="h-5 w-5" />
          </div>
          <h4 className="text-[14px] font-semibold text-foreground">
            Build and ship fast, without the overhead
          </h4>
          <p className="max-w-[260px] text-center text-[12px] text-muted-foreground">
            From AI to full-stack — deploy and scale globally in minutes
          </p>
          <CFButton variant="secondary" size="sm">Start building</CFButton>
        </SectionCard>

        <SectionCard title="Zero Trust security" bodyClassName="flex flex-col items-center justify-center gap-3 py-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground">
            <Lock className="h-5 w-5" />
          </div>
          <h4 className="text-[14px] font-semibold text-foreground">
            Secure access for your team and tools
          </h4>
          <p className="max-w-[280px] text-center text-[12px] text-muted-foreground">
            Control who reaches your internal apps and data, without a VPN
          </p>
          <CFButton variant="secondary" size="sm">Get started</CFButton>
        </SectionCard>
      </div>

      {/* Audit + Next steps */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <SectionCard title="Audit logs" bodyClassName="p-0">
          <ul className="divide-y divide-border">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
                <span className="font-medium text-foreground">Create DNS Record</span>
                <div className="flex items-center gap-3 text-[12px] text-muted-foreground">
                  <span>example.domain</span>
                  <span className="underline decoration-dotted">{i < 4 ? "23h ago" : "3d ago"}</span>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Next steps" bodyClassName="p-0">
          <ul className="divide-y divide-border">
            {[
              "Enable single sign-on to improve login security",
              "Invite teammates and back-up admins",
              "Get alerts for billing, attacks, and more",
              "Enable 2FA for your account",
            ].map((label) => (
              <li key={label}>
                <a href="#" className="flex items-center justify-between px-4 py-3 text-[13px] text-foreground hover:bg-surface-muted">
                  <span>{label}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Recommended for you" bodyClassName="space-y-3">
          {[
            { t: "Speed up your site", d: "Enable Argo Smart Routing for ~30% faster TTFB." },
            { t: "Block AI training bots", d: "One-click rule to keep crawlers off your content." },
            { t: "Configure WAF rules", d: "Protect against OWASP top 10 with managed rulesets." },
          ].map((c) => (
            <a
              key={c.t}
              href="#"
              className="block rounded-md border border-border p-3 hover:bg-surface-muted"
            >
              <div className="text-[13px] font-semibold text-foreground">{c.t}</div>
              <div className="mt-0.5 text-[12px] text-muted-foreground">{c.d}</div>
            </a>
          ))}
        </SectionCard>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-[12px] text-muted-foreground">
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-foreground">Support</a>
          <a href="#" className="hover:text-foreground">System Status</a>
          <a href="#" className="hover:text-foreground">Careers</a>
          <a href="#" className="hover:text-foreground">Terms of Use</a>
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
        </div>
        <span>© 2026 Dashboard Template, Inc.</span>
      </div>
    </DashboardLayout>
  );
}
