"use client";
import { Slider } from "@/components/molecule";

import { PlanMobileSliderCard } from "./PlanMobileSliderCard";
import { reportCards } from "@/constants";
import { useState } from "react";
export function PlanMobileSlider() {
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleExpand = (title: string) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  return (
    <div>
      <div className="w-full flex flex-col gap-8">
        <Slider
          items={reportCards}
          className="h-full min-h-[386px]"
          renderItem={(data) => (
            <PlanMobileSliderCard
              card={data}
              isExpanded={!!expandedCards[data.title]}
              onToggleExpand={() => handleToggleExpand(data.title)}
            />
          )}
        />
      </div>
    </div>
  );
}
