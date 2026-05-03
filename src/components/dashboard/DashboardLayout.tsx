import { DashboardSidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-canvas text-foreground">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="min-w-0 flex-1 overflow-y-auto px-8 py-6">{children}</main>
      </div>
    </div>
  );
}