import { ImageWithFallback } from "./ImageWithFallback";
import { featuredProjects } from "../content/siteContent";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-space">
      <div className="page-shell">
        <div className="stack-md mb-[var(--stack-lg)] text-center">
          <p className="eyebrow text-fund-muted">
            Проекты фонда
          </p>
          <h2 className="title-section text-fund-ink">
            Реализованные проекты
          </h2>
          <p className="lead mx-auto max-w-3xl text-fund-muted">
            Каждый проект помогает школе не точечно, а системно: меняет повседневную
            учебную среду, поддерживает практику и делает школьную жизнь богаче.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-[1.8rem] border border-fund-line bg-white/80 shadow-[0_18px_60px_rgba(31,50,71,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,50,71,0.11)]"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/70 bg-white/82 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fund-ink backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <span className="rounded-full border border-white/70 bg-white/82 px-3 py-1 text-xs font-medium text-fund-ink backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="card-pad">
                <h3 className="title-card text-fund-ink">
                  {project.title}
                </h3>
                <p className="body-copy mt-[var(--stack-sm)] text-fund-muted">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
