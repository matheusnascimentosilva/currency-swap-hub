
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";

const wallets = [
  { id: 1, name: "Bitcoin", balance: "0.45 BTC", value: "$21,234", change: "+5.2%" },
  { id: 2, name: "Ethereum", balance: "3.21 ETH", value: "$6,432", change: "-2.1%" },
];

export const WalletOverview = () => {
  return (
    <div className="grid gap-4">
      <h2 className="text-lg font-semibold">Wallet Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="stat-card animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                <span className="font-medium">{wallet.name}</span>
              </div>
              <span className="text-sm flex items-center gap-1">
                {wallet.change.startsWith("+") ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                {wallet.change}
              </span>
            </div>
            <div className="mt-2">
              <div className="text-2xl font-bold">{wallet.balance}</div>
              <div className="text-sm text-muted-foreground">{wallet.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
