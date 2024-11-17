import { Skeleton } from "@/components/ui/skeleton";

export default function GameLoading() {
  return (
    <div className="mt-4 flex flex-wrap">
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
      <div className="w-1/3 p-1">
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
    </div>
  );
}
