"use client";

import { Text } from "@/components/atoms";
import { useReportFilter } from "@/components/hooks/useReportFilter";
import { SelectField } from "@/components/molecule";
import { Button } from "@/components/ui/Button";
import { reportData, reportOptions } from "@/constants";
import Image from "next/image";

export function LifeDnaReportsFilter() {
  const { setSelectedReport, filteredData } = useReportFilter(reportData);
  const defaultOption = reportOptions[0]?.value;
  const normalizedData = filteredData[0];
  return (
    <section className="w-full flex flex-col gap-8">
      <SelectField
        options={reportOptions}
        onValueChange={(value) => setSelectedReport(value)}
        defaultValue={defaultOption}
      />
      <div className="flex items-center gap-4">
        <div className="p-2 bg-[#41C752] rounded-full flex items-center justify-center">
          <Image
            src={normalizedData?.icon || ""}
            alt={normalizedData?.description}
            width={32}
            height={32}
            className="w-4 h-4 lg:w-6 lg:h-6 aspect-auto rounded-full"
          />
        </div>
        <Text>{normalizedData.description}</Text>
      </div>
      <div className="rounded-2xl bg-[#FCFCFC] shadow-[0px_0px_19.1px_0px_rgba(0,_0,_0,_0.1)] py-6 px-16 lg:py-8 flex flex-col gap-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {normalizedData.items.map((item, index) => (
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
        <Button>Yes, I want to transform my wellness!</Button>
      </div>
    </section>
  );
}
