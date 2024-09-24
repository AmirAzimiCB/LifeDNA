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
          <Title>Know Your DNA.</Title>
          <Title>Take Control Of Your Wellness.</Title>
        </div>
        <Text className="max-w-[658px]">
          Whether you want to improve your diet, optimize your workout routine,
          or learn more about yourself, LifeDNA can help guide your decisions
          with personalized suggestions based on your unique genetic profile.
        </Text>
      </div>
      <div className="text-center flex flex-col max-lg:text-center gap-4 ">
        <Text variant="smaller">Over 120 unique traits</Text>
        <Title>Explore LifeDNA’s Most Powerful Reports</Title>
      </div>
    </section>
  );
}
