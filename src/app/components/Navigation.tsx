import { Link } from "react-router";
import logoMark from "../../imports/91_cdr4_1_2000_1_150_1_[Vectorized].svg";

const sectionLinks = [
  { label: "Проекты", to: "/#projects" },
  { label: "Результат", to: "/results" },
  { label: "Цели", to: "/#goals" },
  { label: "О фонде", to: "/#about" },
  { label: "Контакты", to: "/#contacts" },
];

const docsLinks = [
  { label: "Оплата", to: "/offer" },
  { label: "Устав", to: "/charter" },
];

export function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-fund-line bg-white/82 backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="surface-card-soft flex h-12 w-12 shrink-0 items-center justify-center">
              <img
                src={logoMark}
                alt="Фонд Школы 91"
                className="h-8 w-8 object-contain"
              />
            </span>

            <span className="min-w-0">
              <span className="eyebrow block text-fund-muted">
                Сообщество и развитие школы
              </span>
              <span className="brand-name block truncate text-fund-ink">
                Фонд Школы 91
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {sectionLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}

            {docsLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/#donate"
            className="button-pill button-pill-primary hidden sm:inline-flex"
          >
            Поддержать
          </Link>
        </div>

        <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-4 lg:hidden">
          {sectionLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          {docsLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="nav-link whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/#donate"
            className="nav-link whitespace-nowrap text-fund-accent"
          >
            Поддержать
          </Link>
        </div>
      </div>
    </nav>
  );
}
