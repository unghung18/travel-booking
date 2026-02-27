"use client";
import Image from "next/image";

interface Props {
  imageUrl: string;
}

const TourDetailPageHeader = ({ imageUrl }: Props) => {
  return (
    <div className="w-full h-137.5 relative overflow-hidden">
      <Image
        src={imageUrl}
        alt="bg-image"
        className="w-full h-full bg-cover bg-no-repeat bg-center"
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white w-full max-w-356.25 mx-auto px-22.5 max-md:px-7.5">
        <h1 className="text-[40px] font-bold">Tour</h1>
      </div>
    </div>
  );
};

export default TourDetailPageHeader;
