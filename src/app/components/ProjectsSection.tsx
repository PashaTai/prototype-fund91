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
              className="surface-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(31,50,71,0.11)]"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="badge-chip badge-chip-light">
                    {project.tag}
                  </span>
                  <span className="badge-chip badge-chip-light tracking-normal normal-case">
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
