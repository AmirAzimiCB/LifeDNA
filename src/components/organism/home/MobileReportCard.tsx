import { Card, Title, Text } from "@/components/atoms";
import { Button } from "@/components/ui/Button";
import { Reports } from "@/types";

type Props = {
  report: Reports;
};

export function MobileReportCard({ report }: Props) {
  return (
    <Card className="flex flex-col justify-between gap-6 p-5 w-full min-h-[240px]">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-[2px] lg:gap-1.5">
            <Title
              variant="smaller"
              className="text-xs leading-[19.2px] font-bold capitalize  tracking-tight"
            >
              {report.title}
            </Title>
            {report.kitIncluded ? (
              <Text variant="small" className="max-lg:text-[10px]">
                *DNA kit included
              </Text>
            ) : (
              <Text variant="small" className="max-lg:text-[10px]">
                *no DNA kit included
              </Text>
            )}
          </div>
          <Text
            variant="base"
            className="text-base lg:text-2xl leading-[120%] font-medium"
          >
            {report.price}
          </Text>
        </div>
        <Text>{report.description}</Text>
      </div>
      <Button>{report.buttonText}</Button>
    </Card>
  );
}
