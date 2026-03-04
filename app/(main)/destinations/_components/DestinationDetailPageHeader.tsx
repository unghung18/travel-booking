"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

import DestinationBg from "@/app/assets/destination-bg.jpg";

const DestinationDetailPageHeader = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="w-full h-137.5 relative overflow-hidden">
      <Image
        src={DestinationBg}
        alt="bg-image"
        fill
        priority
        className={`
            object-cover
            transition-opacity duration-700
            ${videoLoaded ? "opacity-0" : "opacity-100"}
          `}
      />
      <iframe
        className={clsx(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen w-[177.78vh] h-[100vw] pointer-events-none",
        )}
        src={`https://www.youtube.com/embed/9HTEZkTA11Q?autoplay=1&mute=1&controls=0&loop=1&playlist=9HTEZkTA11Q&modestbranding=1&playsinline=1`}
        allow="autoplay"
        onLoad={() => setVideoLoaded(true)}
      />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white w-full max-w-356.25 mx-auto px-22.5 max-md:px-7.5">
        <h1 className="text-[40px] font-bold">Destination</h1>
        <div className="mt-2 text-base opacity-90">
          This is sample of page tagline and you can set it up using page option
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPageHeader;
