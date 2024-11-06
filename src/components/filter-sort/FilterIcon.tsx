import { cn } from "@/lib/utils";

const FilterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className={cn("w-6 h-6", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11H17V13H7V11ZM4 7H20V9H4V7ZM10 15H14V17H10V15Z"
        fill="black"
      />
    </svg>
  );
};

export default FilterIcon;
