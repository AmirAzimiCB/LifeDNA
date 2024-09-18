import { Card, Separator, Text, Title } from "@/components/atoms";
import {
  Testimonials,
  BetterWellnessSection,
  HeroSection,
  Partners,
  Qna,
} from "@/components/organism/home";
import { LifeDNAGameChangerData, ReportsData, RoadMapData } from "@/constants";
import Image from "next/image";
import { lock, WorksWith, Upload, ColoredDNA } from "../../../../public/icons";
import { Button } from "@/components/ui/Button";
import { LifeDNATabsComponent } from "@/components/organism/home/LifeDNATabsComponent";

export function HomePage() {
  return (
    <div className="bg-white flex flex-col gap-[75px] pb-[64px]">
      {/* Hero section */}
      <div className="flex flex-col gap-8">
        <HeroSection />
        <Separator />
        <Partners />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 text-center">
          <Title>Explore Your Personalized Roadmap to Better Wellness</Title>
          <Text>
            Explore 8 Powerful Reports, Uncovering Over 130 Unique Traits
          </Text>
        </div>
        <BetterWellnessSection RoadMapData={RoadMapData} />
      </div>
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto px-8 lg:px-16">
        <Title className="max-w-[1184px] mx-auto text-center">
          Explore Unique DNA-Personalized Insights for Methylation and Wellness:
          Start Your Journey Now!
        </Title>
        <Text className="text-center max-w-[1086px] mx-auto">
          Discover hundreds of genetic insights that have the potential to
          change your life and transform your body. Unlock our best-selling
          Methylation Genes Report and gain powerful insights into your MTHR
          gene and other genes that could be key to unlocking your full genetic
          potential! 
        </Text>
        <div className="flex flex-col gap-6 text-center">
          <Text className="font-semibold">Works with:</Text>
          <div className="w-full max-w-[636px] mx-auto">
            <Image
              src={WorksWith}
              width={16200}
              height={1200}
              alt="works with"
              className="w-full aspect-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ReportsData.map((report, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between gap-6 px-6"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <Title
                    variant="smaller"
                    className="text-base leading-[19.2px] font-bold capitalize  tracking-tight"
                  >
                    {report.title}
                  </Title>
                  {report.kitIncluded ? (
                    <Text variant="small">*DNA kit included</Text>
                  ) : (
                    <Text variant="small">*no DNA kit included</Text>
                  )}
                </div>
                <Text
                  variant="base"
                  className="text-2xl leading-[120%] font-medium"
                >
                  {report.price}
                </Text>
                <Text>{report.description}</Text>
              </div>
              <Button>{report.buttonText}</Button>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto px-8 lg:px-16">
        <Title className="text-center">
          Get started with LifeDNA today in 3 easy steps
        </Title>
        <LifeDNATabsComponent />
        <Button className="max-w-[418px] mx-auto">
          I want to transform my wellness!tton
        </Button>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <Image src={lock} width={16} height={16} alt="icon" />
            <Text variant="smaller">100% Secure</Text>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Upload} width={16} height={16} alt="icon" />
            <Text variant="smaller">Upload your raw data</Text>
          </div>
          <div className="flex items-center gap-2">
            <Image src={ColoredDNA} width={16} height={16} alt="icon" />
            <Text variant="smaller">Take a DNA test</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 max-w-[1440px] mx-auto px-8 lg:px-16">
        <Title className="text-center">
          Here&apos;s what makes LifeDNA a game-changer
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LifeDNAGameChangerData.map((item, index) => (
            <Card variant="light" key={index} className="flex flex-col gap-6">
              <Title variant="medium" className="text-2xl">
                0{item.id}
              </Title>
              <Title variant="medium">{item.title}</Title>
              <div className="flex flex-col gap-6">
                {item.list.map((i, k) => (
                  <Text variant="small" key={k}>
                    {i}
                  </Text>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:gap-16">
        <Testimonials />
        <div className="flex flex-col gap-[42px] max-w-[1440px] mx-auto px-8 lg:px-16">
          <Title className="text-center">Frequently Asked Questions</Title>
          <Qna />
          <Text variant="small">
            *Our reports have not been evaluated by the Food and Drug
            Administration. The contents on our website and our reports are for
            informational purposes only, and are not intended to diagnose any
            medical condition, replace the advice of a healthcare professional,
            or provide any medical advice, diagnosis, or treatment. Consult with
            a healthcare professional before making any major lifestyle changes
            or if you have any other concerns about your results. The
            testimonials featured may have used more than one LifeDNA or LifeDNA
            vendors’ product or reports. 
          </Text>
        </div>
      </div>
    </div>
  );
}
