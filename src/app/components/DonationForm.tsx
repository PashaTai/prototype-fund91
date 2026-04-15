import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

export function DonationForm() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount ?? Number.parseInt(customAmount, 10);

    if (!Number.isFinite(amount) || amount <= 0) {
      return;
    }

    navigate(`/offer?amount=${amount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="stack-lg">
      <div className="stack-sm">
        <h3 className="title-card text-fund-ink">
          Поддержать школу
        </h3>
        <p className="body-copy text-fund-muted">
          Выберите сумму пожертвования
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {predefinedAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => {
              setSelectedAmount(amount);
              setCustomAmount("");
            }}
            className={`rounded-2xl border px-4 py-3 text-sm transition sm:text-base ${
              selectedAmount === amount
                ? "border-fund-accent bg-fund-accent-soft text-fund-accent"
                : "border-fund-line bg-fund-surface text-fund-ink hover:border-fund-accent/40"
            }`}
          >
            {amount.toLocaleString()} ₽
          </button>
        ))}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-fund-ink">
          Другая сумма
        </label>
        <div className="relative">
          <input
            type="number"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            placeholder="Введите сумму"
            className="w-full rounded-2xl border border-fund-line bg-fund-surface px-4 py-3 pr-12 text-fund-ink outline-none transition placeholder:text-fund-muted/75 focus:border-fund-accent"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-fund-muted">
            ₽
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={!selectedAmount && !customAmount}
        className="w-full rounded-full bg-fund-accent px-5 py-4 text-base font-medium text-white shadow-[0_18px_34px_rgba(45,78,111,0.22)] transition hover:bg-fund-accent-strong disabled:cursor-not-allowed disabled:bg-[#aeb8c4] disabled:shadow-none"
      >
        Перейти к оплате
      </button>

      <div className="flex items-center gap-4 border-t border-fund-line pt-4">
        <div className="flex-1">
          <p className="mb-1 text-sm text-fund-muted">или сканируйте QR-код</p>
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-fund-line bg-white shadow-[0_12px_30px_rgba(5,7,176,0.08)]">
          <svg className="h-20 w-20" viewBox="0 0 100 100" aria-hidden="true">
            <rect width="100" height="100" rx="8" fill="white" />
            <rect x="10" y="10" width="10" height="10" fill="#0507B0" />
            <rect x="30" y="10" width="10" height="10" fill="#0507B0" />
            <rect x="50" y="10" width="10" height="10" fill="#0507B0" />
            <rect x="70" y="10" width="10" height="10" fill="#0507B0" />
            <rect x="10" y="30" width="10" height="10" fill="#0507B0" />
            <rect x="70" y="30" width="10" height="10" fill="#0507B0" />
            <rect x="10" y="50" width="10" height="10" fill="#0507B0" />
            <rect x="30" y="50" width="10" height="10" fill="#0507B0" />
            <rect x="50" y="50" width="10" height="10" fill="#0507B0" />
            <rect x="70" y="50" width="10" height="10" fill="#0507B0" />
            <rect x="10" y="70" width="10" height="10" fill="#0507B0" />
            <rect x="30" y="70" width="10" height="10" fill="#0507B0" />
            <rect x="70" y="70" width="10" height="10" fill="#0507B0" />
          </svg>
        </div>
      </div>
    </form>
  );
}
