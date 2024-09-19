import { HeroSection, PlanCards } from "@/components/organism/plans";

export function Plans() {
  return (
    <section className="">
      <HeroSection />
      <div className="w-full mx-auto max-w-[1440px] px-8 lg:px-16">
        <PlanCards />
      </div>
    </section>
  );
}
