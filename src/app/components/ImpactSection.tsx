import { impactItems } from "../content/siteContent";

export function ImpactSection() {
  return (
    <section id="goals" className="section-space">
      <div className="page-shell">
        <div className="mb-[var(--stack-lg)] max-w-3xl">
          <div className="stack-md">
            <p className="eyebrow text-fund-muted">
              Цели
            </p>
            <h2 className="title-section max-w-2xl text-fund-ink">
              Какие цели стоят перед фондом
            </h2>
            <p className="lead text-fund-muted">
              Фонд поддерживает четыре ключевых направления: развитие образовательной
              среды, таланты и инициативы, школьное сообщество и адресную помощь тем,
              кому она нужна.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {impactItems.map((item) => (
            <article
              key={item.number}
              className="surface-card card-pad-lg backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="title-card max-w-lg text-fund-ink">
                    {item.title}
                  </h3>
                </div>
                <span className="metric-value text-fund-accent">
                  {item.number}
                </span>
              </div>

              <p className="body-copy mt-[var(--stack-md)] max-w-xl text-fund-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
