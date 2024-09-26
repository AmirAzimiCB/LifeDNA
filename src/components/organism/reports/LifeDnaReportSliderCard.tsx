import { Text } from "@/components/atoms";
import { Button } from "@/components/ui/Button";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ReportsProps = {
  icon: string | StaticImageData;
  name: string;
};

export function LifeDnaReportSliderCard({ data }: { data: ReportsProps[] }) {
  return (
    <div className="lg:hidden relative rounded-2xl bg-[#FCFCFC] shadow-[0px_0px_19.1px_0px_rgba(0,_0,_0,_0.1)] py-6 px-16 lg:py-8 flex flex-col gap-16 min-h-[386px] h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-full">
        {data?.map((item: ReportsProps, index: number) => (
          <div key={index} className="flex items-center gap-5">
            <div className="p-2 bg-[#41C752] rounded-full flex items-center justify-center">
              <Image
                src={item.icon || ""}
                alt={`${item.name}`}
                width={32}
                height={32}
                className="w-6 h-6 aspect-auto rounded-full"
              />
            </div>
            <Text className="font-semibold text-base">{`${item.name}`}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}
