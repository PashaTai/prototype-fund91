import { DonationForm } from "./DonationForm";
import { ImageWithFallback } from "./ImageWithFallback";
import schoolHeroImage from "../../assets/uploads/school-hero-new.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src={schoolHeroImage}
          alt="Школа 91"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.36)_34%,rgba(0,0,0,0.16)_68%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-black/12" />
      </div>

      <div className="page-shell relative flex min-h-[100svh] items-center pb-[var(--section-space)] pt-[var(--page-offset-top)]">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_430px] lg:items-center lg:gap-12">
          <div className="stack-md max-w-3xl text-white">
            <h1 className="title-display text-white">
              Вместе создаём
              <br />
              <span className="italic text-white">
                будущее
              </span>
            </h1>

            <p className="lead max-w-2xl text-white">
              Благотворительный фонд Школы 91 помогает создавать лучшую образовательную
              среду для наших детей. Ваша поддержка делает это возможным.
            </p>
          </div>

          <div className="surface-panel card-pad-lg border-white/18 bg-white/94 backdrop-blur-md">
            <DonationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
