"use client";
import { Card, Title, Text } from "@/components/atoms";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Reports } from "@/types";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export function ReportCards({ card }: { card: Reports }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const onToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const first = card.id === 1;
  const second = card.id === 2;
  const third = card.id === 3;
  return (
    <>
      <Card
        variant="default"
        className={cn(
          "w-full flex flex-col justify-between overflow-hidden p-0 transition-all duration-500 ease-in-out border-[1.5px]",
          isExpanded ? "h-fit" : "h-fit min-h-[480px]",
          first && "border-[#41c752]",
          second && "border-[#00a084]",
          third && "border-[#07606e]"
        )}
      >
        <div className="flex flex-col gap-6 lg:gap-8 h-full mb-6 lg:mb-8">
          <div
            className={cn(
              "w-full flex flex-col gap-2 p-5 items-center justify-center",
              first && "bg-[#41c752]",
              second && "bg-[#00a084]",
              third && "bg-[#07606e]"
            )}
          >
            <div className={cn("flex justify-between gap-4")}>
              <Title
                variant="medium"
                className="font-bold text-base leading-[19.2px] tracking-tighter text-center text-white"
              >
                {card.title}
              </Title>
            </div>
            <div className="flex justify-between gap-4">
              <Text
                variant="small"
                className="font-semibold text-sm text-center text-white"
              >
                {card.kitIncluded}
              </Text>
            </div>
          </div>

          <Title className="leading-[28.8px] px-6 text-[32px] font-bold text-center">
            {card.price}
          </Title>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="373"
            height="2"
            viewBox="0 0 373 2"
            fill="none"
            className="mx-auto text-center w-full"
          >
            <path d="M0 1L373 1.00003" stroke="#A5A5A5" />
          </svg>

          <Text className="lg:min-h-[116px] line-clamp-6 px-6">
            {card.description}
          </Text>
          <div className="flex flex-col gap-8 transition-all duration-500 ease-in-out px-6">
            <div
              onClick={onToggleExpand}
              className="flex items-center justify-between gap-4 w-full cursor-pointer"
            >
              <Text className="font-semibold">See what’s included</Text>
              <ChevronUp className={cn(isExpanded ? "" : "rotate-180")} />
            </div>
            {isExpanded && (
              <>
                {first ? (
                  <div className="flex flex-col gap-[22px] transition-all duration-500 ease-in-out">
                    {card.listItems.map((item, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center gap-3",
                          index !== 0 && " pl-6"
                        )}
                      >
                        <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0"></div>

                        <Text variant="smaller" className="font-semibold">
                          {item}
                        </Text>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-[22px] transition-all duration-500 ease-in-out pl-2">
                    {card.listItems.map((item, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0"></div>
                        <Text
                          variant="smaller"
                          className="font-semibold"
                          key={index}
                        >
                          {item}
                        </Text>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {isExpanded && (
            <>
              {card.image && (
                <div className="mt-2 px-6">
                  <Image
                    width={1200}
                    height={1000}
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              )}
            </>
          )}
        </div>
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 pb-6"
        >
          <Button
            className={cn(
              first && "bg-[#41c752]",
              second && "bg-[#00a084]",
              third && "bg-[#07606e]"
            )}
          >
            {third ? "Get My DNA Test Now" : "Get My Report Now "}
          </Button>
        </a>
        {card.popular ? (
          <div className="flex items-center justify-center gap-2 p-5 text-white bg-[#07606e] w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.49518 4.89328L1.24184 5.50995L1.16651 5.52528C1.05247 5.55556 0.948507 5.61555 0.865239 5.69915C0.78197 5.78274 0.72238 5.88694 0.692552 6.0011C0.662724 6.11526 0.663729 6.23529 0.695462 6.34893C0.727196 6.46257 0.788522 6.56576 0.873177 6.64795L3.95451 9.64728L3.22784 13.8839L3.21918 13.9573C3.2122 14.0752 3.23669 14.1929 3.29014 14.2983C3.3436 14.4037 3.4241 14.4929 3.5234 14.557C3.6227 14.621 3.73724 14.6575 3.85528 14.6627C3.97332 14.6679 4.09062 14.6416 4.19518 14.5866L7.99918 12.5866L11.7945 14.5866L11.8612 14.6173C11.9712 14.6606 12.0908 14.6739 12.2077 14.6558C12.3246 14.6377 12.4345 14.5888 12.5262 14.5141C12.618 14.4395 12.6882 14.3418 12.7297 14.231C12.7713 14.1203 12.7826 14.0005 12.7625 13.8839L12.0352 9.64728L15.1178 6.64728L15.1698 6.59062C15.2441 6.49913 15.2928 6.38958 15.311 6.27315C15.3292 6.15671 15.3161 6.03753 15.2732 5.92777C15.2303 5.818 15.1591 5.72157 15.0668 5.64829C14.9745 5.57501 14.8645 5.52751 14.7478 5.51062L10.4945 4.89328L8.59318 1.03995C8.53816 0.928305 8.45299 0.834292 8.3473 0.768551C8.24162 0.702811 8.11964 0.667969 7.99518 0.667969C7.87071 0.667969 7.74874 0.702811 7.64305 0.768551C7.53737 0.834292 7.45219 0.928305 7.39718 1.03995L5.49518 4.89328Z"
                fill="white"
              />
            </svg>{" "}
            Most Popular
          </div>
        ) : null}
      </Card>
    </>
  );
}
