"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useRef, forwardRef, ForwardedRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "react-slick";
import Image from "next/image";

const ReactSlick = dynamic(() => import("react-slick"), { ssr: false });

const ForwardedReactSlick = forwardRef<ReactSlick, Settings>(
  (props, ref: ForwardedRef<ReactSlick>) => {
    return <ReactSlick {...props} ref={ref} />;
  }
);
ForwardedReactSlick.displayName = "ForwardedReactSlick";

const sliderSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  appendDots: (dots) => (
    <div>
      <ul style={{ margin: "0px" }}> {dots} </ul>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${
              (dots.filter((dot) =>
                dot.props.className.includes("slick-active")
              ).length /
                dots.length) *
              100
            }%`,
            backgroundColor: "#383B42",
          }}
        ></div>
      </div>
    </div>
  ),
  customPaging: () => <div className="dot"></div>,
};

const Slider = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sliderRef = useRef<ReactSlick | null>(null);

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative">
      <ForwardedReactSlick ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#FBFBFB] rounded-[16px] p-6 min-h-[400px] flex flex-col justify-between shadow-lg">
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
      </ForwardedReactSlick>
      <div
        className="absolute inset-x-0 flex justify-center mt-2"
        style={{ top: "calc(100% + 20px)" }}
      >
        <button onClick={handlePrev} className="p-2">
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button onClick={handleNext} className="p-2">
          <ChevronRight className="w-4 h-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const slides = [
  {
    icon: "/images/slider-icon-1.svg",
    title: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: "/images/slider-icon-1.svg",
    title: "Vitamins",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
  {
    icon: "/images/slider-icon-1.svg",
    title: "Wellness",
    description:
      "Lorem ipsum dolor sit amet consectetur. Turpis vestibulum dictum malesuada tortor.",
  },
];

export default Slider;
