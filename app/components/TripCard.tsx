import Image from "next/image";
import RatingStart from "./RatingStar";

type TripCardProps = {
  data: {
    image: any;
    price: number;
    title: string;
    excerpt: string;
    rating: number;
    review: number;
    day: number;
  };
};

const TripCard = ({ data }: TripCardProps) => {
  return (
    <div
      className="
        border border-[#dce0e0] cursor-pointer
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(0,0,0,0.15)]
        group 
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={data.image}
          alt="card"
          className="rounded-md object-cover"
        />

        {/* PRICE */}
        <div className="absolute bottom-5 left-0 bg-[#FF4A52] text-white px-2.5 py-0.75 text-[15px] font-bold transition-all duration-200 group-hover:left-1.25 group-hover:z-10 group-hover:scale-[1.2]">
          $ {data?.price?.toLocaleString("en-US")}
        </div>
      </div>

      {/* INFO */}
      <div className="px-3.75 pt-1.25 pb-3.75 text-left">
        <h4 className="text-xl font-semibold">{data.title}</h4>

        <p className="text-[13px] py-2.25 pb-4.25 text-[#222]">
          {data.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs">
          <div className="flex flex-wrap items-center">
            <RatingStart rating={data.rating} />
            <span className="ml-1.25">{data.review} reviews</span>
          </div>

          <div>{data.day} days</div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
