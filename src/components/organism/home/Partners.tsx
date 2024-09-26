import { Separator, Text } from "@/components/atoms";
import { DnaIcon } from "@/components/Icons";
import { PartnersData } from "@/constants";
import { LockIcon, FlaskConical } from "lucide-react";
import Image from "next/image";

export function Partners() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex justify-center gap-3.5 lg:gap-8 tracking-tight">
        <div className="flex items-center gap-1.5 md:space-x-2">
          <DnaIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[8px] font-semibold">
            Over 120 Genetic Hacks
          </Text>
        </div>
        <div className="flex items-center gap-1.5 md:space-x-2">
          <LockIcon className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[8px] font-semibold">
            100% Safe And Secure
          </Text>
        </div>
        <div className="flex items-center gap-1.5 md:space-x-2">
          <FlaskConical className="w-4 h-4 lg:w-6 lg:h-6" />
          <Text className="max-lg:text-[8px] font-semibold">
            Take A DNA Test Or Upload DNA
          </Text>
        </div>
      </div>
      <Separator />
      <div className="flex justify-center gap-8">
        {PartnersData.map((partner, key) => (
          <div
            key={key}
            className="lg:px-3.5 py-1.5 lg:py-5 flex items-center justify-center"
          >
            <Image
              src={partner.icon}
              alt={partner.title}
              width={100}
              height={40}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
