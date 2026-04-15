import { ImageWithFallback } from "./ImageWithFallback";
import { fundTestimonials } from "../content/siteContent";

function TestimonialAvatar({
  name,
  image,
  avatarMode,
  avatarClass,
}: {
  name: string;
  image: string | null;
  avatarMode: "photo" | "icon";
  avatarClass?: string;
}) {
  if (avatarMode === "photo" && image) {
    return (
      <div className="h-16 w-16 overflow-hidden rounded-full border border-white/25 bg-white/12 shadow-[0_10px_24px_rgba(7,11,112,0.18)]">
        <ImageWithFallback
          src={image}
          alt={name}
          className={`h-full w-full object-cover ${avatarClass ?? ""}`}
        />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/12 shadow-[0_10px_24px_rgba(7,11,112,0.18)]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-8 w-8 text-white/90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21a7 7 0 0 0-14 0" />
        <circle cx="12" cy="8" r="4" />
      </svg>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-space bg-fund-accent text-white">
      <div className="page-shell">
        <div className="stack-lg">
          <div className="stack-md mx-auto max-w-2xl text-center">
            <h2 className="title-section text-white">
              Слово о фонде
            </h2>
            <p className="lead text-white/78">
              Мнения тех, кто делает нашу школу лучше
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {fundTestimonials.map((item) => (
              <article
                key={item.name}
                className="card-pad flex h-full flex-col rounded-[1.6rem] border border-white/14 bg-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <TestimonialAvatar
                    name={item.name}
                    image={item.image}
                    avatarMode={item.avatarMode}
                    avatarClass={item.avatarClass}
                  />
                  <div className="min-w-0">
                    <div className="text-lg font-semibold leading-tight text-white">
                      {item.name}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/72">
                      {item.role}
                    </div>
                  </div>
                </div>

                <p className="body-copy mt-[var(--stack-md)] text-white/92">
                  «{item.text}»
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
