import { Text, Title } from "@/components/atoms";
import { Carousel } from "@/components/molecule";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="lg:flex pl-[5%] lg:items-center lg:justify-center">
          <div className="relative z-10 bg-white pr-[5%] lg:w-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-12">
                <Title type="h2" variant="medium">
                  Discover Your Genetic Wellness Profile
                </Title>
                <Title variant="default" className="text-3xl font-bold">
                  Advanced DNA Testing For Methylation And Overall Well-Being
                </Title>
              </div>
              <Text className="">
                Tap into your DNA&apos;s hidden secrets and unlock actionable
                insights that can help you transform your body and achieve your
                wellness goals in no time.
              </Text>
              <Button>Transform My Wellness</Button>
            </div>
          </div>
          <div className="lg:w-3/5 py-16">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
