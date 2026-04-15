const legalName = "Фонд поддержки и содействия развитию образовательной, научной, просветительской деятельности ГБОУ Школа № 91 и инициатив учеников «Фонд 91»";

function FooterField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="space-y-1">
      <div className="eyebrow text-white/48">
        {label}
      </div>
      <div className="meta-text text-white/88">
        {value}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-fund-deep text-white">
      <div className="page-shell section-space-tight">
        <div className="grid gap-12 xl:grid-cols-[0.95fr_1.35fr] xl:items-start">
          <div className="stack-md max-w-xl">
            <p className="eyebrow text-white/55">Фонд 91</p>
            <h2 className="title-section text-white">
              Контакты и реквизиты фонда
            </h2>
            <p className="body-copy text-white/74">
              {legalName}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="mailto:info@fund91.org" className="button-pill button-pill-inverse">
                info@fund91.org
              </a>
              <a href="tel:+79161044210" className="button-pill button-pill-inverse">
                +7 916 10 44 210
              </a>
            </div>
          </div>

          <div className="surface-card-inverse p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <section className="stack-md">
                <h3 className="detail-title text-white">Основные сведения</h3>
                <div className="grid gap-4">
                  <FooterField label="Полное наименование" value={legalName} />
                  <FooterField label="Сокращённое" value="Фонд 91" />
                  <FooterField label="Президент" value="Сушко Станислав Львович" />
                </div>
              </section>

              <section className="stack-md">
                <h3 className="detail-title text-white">Регистрационные данные</h3>
                <div className="grid gap-4">
                  <FooterField label="ОГРН" value="1257700467232" />
                  <FooterField label="ИНН / КПП" value="9714082742 / 771401001" />
                  <FooterField label="Дата регистрации" value="23 октября 2025 г." />
                  <FooterField
                    label="Юридический адрес"
                    value="125040, г. Москва, вн.тер.г. муниципальный округ Беговой, ул. Скаковая, д. 34, к. 2, кв. 55"
                  />
                </div>
              </section>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="detail-title mb-5 text-white">Банковские реквизиты</div>
              <div className="grid gap-4 md:grid-cols-2">
                <FooterField label="Расчётный счёт" value="40703 810 3 0262 0000 328" />
                <FooterField label="Банк" value="АО «АЛЬФА-БАНК»" />
                <FooterField label="БИК" value="044525593" />
                <FooterField label="Корреспондентский счёт" value="30101 810 2 0000 0000 593" />
                <FooterField label="Подразделение" value="ОКЦ № 1 ГУ Банка России по ЦФО" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Благотворительный фонд «Фонд 91»</p>
          <p>ИНН 9714082742 · ОГРН 1257700467232</p>
        </div>
      </div>
    </footer>
  );
}
