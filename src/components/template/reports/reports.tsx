import {
  HeroSection,
  LifeDnaReportsFilter,
} from "@/components/organism/reports";

export function Reports({ queryParam }: { queryParam: string }) {
  return (
    <div className="flex flex-col gap-[42px] lg:gap-[92px] pb-16">
      <HeroSection />
      <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
        <LifeDnaReportsFilter queryParam={queryParam} />
      </div>
    </div>
  );
}
