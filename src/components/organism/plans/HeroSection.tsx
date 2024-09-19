import { BgDNA, WorksWith } from "../../../../public/icons";
import Image from "next/image";
import { Text, Title } from "@/components/atoms";

export function HeroSection() {
  return (
    <section className="w-full relative px-4 lg:px-[94px] lg:pt-[175px] py-16 lg:pb-[156px] flex flex-col gap-[157px] justify-center max-h-[634px] h-full">
      <Image
        src={BgDNA}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="hero bg"
        className="w-full h-full aspect-auto"
      />
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto w-full px-4 lg:px-[94px]">
        <div>
          <Title> Transform Your Wellness like Never Before</Title>
          <Title className="text-xl leading-[200%] max-w-[926px]">
            Unlock 130+ Insights Into Your Methylation and Wellness to Achieve
            Your Goals Faster
          </Title>
        </div>
        <Text className="max-w-[658px]">
          Go beyond your basic personalized wellness analysis and gain
          additional exclusive insights into how your MTHFR gene can shape your
          energy, mood, and well-being with our ultimate Methylation Genes
          Report. Plus, take the guesswork out of your diet, fitness,
          supplementation, sleep, skin, and wellness.
        </Text>
        <div className="flex flex-col gap-6">
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
