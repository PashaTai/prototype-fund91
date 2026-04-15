import { Link } from "react-router";

const legalName = "Фонд поддержки и содействия развитию образовательной, научной, просветительской деятельности ГБОУ Школа № 91 и инициатив учеников «Фонд 91»";

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
              <p>
                Полное наименование фонда — {legalName}. Регистрационные данные фонда:
                ИНН / КПП 9714082742 / 771401001, ОГРН 1257700467232, дата регистрации —
                23 октября 2025 года, президент фонда — Сушко Станислав Львович.
              </p>
            </div>
          </div>

          <div className="grid gap-5 self-start sm:grid-cols-2">
            <div className="surface-panel card-pad-lg stack-sm sm:col-span-2">
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

            <div className="surface-card-accent card-pad stack-sm">
              <h3 className="title-card text-white">Прозрачность</h3>
              <p className="body-copy text-white/72">
                Фонд публикует финансовые отчёты и сохраняет прямую связь между
                пожертвованием, действием и видимым результатом для школы.
              </p>
            </div>

            <div className="surface-card-soft card-pad stack-sm shadow-[0_18px_55px_rgba(31,50,71,0.08)]">
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
          <div className="surface-card card-pad text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="metric-value text-fund-accent">20+</div>
            <div className="metric-label mt-1">проектов</div>
          </div>
          <div className="surface-card card-pad text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="metric-value text-fund-accent">500+</div>
            <div className="metric-label mt-1">благотворителей</div>
          </div>
          <div className="surface-card card-pad text-center shadow-[0_14px_40px_rgba(31,50,71,0.07)]">
            <div className="metric-value text-fund-accent">20М+</div>
            <div className="metric-label mt-1">рублей собрано</div>
          </div>
        </div>

        <div className="mt-[var(--stack-lg)] flex justify-center">
          <Link
            to="/results"
            className="button-pill button-pill-primary"
          >
            Подробнее о результатах
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
