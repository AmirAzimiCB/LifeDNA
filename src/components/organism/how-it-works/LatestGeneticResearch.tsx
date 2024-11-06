import { Text, Title } from "@/components/atoms";
import Image from "next/image";

export function LatestGeneticResearch() {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-[42px] max-lg:mt-8">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col max-lg:items-center gap-4 lg:gap-6">
          <div className="flex flex-col max-lg:text-center lg:leading-[150%]">
            <Title>Scientific Research at LifeDNA:</Title>
            <Title>
              Unlocking Your DNA to Create Your Unique Wellness Blueprint
            </Title>
          </div>
          <Text className=" max-lg:mx-auto max-lg:text-center lg:max-w-[512px]">
            Our Genomics Research Team has developed our reports over several
            years, drawing from over 500 peer-reviewed studies for comprehensive
            and detailed insights.
          </Text>
          <Text className=" max-lg:mx-auto max-lg:text-center lg:max-w-[512px]">
            Genomics is a journey of constant discovery, and we&apos;re right
            there with you. LifeDNA evolves alongside the latest research and
            developments, staying on top of cutting-edge research.
          </Text>
          <Text className="max-lg:mx-auto max-lg:text-center lg:max-w-[512px]">
            Our commitment to continuous enhancement means our reports
            aren&apos;t just scientifically solid – they also capture the most
            recent breakthroughs in genetics.
          </Text>
        </div>
      </div>
      <div className="relative lg:max-w-[726px] w-full">
        <Image
          src={"/images/DNAWellness2.png"}
          alt="genetic cover"
          width={1600}
          height={1200}
          className="w-full h-full aspect-auto object-center"
        />
      </div>
    </section>
  );
}
