import { Text, Title } from "@/components/atoms";
import Image from "next/image";
import { GeneticResearch } from "../../../../public/icons";

export function LatestGeneticResearch() {
  return (
    <section className="flex flex-col lg:flex-row gap-[42px]">
      <div className="flex flex-col gap-[42px] lg:gap-[50px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:gap-4">
            <Title>Most In-depth Reports.</Title>
            <Title>Latest Genetic Research.</Title>
          </div>
          <Text className="max-w-[512px]">
            We bring hundreds of peer-reviewed studies and journals into your
            hands.
          </Text>
        </div>
        <div className="flex flex-col gap-6">
          {[
            "Your personalized reports are built using your DNA as the blueprint.",
            "Every genetic discovery is accompanied by clear, actionable guidelines.",
            "Only the most thoroughly studied genetic variations in relation to your wellness are included.",
            "Each trait report has a scientific evidence level to help you determine how much research is done to support our findings.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 items-start max-w-[512px]">
              <div className="w-2.5 h-2.5 bg-[#00A084] rounded-full flex-shrink-0 mt-1"></div>
              <Text variant="smaller" className="font-semibold " key={index}>
                {item}
              </Text>
            </div>
          ))}
        </div>
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
