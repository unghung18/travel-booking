"use client";
import useOverlay from "@/app/(main)/_components/hooks/useOverlay";
import { Camera, Play } from "lucide-react";

interface Props {
  imageUrl: string;
}

const TourDetailPageHeader = ({ imageUrl }: Props) => {
  const { showOverlay, hideOverlay, Overlay } = useOverlay();
  return (
    <div className="relative w-full h-137.5 overflow-hidden">
      {/* Background */}
      <div
        className="
          absolute inset-0
          bg-center bg-cover bg-no-repeat
          will-change-transform
        "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Overlay content */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-white w-full max-w-285 flex gap-5">
        <div
          className="py-2.5 px-5.5 bg-black/20 flex items-center gap-2 text-sm"
          onClick={() => showOverlay(<div>a</div>)}
        >
          <Camera size={16} />
          Views Photos
        </div>
        <div
          className="py-2.5 px-5.5 bg-black/20 flex items-center gap-2 text-sm"
          onClick={() => showOverlay(<div>a</div>)}
        >
          <Play size={16} />
          Video Preview
        </div>
      </div>
      <Overlay />
    </div>
  );
};

export default TourDetailPageHeader;
