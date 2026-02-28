import TourList from "@/app/(main)/tours/_components/TourList";
import TourListLoading from "@/app/(main)/tours/_components/TourListLoading";
import DestinationBg from "@/app/assets/destination-bg.jpg";
import { SearchParams } from "@/app/types";
import Image from "next/image";
import { Suspense } from "react";

const Page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div>
      <div className="w-full h-137.5 relative overflow-hidden">
        <Image
          src={DestinationBg}
          alt="bg-image"
          className="w-full h-full bg-cover bg-no-repeat bg-center"
        />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white w-full max-w-356.25 mx-auto px-22.5 max-md:px-7.5">
          <h1 className="text-[40px] font-bold">Tour</h1>
        </div>
      </div>
      <div className="px-22.5 max-md:px-7.5">
        <div className="max-w-311.25 mx-auto text-center mt-10">
          <Suspense fallback={<TourListLoading length={12} />}>
            <TourList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
