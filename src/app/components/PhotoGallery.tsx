import { ImageWithFallback } from "./ImageWithFallback";
import { useRef, useState } from "react";
import { galleryItems } from "../content/siteContent";

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const nextIndex = (index + galleryItems.length) % galleryItems.length;
    container.scrollTo({
      left: container.clientWidth * nextIndex,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="mb-[var(--stack-lg)] flex flex-col gap-[var(--stack-lg)] md:flex-row md:items-end md:justify-between">
          <div className="stack-md">
            <p className="eyebrow text-fund-muted">
              Галерея
            </p>
            <h2 className="title-section text-fund-ink">
              Проекты и события в широком формате
            </h2>
            <p className="lead max-w-3xl text-fund-muted">
              Галерея показывает, как инициативы фонда выглядят в реальной жизни школы:
              от новых пространств до ежедневного учебного процесса и общих событий.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scrollToSlide(activeIndex - 1)}
              className="icon-button"
              aria-label="Предыдущий слайд"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollToSlide(activeIndex + 1)}
              className="icon-button"
              aria-label="Следующий слайд"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="min-w-full snap-start"
            >
              <div className="page-shell surface-panel overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[38rem]"
                  />
                  <div className="card-pad-lg absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172739]/88 via-[#172739]/45 to-transparent">
                    <span className="badge-chip badge-chip-inverse">
                      {item.type}
                    </span>
                    <h3 className="title-card mt-[var(--stack-md)] max-w-3xl text-white">
                      {item.title}
                    </h3>
                    <p className="body-copy mt-[var(--stack-sm)] max-w-3xl text-white/78">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
