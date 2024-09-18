"use client";

import { Text, Wrapper } from "@/components/atoms";
import { LifeDNASteps } from "@/components/types";
import { LifeDNAStepsData } from "@/constants";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { ArrowLeft } from "../../../../public/icons";

export function LifeDNATabsComponent() {
  const tabs = ["have_dna_test", "no_dna_test"];

  return (
    <Tabs.Root defaultValue={tabs[0]} className="w-full">
      <Tabs.List className="flex justify-center mb-8 border-[0.5px] p-1 border-[#B5B5B5] rounded-full w-fit mx-auto">
        <Tabs.Trigger
          value="have_dna_test"
          className="px-8 py-2 text-sm capitalize font-normal text-[#383B42] rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white"
        >
          I Already Have A DNA Test
        </Tabs.Trigger>
        <Tabs.Trigger
          value="no_dna_test"
          className="px-8 py-2 text-sm capitalize font-normal text-[#383B42]  rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white"
        >
          I Need A DNA Test
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="have_dna_test">
        <Wrapper className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full h-full bg-[#FCFCFC]">
          {LifeDNAStepsData.filter((step) => step._key === "have_dna_test").map(
            (step: LifeDNASteps, index: number) => (
              <div
                key={index}
                className="flex items-center gap-10 h-full justify-between"
              >
                <div className="h-full flex flex-col gap-4 items-start">
                  <Text variant="base">Step {step.step}</Text>
                  <Text className="text-xl font-semibold leading-6 min-w-[340px] w-full">
                    {step.title}
                  </Text>
                  <Text>{step?.description || ""}</Text>
                </div>
                {step.showIcon ? (
                  <div className="h-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={ArrowLeft}
                      width={32}
                      height={32}
                      alt="arrowleft"
                      className="aspect-auto flex-shrink-0"
                    />
                  </div>
                ) : null}
              </div>
            )
          )}
        </Wrapper>
      </Tabs.Content>

      <Tabs.Content value="no_dna_test">
        <Wrapper className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 w-full h-full bg-[#FCFCFC]">
          {LifeDNAStepsData.filter((step) => step._key === "no_dna_test").map(
            (step: LifeDNASteps, index: number) => (
              <div
                key={index}
                className="flex items-center gap-10 h-full justify-between"
              >
                <div className="h-full flex flex-col gap-4 items-start">
                  <Text variant="base">Step {step.step}</Text>
                  <Text className="text-xl font-semibold leading-6 min-w-[340px] w-full">
                    {step.title}
                  </Text>
                  <Text>{step?.description || ""}</Text>
                </div>
                {step.showIcon ? (
                  <div className="h-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={ArrowLeft}
                      width={32}
                      height={32}
                      alt="arrowleft"
                      className="aspect-auto flex-shrink-0"
                    />
                  </div>
                ) : null}
              </div>
            )
          )}
        </Wrapper>
      </Tabs.Content>
    </Tabs.Root>
  );
}
