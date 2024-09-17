import Image from "next/image";
import Slider from "./components/Slider";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";
import { Button } from "./components/ui/Button";
import { DnaIcon } from "./components/Icons";

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-white overflow-hidden">
        <div className="lg:flex pl-[5%] lg:items-center lg:justify-center">
          <div className="relative z-10 bg-white pr-[5%] lg:w-1/2 flex items-center justify-center">
            <div>
              <h2 className="text-lg font-semibold">
                Discover Your Genetic Wellness Profile
              </h2>
              <h1 className="text-3xl font-bold my-12">
                Advanced DNA Testing For Methylation And Overall Well-Being
              </h1>
              <p className="mt-4">
                Tap into your DNA&apos;s hidden secrets and unlock actionable
                insights that can help you transform your body and achieve your
                wellness goals in no time.
              </p>
              <button className="mt-6 w-full py-3 bg-accent-color text-white font-semibold rounded-md hover:bg-black">
                Transform My Wellness
              </button>
            </div>
          </div>
          <div className="lg:w-3/5 py-16">
            <Slider />
          </div>
        </div>
      </div>

      {/* New Section */}
      <section className="py-8">
        <div className="container mx-auto text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <CodeIcon className="w-6 h-6" />
              <span>Over 120 Genetic Hacks</span>
            </div>
            <div className="flex items-center space-x-2">
              <LockIcon className="w-6 h-6" />
              <span>100% Safe And Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <DnaIcon className="w-6 h-6" />
              <span>Take A DNA Test Or Upload DNA</span>
            </div>
          </div>
          <div className="flex justify-center space-x-8">
            <Image
              src="/placeholder.svg"
              alt="Forbes"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="Entrepreneur"
              width={150}
              height={40}
              style={{ aspectRatio: "150/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="Business Journal"
              width={150}
              height={40}
              style={{ aspectRatio: "150/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="Daily Mail"
              width={150}
              height={40}
              style={{ aspectRatio: "150/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="CNN"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              Explore Unique DNA-Personalized Insights For Methylation And
              Wellness: Start Your Journey Now!
            </h2>
            <p className="text-muted-foreground">
              Discover hundreds of genetic insights that have the potential to
              change your life and transform your body. Unlock our best-selling
              Methylation Genes Report and gain powerful insights into your MTHR
              gene and other genes that could be key to unlocking your full
              genetic potential!
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <Image
              src="/placeholder.svg"
              alt="23andMe"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="Ancestry"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="MyHeritage"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="Living DNA"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
            <Image
              src="/placeholder.svg"
              alt="FamilyTreeDNA"
              width={100}
              height={40}
              style={{ aspectRatio: "100/40", objectFit: "cover" }}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border">
              <CardContent className="space-y-4">
                <h3 className="text-lg font-bold">Methylation Genes Report</h3>
                <p className="text-sm text-muted-foreground">
                  *No DNA Kit Included
                </p>
                <p className="text-2xl font-bold">$99</p>
                <p className="text-sm">
                  Feeling drained and struggling with mood swings? Discover the
                  genetic reasons behind these signs with personalized insights
                  based on your MTHFR gene and other unique methylation gene
                  mutations. No DNA Kit Included.
                </p>
                <Button className="bg-green-500 text-white">
                  Get My Report Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border">
              <CardContent className="space-y-4">
                <h3 className="text-lg font-bold">
                  Methylation Genes Report + Wellness Report Bundle
                </h3>
                <p className="text-sm text-muted-foreground">
                  *No DNA Kit Included
                </p>
                <p className="text-2xl font-bold">$199</p>
                <p className="text-sm">
                  Everything in your Methylation Genes Report, and more!
                  You&apos;ll unlock more personalized insights beyond your
                  methylation analysis to help you make informed decisions about
                  your well-being.
                </p>
                <Button className="bg-green-500 text-white">
                  Get My Reports Now
                </Button>
              </CardContent>
            </Card>
            <Card className="border">
              <CardContent className="space-y-4">
                <h3 className="text-lg font-bold">
                  Methylation Genes Report + Wellness Test Bundle
                </h3>
                <p className="text-sm text-muted-foreground">
                  *DNA Kit Included
                </p>
                <p className="text-2xl font-bold">$249</p>
                <p className="text-sm">
                  Get everything in your Methylation Genes Report + Wellness
                  Report Bundle, along with a DNA kit.
                </p>
                <Button className="bg-green-500 text-white">
                  Get My DNA Test Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features section */}
      <div className="py-12 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-accent-color font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-semibold tracking-tight sm:text-4xl">
              Here&apos;s What Makes LifeDNA A Game-Changer
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title:
                    "120+ DNA-Tailored Reports Designed To Support Your Overall Well-Being",
                  description:
                    "Achieve sustainable weight loss without starving yourself, or wasting time on fad diets and ineffective workouts. Explore your sleep, skin, as well as your personality traits and stress triggers.",
                },
                {
                  title:
                    "Embark On A Journey Of Self-Discovery And Optimization",
                  description:
                    "Dive into undiscovered talents and passions. Discover potential genetic predispositions and unlock strategies to better prepare for wellness challenges.",
                },
                {
                  title: "Accelerate Your Path To Well-Being",
                  description:
                    "Say goodbye to guesswork with your DNA leading the way. Embrace personalized recommendations, leaving one-size-fits-all approaches behind.",
                },
                {
                  title: "Unlock Your DNA Like Never Before",
                  description:
                    "Discover insights that are not offered by other DNA wellness tools. Unlock genetic secrets that are typically missed by other DNA testing companies.",
                },
              ].map((feature, index) => (
                <div key={index} className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium">
                      {feature.title}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
