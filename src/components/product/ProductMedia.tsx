"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductMedia = ({ media, alt = "product image" }) => {
  const [emblaRef, emblaMainApi] = useEmblaCarousel({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);
  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  useEffect(() => {
    const selectedThumb = document.getElementById(`thumb-${selectedIndex}`);
    if (selectedThumb) {
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  if (!media.length) return null;
  return (
    <div className="lg:aspect-square overflow-hidden flex lg:flex-row flex-col-reverse gap-4 lg:py-10 py-5 lg:border-b-[0.75px] border-[#CACACA] col-start-1 col-span-1 row-start-1 row-span-1 lg:mr-8">
      <div className="relative lg:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        <div className="flex lg:items-center lg:flex-col flex-row lg:gap-4 gap-2 lg:w-[68px] w-[85%] mx-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
          {media.map((image, index) => (
            <button
              id={`thumb-${index}`}
              key={`product-image-${index}`}
              onClick={() => emblaMainApi?.scrollTo(index)}
              className={cn(
                "lg:w-16 w-16 lg:h-16 h-16 relative bg-[#edf2f7] rounded-md hover:ring-2 hover:ring-[#edf2f7] lg:snap-start flex-shrink-0 overflow-hidden",
                index === selectedIndex && "border-2 border-[#CACACA]"
              )}
            >
              <Image
                fill
                className="object-cover"
                alt={image.altText || alt}
                src={image.url || "/placeholder.svg"}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </button>
          ))}
        </div>
        {media.length > 1 && (
          <>
            <button
              type="button"
              title="Previous image"
              onClick={() => emblaMainApi?.scrollPrev()}
              className="flex lg:hidden items-center justify-center absolute top-[50%] translate-y-[-50%] left-0 md:w-10 w-8 md:h-10 h-8 z-[9999]"
            >
              <ChevronLeft className="md:w-6 w-5 text-[#383B42]" />
            </button>
            <button
              type="button"
              title="Next image"
              onClick={() => emblaMainApi?.scrollNext()}
              className="flex lg:hidden items-center justify-center absolute top-[50%] translate-y-[-50%] right-0 md:w-10 w-8 md:h-10 h-8 z-[9999]"
            >
              <ChevronRight className="md:w-6 w-5 text-[#383B42]" />
            </button>
          </>
        )}
      </div>

      <div className="overflow-hidden relative flex-1" ref={emblaRef}>
        <div className="flex -ml-4">
          {media.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
              <div className="flex relative aspect-square rounded-md overflow-hidden lg:border-none border border-[#CACACA]">
                <Image
                  fill
                  className="object-cover"
                  alt={image.altText || alt}
                  key={`product-image-${index}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={image.url || "/placeholder.svg"}
                />
              </div>
            </div>
          ))}
        </div>
        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => emblaMainApi?.scrollPrev()}
              title="Previous image"
              className="group/btn lg:flex hidden items-center justify-center absolute top-[50%] translate-y-[-50%] left-1 md:w-10 w-8 md:h-10 h-8 z-[9999]"
            >
              <ChevronLeft className="md:w-6 w-5 text-[#383B42]" />
            </button>
            <button
              type="button"
              title="Next image"
              onClick={() => emblaMainApi?.scrollNext()}
              className="group/btn lg:flex hidden items-center justify-center absolute top-[50%] translate-y-[-50%] right-1 md:w-10 w-8 md:h-10 h-8 z-[9999]"
            >
              <ChevronRight className="md:w-6 w-5 text-[#383B42]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductMedia;
