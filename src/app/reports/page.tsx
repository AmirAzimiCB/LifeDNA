import { Reports } from "@/components/pages/reports";

export default function page({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const queryParam = searchParams.id || "";
  return <Reports queryParam={queryParam} />;
}
