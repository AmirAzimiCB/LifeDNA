"use client";

import { Card, Text, Title, Wrapper } from "@/components/atoms";
import { HowItWorksInThreeStepsTypes } from "@/types";
import { HowItWorksInThreeStepsData } from "@/constants";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HowItWorksInThreeSteps() {
  const tabs = ["have_dna_test", "no_dna_test"];

  return (
    <Wrapper className="flex flex-col gap-4 lg:gap-8 max-lg:p-0 max-lg:shadow-none max-lg:bg-white">
      <div className="flex flex-col gap-4">
        <Title className="text-center">Get Started In Three Simple Steps</Title>
        <Text className="font-semibold text-center">
          No blood. No needles. Just your saliva.
        </Text>
      </div>
      <Tabs.Root defaultValue={tabs[0]} className="w-full">
        <Tabs.List className="flex justify-center mb-8 border-[0.5px] p-1 border-[#B5B5B5] rounded-full w-fit mx-auto">
          <Tabs.Trigger
            value="have_dna_test"
            className="px-8 py-2.5 text-[10px] lg:text-sm capitalize font-normal text-[#383B42] rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white data-[state=active]:font-semibold"
          >
            I Already Have A DNA Test
          </Tabs.Trigger>
          <Tabs.Trigger
            value="no_dna_test"
            className="px-8 py-2.5 text-[10px] lg:text-sm capitalize font-normal text-[#383B42]  rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white data-[state=active]:font-semibold"
          >
            I Need A DNA Test
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="have_dna_test">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full bg-[#FCFCFC]">
            {HowItWorksInThreeStepsData.filter(
              (step) => step._key === "have_dna_test"
            ).map((step: HowItWorksInThreeStepsTypes, index: number) => (
              <Card
                key={index}
                className="flex items-center gap-10 h-full justify-between border-none"
              >
                <div className="h-full w-full flex flex-col lg:gap-8 items-start">
                  <div className="flex items-start w-full justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <Text variant="base" className="capitalize">
                        Step {step.step}
                      </Text>
                      <Title>{step.title}</Title>
                    </div>
                    <div className="h-full flex items-start flex-shrink-0">
                      <Image
                        src={step.icon}
                        width={32}
                        height={32}
                        alt="arrowleft"
                        className="aspect-auto flex-shrink-0"
                      />
                    </div>
                  </div>
                  <Text>{step?.description || ""}</Text>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="no_dna_test">
          <div className="grid grid-cols-1 gap-8 w-full h-full bg-[#FCFCFC]">
            <Card className="flex items-center gap-10 h-full justify-between border-none">
              <div className="h-full w-full flex flex-col gap-7 lg:gap-8 items-start max-w-[482px] mx-auto">
                <div className="flex items-start w-full justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <Text variant="base" className="capitalize">
                      step 1
                    </Text>
                    <Title>Already Taken A DNA test?</Title>
                  </div>
                </div>
                <Text>
                  Simply upload your raw data and your reports will be generated
                  in a few hours.
                </Text>
              </div>
            </Card>
          </div>
        </Tabs.Content>
      </Tabs.Root>
      <Button className="mt-4">Yes, I want to transform my wellness!</Button>
    </Wrapper>
  );
}
