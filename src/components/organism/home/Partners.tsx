import { Separator, Text } from "@/components/atoms";
import { DnaIcon } from "@/components/Icons";
import { LockIcon, FlaskConical } from "lucide-react";
import Image from "next/image";

export function Partners() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center gap-8">
        <div className="flex items-center space-x-2">
          <DnaIcon className="w-6 h-6" />
          <Text className="font-semibold">Over 120 Genetic Hacks</Text>
        </div>
        <div className="flex items-center space-x-2">
          <LockIcon className="w-6 h-6" />
          <Text className="font-semibold">100% Safe And Secure</Text>
        </div>
        <div className="flex items-center space-x-2">
          <FlaskConical className="w-6 h-6" />
          <Text className="font-semibold">Take A DNA Test Or Upload DNA</Text>
        </div>
      </div>
      <Separator />
      <div className="flex justify-center gap-8">
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
    </div>
  );
}
