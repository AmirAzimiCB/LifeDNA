import {
  HeroSection,
  HowItWorksInThreeSteps,
  LatestGeneticResearch,
} from "@/components/organism/how-it-works";

export function HowItWorks() {
  return (
    <section className="p-6 pb-16 lg:p-16 max-w-[1440px] mx-auto flex flex-col gap-8 lg:gap-[52px]">
      <HeroSection />
      <HowItWorksInThreeSteps />
      <LatestGeneticResearch />
    </section>
  );
}
