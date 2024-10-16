import { Separator, Text } from "@/components/atoms";
import { DnaIcon } from "@/components/Icons";
import { PartnersData } from "@/constants";
import { LockIcon, FlaskConical } from "lucide-react";
import Image from "next/image";

export function Partners() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 max-lg:px-8">
      <div className="flex flex-col md:flex-row max-md:items-center justify-center gap-4 lg:gap-8 tracking-tight">
        <div className="flex items-center gap-1.5 md:space-x-2">
          <DnaIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[16px] font-semibold">
            Over 130 DNA-Tailored Strategies
          </Text>
        </div>
        <div className="flex items-center gap-1.5 md:space-x-2">
          <LockIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[16px] font-semibold">
            100% Safe And Secure
          </Text>
        </div>
        <div className="flex items-center gap-1.5 md:space-x-2">
          <FlaskConical className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[16px] font-semibold">
            Take A DNA Test or Upload Raw Data
          </Text>
        </div>
      </div>
      <Separator />
      <div className="lg:flex  justify-center gap-8">
        {PartnersData.map((partner, key) => (
          <div
            key={key}
            className="lg:px-3.5 py-5 lg:py-5 flex items-center justify-center"
          >
            <Image
              src={partner.icon}
              alt={partner.title}
              width={100}
              height={50}
              className="w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
