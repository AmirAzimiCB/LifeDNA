import { ReportCategory } from "@/types";
import { useState, useMemo } from "react";

export function useReportFilter(initialData: ReportCategory[]) {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const filteredData = useMemo<ReportCategory[]>(() => {
    if (!selectedReport) return initialData;
    return initialData.filter((report) => report.category === selectedReport);
  }, [selectedReport, initialData]);

  return {
    selectedReport,
    setSelectedReport,
    filteredData,
  };
}
