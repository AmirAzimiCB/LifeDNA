import {
  HeroSection,
  LifeDnaReportsFilter,
} from "@/components/organism/reports";

export function Reports() {
  return (
    <div className="flex flex-col gap-[92px] pb-16">
      <HeroSection />
      <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-16">
        <LifeDnaReportsFilter />
      </div>
    </div>
  );
}
