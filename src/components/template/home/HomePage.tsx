import { Card, Separator, Text, Title } from "@/components/atoms";
import {
  Testimonials,
  BetterWellnessSection,
  HeroSection,
  Partners,
  Qna,
  MobileReportSlider,
  ReportCards,
} from "@/components/organism/home";
import { LifeDNAGameChangerData, ReportsData, RoadMapData } from "@/constants";
import Image from "next/image";
import { lock, Upload, ColoredDNA } from "../../../../public/icons";
import { Button } from "@/components/ui/Button";
import { LifeDNATabsComponent } from "@/components/organism/home/LifeDNATabsComponent";
import Link from "next/link";
import { Reports } from "@/types";

export function HomePage() {
  return (
    <div className="bg-white flex flex-col gap-[75px] pb-16 max-lg:pt-6 overflow-hidden">
      {/* Hero section */}
      <div className="flex flex-col gap-4 lg:gap-8 overflow-hidden max-w-[1440px] w-full mx-auto ">
        <HeroSection />
        <div className="max-lg:px-6">
          <Separator />
        </div>
        <Partners />
      </div>
      <div className="flex flex-col gap-6 lg:gap-8 max-lg:px-6">
        <div className="flex flex-col gap-3 lg:gap-6 text-center">
          <Title className="max-lg:max-w-[265px] mx-auto">
            Uncover Your DNA’s Secrets For Optimal Wellness
          </Title>
          <Text>
            Explore 8 Powerful Reports, Revealing Over 130 Unique Traits
          </Text>
        </div>
        <BetterWellnessSection RoadMapData={RoadMapData} />
      </div>
      <div className="flex flex-col gap-6 lg:gap-8 max-w-[1440px] w-full mx-auto max-lg:px-6 lg:px-[42px]">
        <Title className="max-w-[1184px] mx-auto text-center">
          Explore Unique DNA-Personalized Insights for Methylation and Wellness:
          Start Your Journey Now!
        </Title>
        <Text className="text-center max-w-[1086px] mx-auto max-lg:px-8">
          Discover hundreds of genetic insights that have the potential to
          change your life and transform your body. Unlock our best-selling
          Methylation Genes Report and gain powerful insights into your MTHR
          gene and other genes that could be key to unlocking your full genetic
          potential! 
        </Text>
        <div className="flex flex-col gap-4 lg:gap-6 text-center max-lg:mt-4">
          <Text className="font-semibold">Works with:</Text>
          <div className="align-middle grid lg:flex justify-center gap-12 mb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-lg:mt-4 max-sm:hidden mt-12">
          {ReportsData.map((report, index) => {
            return <ReportCards card={report as Reports} key={index} />;
          })}
        </div>
        <div className="lg:hidden mt-14">
          <MobileReportSlider />
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-[1440px] mx-auto w-full max-lg:px-6 lg:px-[42px] max-lg:-mt-8">
        <Title className="text-center max-sm:max-w-[251px] mx-auto">
          Begin Your Wellness Transformation with LifeDNA in 3 Easy Steps
        </Title>
        <LifeDNATabsComponent />
        <Link href="/plans" className="text-center">
          <Button className="w-full sm:max-w-[418px] mx-auto ">
            I want to transform my wellness!
          </Button>
        </Link>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={lock}
              width={16}
              height={16}
              alt="icon"
              className="w-4 h-4"
            />
            <Text variant="smaller">100% Safe & Secure</Text>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Upload} width={16} height={16} alt="icon" />
            <Text variant="smaller">Upload Your Raw Data</Text>
          </div>
          <div className="flex items-center gap-2">
            <Image src={ColoredDNA} width={16} height={16} alt="icon" />
            <Text variant="smaller">Simple And Easy DNA Test</Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 max-w-[1440px] mx-auto max-lg:px-6 lg:px-[42px]">
        <Title className="text-center max-lg:max-w-[244px] mx-auto">
          Discover Why LifeDNA is a Game-Changer for Your Wellness Journey
        </Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LifeDNAGameChangerData.map((item, index) => (
            <Card
              variant="light"
              key={index}
              className="flex flex-col gap-4 lg:gap-6"
            >
              <Title variant="medium" className="text-xl lg:text-2xl">
                0{item.id}
              </Title>
              <Title variant="medium" className="max-lg:text-sm">
                {item.title}
              </Title>
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
      <div className="flex flex-col gap-[42px] lg:gap-16">
        <Testimonials />
        <div className="flex flex-col gap-6 max-w-[1440px] mx-auto px-6 lg:px-[42px]">
          <Title className="text-center">Frequently Asked Questions</Title>
          <Qna />
          <Text variant="small" className="max-sm:text-[12px]">
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
