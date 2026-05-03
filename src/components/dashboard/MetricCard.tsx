import { ArrowUpRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sparkline } from "./Sparkline";

type Props = {
  label: string;
  value: string;
  delta?: { value: string; trend: "up" | "down"; tone?: "good" | "bad" | "neutral" };
  sub?: string;
  spark?: { data: number[]; color?: string };
};

export function MetricCard({ label, value, delta, sub, spark }: Props) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      <div className="px-3.5 pt-3">
      <div className="flex items-center gap-1 text-[12px] text-muted-foreground">
        <span>{label}</span>
        <Info className="h-3 w-3" />
      </div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-[26px] font-bold leading-none tracking-tight text-foreground">
          {value}
        </span>
        {delta && (
          <span
            className={cn(
              "flex items-center gap-0.5 text-[12px] font-medium",
              delta.tone === "bad"
                ? "text-destructive"
                : delta.tone === "neutral"
                ? "text-muted-foreground"
                : "text-success",
            )}
          >
            <ArrowUpRight
              className={cn("h-3 w-3", delta.trend === "down" && "rotate-90")}
            />
            {delta.value}
          </span>
        )}
      </div>
      {sub && <div className="mt-1 text-[12px] text-muted-foreground">{sub}</div>}
      </div>
      {spark && (
        <div className="mt-2 h-12 flex-1">
          <Sparkline data={spark.data} color={spark.color} />
        </div>
      )}
    </div>
  );
}