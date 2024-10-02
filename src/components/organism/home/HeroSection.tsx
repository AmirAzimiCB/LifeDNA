import { Text, Title } from "@/components/atoms";
import { Carousel } from "@/components/molecule";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div className="relative bg-white overflow-hidden ">
        <div className="lg:flex lg:items-center lg:justify-center my-14">
          <div className="relative z-10 bg-white lg:pl-[5%] lg:pr-[5%] lg:w-1/2 flex max-lg:px-6 items-center justify-center">
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-2 lg:gap-2">
                <Title type="h2" variant="medium">
                  Tap Into The Power of Your DNA
                </Title>
                <Title variant="default" className="lg:text-3xl font-bold">
                  Discover The Ultimate DNA Testing for Methylation and Complete
                  Wellness
                </Title>
              </div>
              <Text className="">
                Unlock the hidden potential in your DNA and gain personalized
                insights to transform your well-being. Dive deep into your
                unique gene mutations and traits, and discover actionable
                strategies to fast-track your wellness journey and supercharge
                your goals.
              </Text>
              <ol>
                <li>● Over 130 DNA-Tailored Strategies</li>
                <li>● 100% Safe and Secure</li>
                <li>● Take A DNA Test or Upload RawData</li>
              </ol>
              <Link href="/plans">
                <Button>Transform My Wellness</Button>
              </Link>
            </div>
          </div>
          <div className="w-fit lg:w-3/5 pb-[24px] pt-[58px] lg:py-16 max-lg:pl-6 z-0">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
