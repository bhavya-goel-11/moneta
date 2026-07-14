import { BottomTabBar } from "@/components/layout/BottomTabBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <BottomTabBar />
    </div>
  );
}
