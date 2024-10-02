import Image from "next/image";
import { ReportBg } from "../../../../public/icons";
import { Text, Title } from "@/components/atoms";

export function HeroSection() {
  return (
    <section className="w-full relative p-6 pb-0 lg:px-[94px] lg:pt-[175px] flex flex-col gap-[42px] lg:gap-[157px] justify-center lg:max-h-[634px] h-full">
      <Image
        src={ReportBg}
        layout="fill"
        objectFit="cover"
        alt="hero bg"
        className="w-full h-full aspect-auto lg:bg-bottom bg-left max-sm:max-h-[145px]"
      />
      <div className="flex flex-col gap-4 lg:gap-8">
        <div>
          <Title>Explore LifeDNA’s Personalized DNA Reports</Title>
        </div>
        <Text className="max-w-[658px]">
          Have you ever wondered how your DNA impacts your methylation,
          nutrition, wellness, sleep, skincare, personality, and more? Discover
          the reports and traits that can guide you in making better choices for
          your wellness journey, helping you live your best life.
        </Text>
      </div>
      <div className="text-center flex flex-col max-lg:text-center gap-4 ">
        <Text variant="smaller">Over 130 unique traits</Text>
        <Title>
          Here Are The 8 Powerful Reports That Can Help You Truly Transform Your
          Wellness:
        </Title>
      </div>
    </section>
  );
}
