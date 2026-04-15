import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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

          <div className="flex items-center gap-3">
            <Link
              to="/#donate"
              className="button-pill button-pill-primary hidden lg:inline-flex"
            >
              Поддержать
            </Link>

            <button
              type="button"
              className="icon-button lg:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="mobile-nav-scrim fixed inset-0 top-[5.4rem]"
            aria-label="Закрыть меню"
            onClick={() => setMenuOpen(false)}
          />

          <div className="page-shell relative">
            <div
              id="mobile-navigation"
              className="surface-panel card-pad relative mt-1 max-h-[calc(100svh-6.75rem)] overflow-y-auto"
            >
              <div className="stack-md">
                <div className="stack-sm">
                  <p className="eyebrow text-fund-muted">Навигация</p>
                  <div className="grid gap-3">
                    {sectionLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="mobile-nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="stack-sm border-t border-fund-line pt-4">
                  <p className="eyebrow text-fund-muted">Документы</p>
                  <div className="grid gap-3">
                    {docsLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="mobile-nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/#donate"
                  className="button-pill button-pill-primary w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Поддержать
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
