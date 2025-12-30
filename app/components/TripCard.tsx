import { ITour } from "@/app/services/tours/type";
import Image from "next/image";
import RatingStart from "./RatingStar";

const TripCard = (props: ITour) => {
  const {
    durationDays,
    durationNights,
    name,
    categories,
    basePrice,
    thumbnailUrl,
    reviews,
  } = props;

  const totalReview = (reviews ?? [])?.length ?? 0;
  const totalRating = (reviews ?? []).reduce(
    (sum, item) => sum + item.rating || 0,
    0
  );

  return (
    <div className="border border-[#dce0e0] cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(0,0,0,0.15)] group">
      {/* IMAGE */}
      <div className="relative w-full aspect-4/3">
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            alt="card"
            className="object-cover rounded-t-sm"
            fill
          />
        )}

        {/* PRICE */}
        <div className="absolute bottom-5 left-0 bg-[#FF4A52] text-white px-2.5 py-0.75 font-bold transition-all duration-200 group-hover:left-1.25 group-hover:z-10 group-hover:scale-[1.2]">
          $ {basePrice?.toLocaleString("en-US")}
        </div>
      </div>

      {/* INFO */}
      <div className="px-3.75 pt-3 pb-3.75 text-left">
        <h4 className="text-xl font-semibold">{name}</h4>

        <p className="text-sm py-2.25 pb-4.25 text-[#222]">
          {(categories ?? [])
            .map((item) => {
              return item?.name;
            })
            ?.toString()
            ?.replace(/,\s*/g, ", ")}
        </p>

        <div className="flex items-center justify-between text-xs">
          <div className="flex flex-wrap items-center">
            <RatingStart rating={totalRating} />
            <span className="ml-1.25">{totalReview} reviews</span>
          </div>

          <div className="flex items-center gap-1">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V12"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M16.24 16.24L12 12"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            {durationDays} days {durationNights} nights
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
