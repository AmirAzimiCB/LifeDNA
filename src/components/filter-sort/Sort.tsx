"use client";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { sortOptions } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortSelect = ({ className }: { className?: string }) => {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsClone = new URLSearchParams(searchParams);

  return (
    <Select
      defaultValue={sortOptions[0].key}
      onValueChange={(newValue) => {
        paramsClone.set("sort", newValue);
        route.push(`${pathname}?${paramsClone.toString()}`);
      }}
    >
      <SelectTrigger className={cn("w-[180px]", className)}>
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((item, index) => {
          return (
            <SelectItem value={item.key} key={`sort-item-${index}`}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
