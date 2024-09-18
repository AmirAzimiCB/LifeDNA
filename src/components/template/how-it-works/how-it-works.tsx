import {
  HeroSection,
  HowItWorksInThreeSteps,
  LatestGeneticResearch,
} from "@/components/organism/how-it-works";

export function HowItWorks() {
  return (
    <section className="py-8 lg:py-16 max-w-[1440px] mx-auto px-4 lg:px-16 flex flex-col gap-[52px]">
      <HeroSection />
      <HowItWorksInThreeSteps />
      <LatestGeneticResearch />
    </section>
  );
}
