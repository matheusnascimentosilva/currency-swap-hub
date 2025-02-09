
import { DashboardHeader } from "@/components/DashboardHeader";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { WalletOverview } from "@/components/WalletOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardHeader />
      <main className="container py-8">
        <div className="grid gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CurrencyConverter />
            <WalletOverview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
