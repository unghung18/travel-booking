import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  length: number;
}
const DestinationListLoading = ({ length }: Props) => {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
      {Array.from({ length }).map((_, idx) => (
        <Skeleton className="h-75 w-full" key={idx} />
      ))}
    </div>
  );
};

export default DestinationListLoading;
