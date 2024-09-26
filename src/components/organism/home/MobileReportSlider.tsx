"use client";

import { Slider } from "@/components/molecule";
import { ReportsData } from "@/constants";
import { MobileReportCard } from "./MobileReportCard";

export function MobileReportSlider() {
  return (
    <div className="w-full">
      <Slider
        items={ReportsData}
        renderItem={(report) => <MobileReportCard report={report} />}
      />
    </div>
  );
}
