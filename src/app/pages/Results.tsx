import { Link } from "react-router";
import { resultsPageContent } from "../content/siteContent";

function getReachWidth(value: number, max: number) {
  return `${Math.min(100, Math.round((value / max) * 100))}%`;
}

export function Results() {
  const totalDistribution = resultsPageContent.distribution.reduce(
    (sum, item) => sum + item.value,
    0,
  );

  return (
    <div className="page-offset">
      <div className="page-shell stack-lg">
        <section className="surface-panel card-pad-lg overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="stack-md">
              <p className="eyebrow text-fund-muted">
                {resultsPageContent.eyebrow}
              </p>
              <h1 className="title-display max-w-3xl text-fund-ink">
                {resultsPageContent.title}
              </h1>
              <p className="lead max-w-3xl text-fund-muted">
                {resultsPageContent.description}
              </p>
            </div>

            <div className="lg:justify-self-end">
              <Link
                to="/#goals"
                className="button-pill button-pill-secondary"
              >
                Вернуться к блоку целей
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="mt-[var(--stack-lg)] grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {resultsPageContent.metrics.map((metric) => (
              <article
                key={metric.label}
                className="surface-card-soft card-pad"
              >
                <div className="metric-value text-fund-ink">
                  {metric.value}
                </div>
                <p className="metric-label mt-2">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="surface-panel card-pad-lg">
            <p className="eyebrow text-fund-muted">
              Диаграмма 01
            </p>
            <h2 className="title-card mt-[var(--stack-sm)] text-fund-ink">
              Распределение поддержки по направлениям
            </h2>
            <p className="body-copy mt-[var(--stack-sm)] max-w-2xl text-fund-muted">
              Этот блок показывает, как фонд распределяет ресурсы между школьной средой,
              оборудованием, программами и событиями сообщества.
            </p>

            <div className="mt-[var(--stack-lg)] overflow-hidden rounded-full bg-fund-surface-muted">
              <div className="flex h-5 w-full">
                {resultsPageContent.distribution.map((item) => (
                  <div
                    key={item.label}
                    className="h-full"
                    style={{
                      width: `${Math.round((item.value / totalDistribution) * 100)}%`,
                      backgroundColor: item.color,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-[var(--stack-lg)] space-y-4">
              {resultsPageContent.distribution.map((item) => (
                <div
                  key={item.label}
                  className="surface-card-soft card-pad grid gap-3 sm:grid-cols-[auto_1fr_auto]"
                >
                  <span
                    className="mt-1 h-3 w-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>
                    <div className="font-medium text-fund-ink">{item.label}</div>
                    <div className="meta-text mt-1 text-fund-muted">{item.amount}</div>
                  </div>
                  <div className="meta-text font-medium text-fund-accent">
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="surface-panel card-pad-lg">
            <p className="eyebrow text-fund-muted">
              Диаграмма 02
            </p>
            <h2 className="title-card mt-[var(--stack-sm)] text-fund-ink">
              Охват программ и среды
            </h2>
            <p className="body-copy mt-[var(--stack-sm)] text-fund-muted">
              Шаблон второго графика показывает, как будут сравниваться фактические
              результаты по ключевым направлениям с плановыми ориентирами года.
            </p>

            <div className="mt-[var(--stack-lg)] space-y-5">
              {resultsPageContent.reach.map((item) => (
                <div key={item.label}>
                  <div className="meta-text mb-2 flex items-center justify-between gap-4">
                    <span className="font-medium text-fund-ink">{item.label}</span>
                    <span className="text-fund-muted">
                      {item.value} {item.suffix}
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-fund-surface-muted">
                    <div
                      className="h-full rounded-full bg-fund-accent"
                      style={{ width: getReachWidth(item.value, item.max) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {resultsPageContent.highlights.map((item) => (
            <article
              key={item.title}
              className="surface-card card-pad"
            >
              <p className="eyebrow text-fund-muted">
                Итог
              </p>
              <h2 className="title-card mt-[var(--stack-sm)] text-fund-ink">
                {item.title}
              </h2>
              <p className="body-copy mt-[var(--stack-sm)] text-fund-muted">
                {item.text}
              </p>
            </article>
          ))}
        </section>

        <section className="surface-panel card-pad-lg">
          <p className="eyebrow text-fund-muted">
            Текстовые итоги
          </p>
          <div className="mt-[var(--stack-md)] grid gap-6 lg:grid-cols-3">
            {resultsPageContent.notes.map((item) => (
              <article
                key={item.title}
                className="surface-card-soft card-pad"
              >
                <h2 className="title-card text-fund-ink">
                  {item.title}
                </h2>
                <p className="body-copy mt-[var(--stack-sm)] text-fund-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
