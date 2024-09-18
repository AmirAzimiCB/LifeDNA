"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { slides } from "@/constants";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1028,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 918,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
  appendDots: (dots: React.ReactNode[]) => {
    // Filter out any null or undefined dots
    const validDots = dots.filter(
      (dot): dot is React.ReactElement => dot !== null && dot !== undefined
    );
    const activeDots = validDots.filter((dot) =>
      dot.props.className.includes("slick-active")
    );
    const progressWidth = (activeDots.length / validDots.length) * 100;

    return (
      <div>
        <ul style={{ margin: "0px" }}> {validDots} </ul>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progressWidth}%`,
              backgroundColor: "#383B42",
            }}
          ></div>
        </div>
      </div>
    );
  },
  customPaging: () => <div className="dot"></div>,
};

// Slider component
export const Carousel: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    } else {
      console.error("Slider ref is not set");
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    } else {
      console.error("Slider ref is not set");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative slider-container">
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        className="flex items-center gap-4"
      >
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#FBFBFB] rounded-[16px] p-6 min-h-[326px] flex flex-col justify-between shadow-lg">
              <div className="flex items-start">
                <div className="text-white p-1 rounded-full">
                  <Image
                    src={slide.icon}
                    alt={slide.title}
                    width={32}
                    height={32}
                  />
                </div>
              </div>
              <div className="text-left mt-auto">
                <h4 className="text-sm font-semibold text-14px">
                  {slide.title}
                </h4>
                <p className="text-sm text-14px">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Previous and Next buttons */}
      <div
        className="absolute inset-x-0 flex justify-center mt-2"
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
