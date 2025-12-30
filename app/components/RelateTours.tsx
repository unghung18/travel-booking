import TripCard from "@/app/components/TripCard";
import { TourService } from "@/app/services/tours";

const RelateTours = async () => {
  const tours = await TourService.getPopular({
    page: 0,
    size: 3,
  });
  return (
    <div>
      <h2 className="text-start mb-7 p-1 border-b border-b-[#dce0e0] font-bold text-lg">
        Related Tours
      </h2>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
        {(tours?.content ?? []).map((item, idx: number) => {
          return <TripCard {...item} key={item?.id} />;
        })}
      </div>
    </div>
  );
};

export default RelateTours;
