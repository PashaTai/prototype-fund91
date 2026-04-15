import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ImpactSection } from "../components/ImpactSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { AboutSection } from "../components/AboutSection";
import { PhotoGallery } from "../components/PhotoGallery";
import { CTASection } from "../components/CTASection";

export function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <ImpactSection />
      <TestimonialsSection />
      <AboutSection />
      <PhotoGallery />
      <CTASection />
    </div>
  );
}
