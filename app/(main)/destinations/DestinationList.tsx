import CorePagination from "@/app/components/atoms/CorePagination";
import DestinationCard from "@/app/components/DestinationCard";
import { DestinationService } from "@/app/services/destinations";
import { SearchParams } from "@/app/types";

const DestinationList = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const params = await searchParams;

  const page = Math.max(0, Number(params.page ?? 0));
  const size = Math.max(0, Number(params.size ?? 12));

  const destinations = await DestinationService.getAll({
    page,
    size,
  });

  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
        {(destinations?.content ?? []).map((item, idx) => (
          <DestinationCard key={idx} {...item} />
        ))}
      </div>

      <CorePagination
        totalElement={destinations?.totalElements}
        size={destinations?.page}
        totalPages={destinations?.totalPages}
        className="mt-10"
      />
    </>
  );
};

export default DestinationList;
