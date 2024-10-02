import { BgDNA, WorksWith } from "../../../../public/icons";
import Image from "next/image";
import { Text, Title } from "@/components/atoms";

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-[94px] py-6 lg:py-16 lg:pb-[156px] flex flex-col gap-[157px] justify-center lg:min-h-[638px] h-full">
      <Image
        src={BgDNA}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="hero bg"
        className="w-full h-full aspect-auto"
      />
      <div className="flex flex-col gap-4 lg:gap-8 max-w-[1440px] mx-auto w-full lg:px-[94px]">
        <div className="max-lg:space-y-4">
          <Title className="max-sm:max-w-[317px]">
            {" "}
            Unlock Deep Insights Into Your MTHFR Gene, Methylation, and Overall
            Wellness
          </Title>
          <Title className="text-xs lg:text-xl leading-[150%] lg:leading-[200%] max-w-[926px]">
            Unlock 130+ Insights Into Your Methylation and Wellness to Achieve
            Your Goals Faster
          </Title>
        </div>
        <Text className="max-w-[658px]">
          Dive into key genes and traits that may influence your potential
          nutrient deficiencies, cardiovascular well-being, metabolism, and
          more—going beyond what other DNA tests may reveal.
        </Text>
        <div className="flex flex-col max-lg:mt-4 gap-3 lg:gap-6">
          <Text className="font-semibold">Works with:</Text>
          <div className="w-full max-w-[636px]">
            <Image
              src={WorksWith}
              width={16200}
              height={1200}
              alt="works with"
              className="w-full aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
