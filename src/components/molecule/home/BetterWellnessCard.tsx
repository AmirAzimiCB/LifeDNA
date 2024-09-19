import React from "react";
import { Card, Title, Text } from "@/components/atoms";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { RoadMap } from "@/types";
import { cn } from "@/lib/utils";

export const BetterWellnessCard: React.FC<RoadMap> = ({
  icon,
  title,
  description,
  items,
  buttonText,
  href,
  className = "",
  target = "_self",
}) => {
  return (
    <Card
      className={cn("flex flex-col w-full justify-between gap-6", className)}
    >
      <div className="flex flex-col gap-5 h-full">
        <div className="flex items-center gap-2.5">
          <div className="text-white p-2 rounded-full bg-[#41C752]">
            <Image
              src={icon}
              alt={title}
              width={24}
              height={24}
              className="w-full h-full aspect-auto rounded-full"
            />
          </div>
          <Title variant="smaller">{title}</Title>
        </div>
        <Text variant="smaller">{description}</Text>
      </div>
      <div className="flex flex-col gap-8">
        <div className=" flex flex-col gap-[22px]">
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0"></div>
              <Text variant="smaller" className="font-semibold" key={index}>
                {item}
              </Text>
            </div>
          ))}
        </div>
        <Link href={href} target={target}>
          <Button className="">{buttonText}</Button>
        </Link>
      </div>
    </Card>
  );
};
