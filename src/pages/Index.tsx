import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SectionCard } from "@/components/dashboard/SectionCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { CFButton } from "@/components/dashboard/Button";
import { Pill } from "@/components/dashboard/Pill";
import { Sparkline } from "@/components/dashboard/Sparkline";
import {
  Calendar, Plus, Tag, MoreHorizontal, Star, ShieldCheck, Gauge, Activity,
  Check, ArrowRight, Code2, Shield,
} from "lucide-react";

const wave = (n = 24, base = 30, amp = 30, seed = 1) =>
  Array.from({ length: n }, (_, i) =>
    Math.round(base + Math.sin(i / 2 + seed) * amp + ((i * seed) % 7)),
  );

// Authentic-looking series
const flatLine = Array.from({ length: 30 }, (_, i) => 50 + (i % 3));
const spikeLine = [12, 14, 13, 15, 14, 16, 15, 14, 18, 22, 20, 19, 21, 24, 28, 35, 48, 70, 92, 75, 55, 40, 32, 28, 25, 24, 26, 28, 30, 32];
const gentleRise = [20, 22, 21, 23, 25, 24, 27, 30, 28, 32, 35, 33, 38, 42, 40, 45, 48, 52, 55, 58, 62, 60, 65, 70];
const trafficLine = [30, 28, 32, 35, 33, 30, 28, 35, 42, 38, 45, 50, 48, 52, 58, 55, 62, 68, 72, 78, 75, 82, 88, 92];
const bandwidthLine = [25, 28, 32, 30, 35, 40, 38, 42, 48, 52, 50, 55, 60, 58, 65, 70, 68, 72, 78, 82, 85, 88, 92, 95];
const cacheLine = [10, 12, 14, 11, 15, 18, 16, 20, 22, 19, 24, 26, 23, 28, 30, 27, 32, 35, 31, 36, 40, 37, 42, 45];
const domainSpike = [8, 9, 8, 10, 9, 11, 10, 12, 11, 13, 12, 14, 13, 15, 18, 22, 28, 35, 24, 16, 12, 10, 9, 8];

export default function Index() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="text-[13px] text-muted-foreground">Account home</div>
          <h1 className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-foreground">
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

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" /> Security
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-0 p-0"
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
            spark={{ data: flatLine, color: "hsl(var(--primary))" }}
          />
        </SectionCard>

        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <Gauge className="h-4 w-4 text-muted-foreground" /> Performance
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-0 p-0"
        >
          <MetricCard
            label="Cache rate"
            value="1.0%"
            delta={{ value: "9.6%", trend: "up", tone: "good" }}
            spark={{ data: cacheLine }}
          />
          <MetricCard
            label="Client errors"
            value="1.03k"
            delta={{ value: "305.9%", trend: "up", tone: "bad" }}
            spark={{ data: spikeLine, color: "hsl(var(--destructive))" }}
          />
        </SectionCard>

        <SectionCard
          title={
            <span className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-muted-foreground" /> Activity
            </span>
          }
          bodyClassName="grid grid-cols-2 gap-0 p-0"
        >
          <MetricCard
            label="Web traffic"
            value="3.08k"
            delta={{ value: "214.3%", trend: "up", tone: "good" }}
            spark={{ data: trafficLine }}
          />
          <MetricCard
            label="Total bandwidth"
            value="40.58 MB"
            delta={{ value: "291.2%", trend: "up", tone: "good" }}
            spark={{ data: bandwidthLine }}
          />
        </SectionCard>
      </div>

      {/* Domains, Workers, Zero Trust */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
        <SectionCard
          title={
            <span className="flex items-center gap-2">
              Domains
              <span className="inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-md bg-surface-muted px-1.5 text-[11px] font-medium text-muted-foreground">
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
          <div className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-success text-success">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <a href="#" className="text-[13px] font-medium text-foreground hover:underline">
                example.domain
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-32">
                <Sparkline data={domainSpike} />
              </div>
              <span className="text-[12px] text-muted-foreground">3.1K</span>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Workers and Pages" bodyClassName="flex flex-col items-center justify-center gap-3 py-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground">
            <Code2 className="h-5 w-5" />
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
            <Shield className="h-5 w-5" />
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
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <SectionCard title="Audit logs" bodyClassName="p-0">
          <ul className="divide-y divide-border/60">
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i} className="grid grid-cols-[1fr_auto_70px] items-center gap-6 px-4 py-2.5 text-[13px]">
                <span className="font-medium text-foreground">Create DNS Record</span>
                <span className="text-[12px] text-muted-foreground">example.domain</span>
                <span className="text-right text-[12px] text-muted-foreground underline decoration-dotted">
                  {i < 4 ? "23h ago" : "3d ago"}
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Next steps" bodyClassName="p-0">
          <ul className="divide-y divide-border/60">
            {[
              "Enable single sign-on to improve login security",
              "Invite teammates and back-up admins",
              "Get alerts for billing, attacks, and more",
              "Enable 2FA for your account",
            ].map((label) => (
              <li key={label}>
                <a href="#" className="flex items-center justify-between px-4 py-3 text-[13px] text-foreground hover:bg-surface-muted">
                  <span>{label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
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
