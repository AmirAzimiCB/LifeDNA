import { Text, Title } from "@/components/atoms";
import Image from "next/image";
import { GeneticResearch } from "../../../../public/icons";

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
          <Text className="max-lg:max-w-[238px] max-lg:mx-auto max-lg:text-center lg:max-w-[512px]">
            Our Genomics Research Team has developed our reports over several
            years, drawing from over 500 peer-reviewed studies for comprehensive
            and detailed insights.
            <br />
            <br /> Genomics is a journey of constant discovery, and we're right
            there with you. LifeDNA evolves alongside the latest research and
            developments, staying on top of cutting-edge research.
            <br />
            <br /> Our commitment to continuous enhancement means our reports
            aren't just scientifically solid – they also capture the most recent
            breakthroughs in genetics.
          </Text>
        </div>
        {/* <div className="flex flex-col gap-6">
          {[
            "Your personalized reports are built using your DNA as the blueprint.",
            "Every genetic discovery is accompanied by clear, actionable guidelines.",
            "Only the most thoroughly studied genetic variations in relation to your wellness are included.",
            "Each trait report has a scientific evidence level to help you determine how much research is done to support our findings.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start max-w-[512px]">
              <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0 mt-[2px] lg:mt-1"></div>
              <Text
                variant="smaller"
                className="font-semibold max-lg:text-[10px]"
                key={index}
              >
                {item}
              </Text>
            </div>
          ))}
        </div> */}
      </div>
      <div className="relative lg:max-w-[726px] w-full">
        <Image
          src={GeneticResearch}
          alt="genetic cover"
          width={1600}
          height={1200}
          className="w-full h-full aspect-auto object-center"
        />
      </div>
    </section>
  );
}
