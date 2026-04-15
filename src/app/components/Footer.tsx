export function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-fund-deep text-white">
      <div className="page-shell section-space-tight">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="stack-sm">
            <p className="eyebrow text-white/55">Контакты</p>
            <h3 className="title-card text-white">Связаться с фондом</h3>
            <a
              href="mailto:info@fund91.org"
              className="inline-flex text-[var(--text-body-lg)] text-white transition hover:text-[#c8ceff]"
            >
              info@fund91.org
            </a>
          </div>

          <div className="text-sm text-white/55">
            <p>© 2026 Благотворительный фонд «Школа 91»</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
