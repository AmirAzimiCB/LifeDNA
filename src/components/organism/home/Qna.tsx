import { Title, Text, Separator } from "@/components/atoms";
import { QNAData } from "@/constants";

export function Qna() {
  return (
    <div className="flex flex-col gap-6">
      {QNAData.map((item, index) => (
        <div key={index} className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Title variant="smaller">{item.title}</Title>
            <Text variant="small">{item.description}</Text>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
}
