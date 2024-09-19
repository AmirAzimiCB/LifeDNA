"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { BetterWellnessCard } from "@/components/molecule";
import { RoadMap } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BetterWellnessSection({
  RoadMapData,
}: {
  RoadMapData: RoadMap[];
}) {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-8 lg:px-16 h-full">
      <Slider ref={sliderRef} {...sliderSettings} className="w-full h-full ">
        {RoadMapData.map((roadMap, index) => (
          <div key={index} className="">
            <BetterWellnessCard
              buttonText={roadMap.buttonText}
              title={roadMap.title}
              description={roadMap.description}
              href={roadMap.href}
              icon={roadMap.icon}
              items={roadMap.items}
              className="min-h-[431px]"
            />
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 flex justify-between items-center top-1/2 transform -translate-y-1/2 px-4">
        <button onClick={handlePrev}>
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button onClick={handleNext}>
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
