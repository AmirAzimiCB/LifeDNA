"use client";

import { ReportsData } from "@/constants";
import { ReportCards } from "../home";
import { Reports } from "@/types";
export function PlanMobileSlider() {
  return (
    <div>
      <div className="w-full grid grid-cols-1 gap-6">
        {[...ReportsData].reverse().map((report, index) => (
          <ReportCards card={report as Reports} key={index} />
        ))}
      </div>
    </div>
  );
}
