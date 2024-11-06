"use client";

import { Card, Text, Title, Wrapper } from "@/components/atoms";
import { HowItWorksInThreeStepsTypes } from "@/types";
import { HowItWorksInThreeStepsData } from "@/constants";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link"; // Add this import

export function HowItWorksInThreeSteps() {
  const tabs = ["have_dna_test", "no_dna_test"];

  return (
    <Wrapper className="flex flex-col gap-4 lg:gap-8 max-lg:p-0 max-lg:shadow-none max-lg:bg-white">
      <div className="flex flex-col gap-4">
        <Title className="text-center">
          Whether You&apos;ve Already Taken a DNA Test or Need One - You Can
          Kickstart Your Wellness Journey with LifeDNA
        </Title>
        <Text className="font-semibold text-center">
          Your DNA, Your Journey: Personalized DNA Insights Just For You.
        </Text>
      </div>
      <Tabs.Root defaultValue={tabs[0]} className="w-full">
        <Tabs.List className="flex justify-center mb-8 border-[0.5px] p-1 border-[#B5B5B5] rounded-full w-fit mx-auto">
          <Tabs.Trigger
            value="have_dna_test"
            className="px-8 py-2.5 text-sm capitalize font-normal text-[#383B42] rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white data-[state=active]:font-semibold"
          >
            I Already Have Done A DNA Test
          </Tabs.Trigger>
          <Tabs.Trigger
            value="no_dna_test"
            className="px-8 py-2.5 text-sm capitalize font-normal text-[#383B42]  rounded-full data-[state=active]:bg-[#00A084] data-[state=active]:text-white data-[state=active]:font-semibold"
          >
            I Have Never Done A DNA Test
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
                      <Text>
                        <Text
                          className="text-lg max-lg:max-w-[241px] lg:text-2xl leading-[140%] font-semibold lg:leading-8 text-center lg:text-left lg:max-w-[340px] w-full"
                          htmlContent={step.title}
                        />
                      </Text>
                      {step?.description ? (
                        <Text
                          className="text-center lg:text-left max-lg:mt-3"
                          htmlContent={step.description}
                        />
                      ) : null}
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
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="no_dna_test">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-full bg-[#FCFCFC]">
            {HowItWorksInThreeStepsData.filter(
              (step) => step._key === "no_dna_test"
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
                      <Text className="">
                        <Text
                          className="text-lg max-lg:max-w-[241px] lg:text-2xl leading-[120%] font-semibold lg:leading-8 text-center lg:text-left lg:max-w-[340px] w-full"
                          htmlContent={step.title}
                        />
                      </Text>
                      {step?.description ? (
                        <Text
                          className="text-center lg:text-left max-lg:mt-3"
                          htmlContent={step.description}
                        />
                      ) : null}
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
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
      <Link href="/plans" className="mt-4 max-w-[400px] w-full mx-auto ">
        <Button className="mt-4 ">Yes, I want to transform my wellness!</Button>
      </Link>
    </Wrapper>
  );
}
