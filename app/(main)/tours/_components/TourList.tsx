import CorePagination from "@/app/(main)/_components/atoms/CorePagination";
import TripCard from "@/app/(main)/_components/TripCard";
import { TourService } from "@/app/services/tours";
import { SearchParams } from "@/app/types";

const TourList = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams;

  const page = Math.max(0, Number(params.page ?? 0));
  const size = Math.max(0, Number(params.size ?? 12));

  const tours = await TourService.getAll({
    page,
    size,
  });

  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
        {(tours?.content ?? []).map((item, idx) => (
          <TripCard key={idx} {...item} />
        ))}
      </div>

      <CorePagination
        totalElement={tours?.totalElements}
        size={tours?.page}
        totalPages={tours?.totalPages}
        className="mt-10"
      />
    </>
  );
};

export default TourList;
