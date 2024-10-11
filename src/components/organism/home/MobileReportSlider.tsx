"use client";

import { ReportsData } from "@/constants";
import { ReportCards } from "./ReportCards";

export function MobileReportSlider() {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
      {[...ReportsData].reverse().map((report, index) => (
        <ReportCards card={report} key={index} />
      ))}
    </div>
  );
}
