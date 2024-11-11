import { cn } from "@/lib/utils";

const Tag = ({ item, className }: { item: string; className?: string }) => {
  return (
    <span
      className={cn(
        "flex items-center justify-start md:gap-3 gap-2 rounded-md border border-[#CACACA] px-3 py-2 text-sm font-bold",
        className
      )}
    >
      <span className="w-3 h-3 rounded-full bg-green-500" />
      {item}
    </span>
  );
};

export default Tag;
