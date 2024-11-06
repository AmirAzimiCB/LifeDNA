import { cn } from "@/lib/utils";

const LoadingDots = ({ className }: { className?: string }) => {
  return (
    <span className="items-center inline-flex mx-2">
      <span
        className={cn(
          "w-1 h-1 mx-[1px] inline-flex rounded-sm bg-black animate-pulse",
          className
        )}
      />
      <span
        className={cn(
          "w-1 h-1 mx-[1px] inline-flex rounded-sm bg-black animate-pulse",
          "delay-200",
          className
        )}
      />
      <span
        className={cn(
          "w-1 h-1 mx-[1px] inline-flex rounded-sm bg-black animate-pulse",
          "delay-400",
          className
        )}
      />
    </span>
  );
};

export default LoadingDots;
