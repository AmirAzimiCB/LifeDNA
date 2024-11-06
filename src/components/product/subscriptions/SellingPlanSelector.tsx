import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function SellingPlanSelector({
  children,
  sellingPlanGroups,
  selectedSellingPlan,
  paramKey = "selling_plan",
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  return useMemo(
    () =>
      sellingPlanGroups.nodes.map((sellingPlanGroup) => {
        // Augment each sellingPlan node with isSelected and url
        const sellingPlans = sellingPlanGroup.sellingPlans.nodes
          .map((sellingPlan) => {
            if (!sellingPlan?.id) {
              console.warn(
                "SellingPlanSelector: sellingPlan.id is missing in the product query"
              );
              return null;
            }
            if (!sellingPlan.id) return null;
            params.set(paramKey, sellingPlan.id);
            sellingPlan.isSelected = selectedSellingPlan?.id === sellingPlan.id;
            sellingPlan.url = `${pathname}?${params.toString()}`;
            return sellingPlan;
          })
          .filter(Boolean);
        sellingPlanGroup.sellingPlans.nodes = sellingPlans;
        return children({ sellingPlanGroup, selectedSellingPlan });
      }),
    [
      children,
      paramKey,
      params,
      pathname,
      selectedSellingPlan,
      sellingPlanGroups,
    ]
  );
}

export default SellingPlanSelector;
