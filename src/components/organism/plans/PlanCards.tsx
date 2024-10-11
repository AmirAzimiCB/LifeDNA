"use client";
import { ReportsData } from "@/constants";
import { PlanMobileSlider } from "./PlanMobileSlider";
import { ReportCards } from "../home";
import { Reports } from "@/types";

export function PlanCards() {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full max-lg:hidden">
        {ReportsData.map((data, index) => (
          <ReportCards key={index} card={data as Reports} />
        ))}
      </div>
      <div className="lg:hidden">
        <PlanMobileSlider />
      </div>
    </>
  );
}
