import { BgDNA } from "../../../../public/icons";
import Image from "next/image";
import { Text, Title } from "@/components/atoms";

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-[94px] py-6 pb-8 flex flex-col gap-[157px] justify-center lg:min-h-[438px] h-full">
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
          <Text className="font-semibold  text-center">Works with:</Text>
          <div className="align-middle grid lg:flex justify-center lg:justify-left logoplan gap-8 lg:gap-12 mb-6">
            <Image
              src="/images/23andme.svg"
              alt="23andme"
              width={130}
              height={130}
            />
            <Image
              src="/images/ancestry.svg"
              alt="23andme"
              width={130}
              height={130}
            />{" "}
            <Image
              src="/images/myheritage.svg"
              alt="23andme"
              width={130}
              height={130}
            />{" "}
            <Image
              src="/images/livingdna.svg"
              alt="23andme"
              width={130}
              height={130}
            />{" "}
            <Image
              src="/images/familytreedna.svg"
              alt="23andme"
              width={130}
              height={130}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
