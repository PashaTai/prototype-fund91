import { DonationForm } from "./DonationForm";

export function CTASection() {
  return (
    <section id="donate" className="pb-[var(--section-space)] pt-[var(--stack-lg)]">
      <div className="page-shell">
        <div className="overflow-hidden rounded-[2.2rem] border border-fund-line bg-white/84 shadow-[0_28px_90px_rgba(31,50,71,0.12)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card-pad-lg bg-fund-deep text-white">
              <p className="eyebrow text-white/60">
                Поддержать фонд
              </p>
              <h2 className="title-section mt-[var(--stack-md)] text-white">
                Подключиться к тем изменениям, которые школа чувствует каждый день.
              </h2>
              <p className="lead mt-[var(--stack-md)] max-w-xl text-white/74">
                Пожертвование в пользу фонда помогает школе быстрее запускать полезные
                инициативы, обновлять среду и удерживать высокое качество образовательной
                жизни.
              </p>

              <div className="mt-[var(--stack-lg)] space-y-4">
                <div className="card-pad rounded-[1.35rem] border border-white/12 bg-white/8">
                  <div className="text-lg font-medium">Прозрачная логика поддержки</div>
                  <div className="body-copy mt-1 text-white/68">
                    У каждого направления есть понятная цель, а у пожертвования — видимый
                    результат.
                  </div>
                </div>
                <div className="card-pad rounded-[1.35rem] border border-white/12 bg-white/8">
                  <div className="text-lg font-medium">Помощь школе в реальном времени</div>
                  <div className="body-copy mt-1 text-white/68">
                    Фонд даёт возможность быстрее запускать изменения без долгого ожидания.
                  </div>
                </div>
              </div>
            </div>

            <div className="card-pad-lg bg-fund-surface">
              <DonationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
