"use client";
import { ReportCard } from "@/components/molecule/plans";
import { reportCards } from "@/constants";
import { useState } from "react";
import { PlanMobileSlider } from "./PlanMobileSlider";

export function PlanCards() {
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  const handleToggleExpand = (index: number) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full max-lg:hidden">
        {reportCards.map((data, index) => (
          <ReportCard
            key={index}
            card={data}
            isExpanded={!!expandedCards[index]}
            onToggleExpand={() => handleToggleExpand(index)}
          />
        ))}
      </div>
      <div className="lg:hidden">
        <PlanMobileSlider
         
        />
      </div>
    </>
  );
}
