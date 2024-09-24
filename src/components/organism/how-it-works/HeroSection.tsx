import Image from "next/image";
import { HowItWorks } from "../../../../public/icons";
import { Text, Title } from "@/components/atoms";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div>
          <Title className="lg:text-5xl lg:leading-[57.6px] max-w-[590px]">
            Easy, Quick,
          </Title>
          <Title className="lg:text-5xl lg:leading-[57.6px] max-w-[590px]">
            Non-invasive DNA Test.
          </Title>
        </div>
        <div className="flex flex-col gap-4 max-w-[696px]">
          <Text>
            Our saliva collection kit makes it easier for you to take a DNA test
            from the comfort of your home. All you need to provide is a small
            saliva sample. It’s simple and non-invasive.
          </Text>
          <Text variant="small" className="font-semibold">
            (DNA kit included Methylation Genes Report + Wellness Test Bundle)
          </Text>
        </div>
      </div>
      <div>
        <Image
          src={HowItWorks}
          alt="how it works"
          width={1600}
          height={1200}
          className="w-[382px] h-[332px] lg:w-[490px] lg:h-[428px] aspect-auto"
        />
      </div>
    </section>
  );
}
