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
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 826,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 628,
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
    <div className="relative w-full max-w-[1440px] mx-auto px-8 lg:px-16 h-full border-none outline-none">
      <Slider ref={sliderRef} {...sliderSettings} className="">
        {RoadMapData.map((roadMap, index) => (
          <div key={index} className="">
            <BetterWellnessCard
              buttonText={roadMap.buttonText}
              title={roadMap.title}
              description={roadMap.description}
              href={roadMap.href}
              icon={roadMap.icon}
              items={roadMap.items}
              className="min-h-[431px] h-auto"
            />
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 flex justify-between items-center top-1/2 transform -translate-y-1/2 lg:px-7 ">
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
