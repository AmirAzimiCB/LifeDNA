import { ReportCard } from "@/components/molecule/plans";
import { reportCards } from "@/constants";

export function PlanCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reportCards.map((data, index) => (
        <ReportCard key={index} card={data} />
      ))}
    </div>
  );
}
