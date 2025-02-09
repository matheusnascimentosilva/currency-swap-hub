
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b animate-fade-in">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Crypto Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
