import { Title, Text, Separator } from "@/components/atoms";
import { QNAData } from "@/constants";

export function Qna() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      {QNAData.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 lg:gap-6">
          <div className="flex flex-col gap-4">
            <Title
              variant="smaller"
              className="max-sm:text-[16px] font-semibold"
            >
              {item.title}
            </Title>
            <Text variant="small" className="max-sm:text-[16px]">
              {item.description}
            </Text>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
}
