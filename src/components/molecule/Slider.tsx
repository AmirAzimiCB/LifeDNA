"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Pagination } from "swiper";
import { cn } from "@/lib/utils";

interface SwiperComponentProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export function Slider<T>({
  items,
  renderItem,
  className,
}: SwiperComponentProps<T>) {
  const swiperSettings = {
    modules: [Pagination],
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 10,
  };

  return (
    <div className={cn("relative", className)}>
      <Swiper {...swiperSettings}>
        {items.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full mb-10">
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
