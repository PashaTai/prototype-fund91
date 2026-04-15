import { Link } from "react-router";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="stack-md lg:pt-1">
            <h2 className="title-section text-fund-ink">
              О фонде
            </h2>
            <div className="stack-sm text-fund-muted">
              <p>
                Благотворительный фонд Школы 91 был создан в 2020 году выпускниками и родителями
                с целью поддержки и развития образовательной среды школы.
              </p>
              <p>
                За это время мы реализовали более 15 крупных проектов на общую сумму более
                20 миллионов рублей. Каждый проект — это результат совместных усилий родителей,
                выпускников, учителей и администрации школы.
              </p>
              <p>
                Мы работаем полностью прозрачно: все финансовые отчёты публикуются на нашем сайте,
                а каждый благотворитель может увидеть, как используются средства.
              </p>
              <p>
                Наша миссия — создать условия, в которых каждый ученик сможет раскрыть свой
                потенциал и получить качественное современное образование.
              </p>
            </div>
          </div>

          <div className="grid gap-5 self-start sm:grid-cols-2">
            <div className="card-pad-lg stack-sm rounded-[1.85rem] border border-fund-line bg-white/82 shadow-[0_18px_60px_rgba(31,50,71,0.08)] sm:col-span-2">
              <p className="eyebrow text-fund-muted">
                Подход фонда
              </p>
              <h3 className="title-card text-fund-ink">
                Поддержка, которую можно увидеть в жизни школы
              </h3>
              <p className="body-copy text-fund-muted">
                Фонд помогает переводить энергию школьного сообщества в конкретные улучшения:
                от пространств и оборудования до мероприятий и новых форматов обучения.
              </p>
            </div>

            <div className="card-pad stack-sm rounded-[1.75rem] bg-fund-deep text-white shadow-[0_22px_70px_rgba(23,37,53,0.18)]">
              <h3 className="title-card text-white">Прозрачность</h3>
              <p className="body-copy text-white/72">
                Финансовые отчёты и приоритеты фонда должны быть понятны каждому участнику
                сообщества.
              </p>
            </div>

            <div className="card-pad stack-sm rounded-[1.75rem] border border-fund-line bg-fund-surface shadow-[0_18px_55px_rgba(31,50,71,0.08)]">
              <h3 className="title-card text-fund-ink">
                Сообщество
              </h3>
              <p className="body-copy text-fund-muted">
                Важен не только сам объём поддержки, но и то, как она укрепляет связи между
                школой, семьями и выпускниками.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="card-pad rounded-[1.4rem] border border-fund-line bg-white/75 text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="font-serif text-3xl font-semibold text-fund-accent">20+</div>
            <div className="mt-1 text-sm text-fund-muted">проектов</div>
          </div>
          <div className="card-pad rounded-[1.4rem] border border-fund-line bg-white/75 text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="font-serif text-3xl font-semibold text-fund-accent">500+</div>
            <div className="mt-1 text-sm text-fund-muted">благотворителей</div>
          </div>
          <div className="card-pad rounded-[1.4rem] border border-fund-line bg-white/75 text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="font-serif text-3xl font-semibold text-fund-accent">20М+</div>
            <div className="mt-1 text-sm text-fund-muted">рублей собрано</div>
          </div>
        </div>

        <div className="mt-[var(--stack-lg)] flex justify-center">
          <Link
            to="/results"
            className="inline-flex items-center gap-3 rounded-full bg-fund-accent px-6 py-3 text-sm font-medium text-white shadow-[0_16px_34px_rgba(5,7,176,0.22)] transition hover:bg-fund-accent-strong"
          >
            Подробнее о результатах
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
