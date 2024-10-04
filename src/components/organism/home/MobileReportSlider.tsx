"use client";

import { Slider } from "@/components/molecule";
import { ReportsData } from "@/constants";
import { ReportCards } from "./ReportCards";

export function MobileReportSlider() {
  return (
    <div className="w-full">
      <Slider
        items={ReportsData}
        renderItem={(report) => <ReportCards card={report} />}
      />
    </div>
  );
}
