"use client";
import { Slider } from "@/components/molecule";

import { ReportsData } from "@/constants";
import { ReportCards } from "../home";
export function PlanMobileSlider() {
  return (
    <div>
      <div className="w-full flex flex-col gap-8">
        <Slider
          items={[...ReportsData].reverse()}
          renderItem={(data) => <ReportCards key={data.id} card={data} />}
        />
      </div>
    </div>
  );
}
