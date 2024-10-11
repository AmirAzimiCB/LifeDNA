"use client";

import { useState } from "react";
import { Title, Text } from "@/components/atoms";
import { TestimonialsData } from "@/constants";
import Image from "next/image";
import { testimonialBG } from "../../../../public/icons";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full h-[360px] lg:h-[437px] transition-all duration-500 ease-in-out relative flex flex-col gap-4 lg:gap-8 z-20 p-6 lg:py-[90px] ">
      <Image
        src={testimonialBG}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="testimonialBg"
        className="w-full h-full -z-50"
      />
      <div className="bg-[#07606EA6] absolute inset-0 -z-10"></div>
      <Title className="text-center text-white">
        What Our Users Are Saying: Real Stories, Real Transformations
      </Title>

      {/* Display the current testimonial */}
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="flex items-center justify-between gap-4">
          <button onClick={handlePrev} className="lg:hidden">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <Text
            variant="small"
            className="max-w-[770px] mx-auto text-center text-white"
          >
            “{TestimonialsData[currentIndex].message}”
          </Text>
          <button onClick={handleNext} className="lg:hidden">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Display the star rating */}
        <div className="flex items-center justify-center gap-0">
          {Array.from({ length: TestimonialsData[currentIndex].rating }).map(
            (star, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.32489 18.923L8.56489 13.61L4.44189 10.038L9.87289 9.56801L11.9999 4.55701L14.1269 9.56701L19.5569 10.037L15.4339 13.609L16.6749 18.922L11.9999 16.102L7.32489 18.923Z"
                  fill="white"
                />
              </svg>
            )
          )}
        </div>
        <Text className="text-center italic text-white">
          – {TestimonialsData[currentIndex].name}
        </Text>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden lg:flex items-center justify-center gap-8 -mt-2 z-20">
        <button onClick={handlePrev} className="p-2">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={handleNext} className="p-2">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}
