"use client";
import { Card, Text, Title } from "@/components/atoms";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

interface CardData {
  title: string;
  kitIncluded: string;
  popular?: boolean;
  price: string;
  description: string;
  listItems: string[];
  image?: string;
  href: string;
}

interface ReportCardProps {
  card: CardData;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  card,
  isExpanded,
  onToggleExpand,
}) => {
  return (
    <Card
      variant="default"
      className={cn(
        "w-full flex flex-col gap-8 justify-between py-8 px-6 transition-all duration-500 ease-in-out",
        isExpanded ? "h-full" : "h-fit"
      )}
    >
      <div className="flex flex-col gap-6 h-full">
        <div className="w-full flex flex-col gap-2">
          <Title
            variant="medium"
            className="font-bold leading-[19.2px] tracking-tight"
          >
            {card.title}
          </Title>
          <div className="flex justify-between gap-4">
            <Text variant="small" className="font-semibold">
              {card.kitIncluded}
            </Text>
            {card.popular && (
              <Text
                variant="small"
                className="font-semibold flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.49542 4.89328L1.24209 5.50995L1.16675 5.52528C1.05271 5.55556 0.948751 5.61555 0.865483 5.69915C0.782214 5.78274 0.722624 5.88694 0.692796 6.0011C0.662969 6.11526 0.663973 6.23529 0.695706 6.34893C0.72744 6.46257 0.788766 6.56576 0.873421 6.64795L3.95475 9.64728L3.22809 13.8839L3.21942 13.9573C3.21244 14.0752 3.23693 14.1929 3.29039 14.2983C3.34384 14.4037 3.42434 14.4929 3.52365 14.557C3.62295 14.621 3.73748 14.6575 3.85552 14.6627C3.97356 14.6679 4.09086 14.6416 4.19542 14.5866L7.99942 12.5866L11.7948 14.5866L11.8614 14.6173C11.9715 14.6606 12.0911 14.6739 12.2079 14.6558C12.3248 14.6377 12.4347 14.5888 12.5265 14.5141C12.6182 14.4395 12.6885 14.3418 12.73 14.231C12.7715 14.1203 12.7828 14.0005 12.7628 13.8839L12.0354 9.64728L15.1181 6.64728L15.1701 6.59062C15.2444 6.49913 15.2931 6.38958 15.3112 6.27315C15.3294 6.15671 15.3164 6.03753 15.2735 5.92777C15.2306 5.818 15.1594 5.72157 15.0671 5.64829C14.9748 5.57501 14.8647 5.52751 14.7481 5.51062L10.4948 4.89328L8.59342 1.03995C8.53841 0.928305 8.45323 0.834292 8.34755 0.768551C8.24186 0.702811 8.11989 0.667969 7.99542 0.667969C7.87096 0.667969 7.74898 0.702811 7.6433 0.768551C7.53761 0.834292 7.45244 0.928305 7.39742 1.03995L5.49542 4.89328Z"
                    fill="#41C752"
                  />
                </svg>{" "}
                Most Popular
              </Text>
            )}
          </div>
        </div>

        <Title className="text-2xl font-medium leading-[28.8px]">
          {card.price}
        </Title>

        <Text className="min-h-[116px]">{card.description}</Text>
        <div className="flex flex-col gap-8 transition-all duration-500 ease-in-out">
          <div
            onClick={onToggleExpand}
            className="flex items-center justify-between gap-4 w-full"
          >
            <Text className="font-semibold">See what’s included</Text>
            <ChevronUp className={cn(isExpanded ? "rotate-180" : "")} />
          </div>
          {isExpanded && (
            <div className="flex flex-col gap-[22px] transition-all duration-500 ease-in-out">
              {card.listItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0"></div>
                  <Text variant="smaller" className="font-semibold" key={index}>
                    {item}
                  </Text>
                </div>
              ))}
            </div>
          )}
        </div>

        {isExpanded && (
          <>
            {card.image && (
              <div className="mt-2">
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
      <Button>Get My Report Now</Button>
    </Card>
  );
};
