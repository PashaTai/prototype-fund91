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
      <div className="avatar-frame">
        <ImageWithFallback
          src={image}
          alt={name}
          className={`h-full w-full object-cover ${avatarClass ?? ""}`}
        />
      </div>
    );
  }

  return (
    <div className="avatar-frame flex items-center justify-center">
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
                className="surface-card-inverse card-pad flex h-full flex-col backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <TestimonialAvatar
                    name={item.name}
                    image={item.image}
                    avatarMode={item.avatarMode}
                    avatarClass={item.avatarClass}
                  />
                  <div className="min-w-0">
                    <div className="detail-title text-white">
                      {item.name}
                    </div>
                    <div className="meta-text mt-1 text-white/72">
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
