import { Text } from "@/components/atoms";
import { HeroSection, PlanCards } from "@/components/organism/plans";

export function Plans() {
  return (
    <section className="pb-16 flex flex-col ">
      <HeroSection />
      <div className="w-full mx-auto max-w-[1440px] px-8 lg:px-16 flex flex-col gap-16 max-lg:mt-[96px]">
        <PlanCards />
        <Text>
          *Our reports have not been evaluated by the Food and Drug
          Administration. The contents on our website and our reports are for
          informational purposes only, and are not intended to diagnose any
          medical condition, replace the advice of a healthcare professional, or
          provide any medical advice, diagnosis, or treatment. Consult with a
          healthcare professional before making any major lifestyle changes or
          if you have any other concerns about your results. The testimonials
          featured may have used more than one LifeDNA or LifeDNA vendors’
          product or reports. 
        </Text>
      </div>
    </section>
  );
}
