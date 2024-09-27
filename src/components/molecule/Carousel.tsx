"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { slides } from "@/constants";
import { Text, Title } from "../atoms";

// Custom horizontal scrolling component
export const Carousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle dragging start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  // Handle dragging move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Speed up scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle dragging end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const newScrollAmount = scrollAmount - 300;
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
      setScrollAmount(newScrollAmount);
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const newScrollAmount = scrollAmount + 300;
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
      setScrollAmount(newScrollAmount);
    }
  };

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto max-lg:no-scrollbar gap-4 cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[254px] pl-1 pb-4 max-lg:w-[318px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="bg-[#FBFBFB] rounded-[16px] p-6 min-h-[245px] lg:min-h-[326px] flex flex-col justify-between shadow-lg">
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
