"use client";
import { Slider } from "@/components/molecule";
import { LifeDnaReportSliderCard } from "./LifeDnaReportSliderCard";

import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/Button";
type ReportsProps = {
  icon: string | StaticImageData;
  name: string;
};
export function LifeDnaReportsMobileSlider({ data }: { data: ReportsProps[] }) {
  return (
    <div>
      <div className="w-full flex flex-col gap-8">
        <Slider
          items={data}
          className="h-full min-h-[386px]"
          renderItem={(data) => <LifeDnaReportSliderCard data={data} />}
        />
        <Button className="">Yes, I want to transform my wellness!</Button>
      </div>
    </div>
  );
}
