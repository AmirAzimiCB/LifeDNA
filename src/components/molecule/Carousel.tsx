"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { slides } from "@/constants";
import { Text, Title } from "../atoms";
import useEmblaCarousel from "embla-carousel-react";

// Custom horizontal scrolling component with Embla
export const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Embla Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full max-w-[318px] lg:max-w-[275px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="bg-[#FBFBFB] rounded-[16px] p-6 min-h-[345px] lg:min-h-[420px] flex flex-col justify-between shadow-lg">
                <div className="flex items-start">
                  <div className="text-white">
                    <Image
                      src={slide.icon}
                      alt={slide.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div className="text-left mt-auto flex flex-col gap-2">
                  <Title variant="smaller">{slide.title}</Title>
                  <Text variant="small">{slide.description}</Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous and Next buttons */}
      <div
        className="max-lg:hidden absolute inset-x-0 flex justify-center mt-2"
        style={{ top: "calc(100% + 20px)" }}
      >
        <button onClick={handlePrev} className="p-2">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button onClick={handleNext} className="p-2">
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};
