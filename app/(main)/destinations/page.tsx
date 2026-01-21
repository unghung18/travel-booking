import BgHeader from "@/app/(main)/_components/BgHeader";
import DestinationList from "@/app/(main)/destinations/_components/DestinationList";
import DestinationListLoading from "@/app/(main)/destinations/_components/DestinationListLoading";
import DestinationBg from "@/app/assets/destination-bg.jpg";
import { SearchParams } from "@/app/types";
import { Suspense } from "react";

const Page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div>
      <BgHeader
        label="Destination"
        desc="This is sample of page tagline and you can set it up using page option"
        videoKey={"9HTEZkTA11Q"}
        imageFile={DestinationBg}
        type="VIDEO"
      />
      <div className="px-22.5 max-md:px-7.5">
        <div className="max-w-311.25 mx-auto text-center mt-10">
          <Suspense fallback={<DestinationListLoading length={12} />}>
            <DestinationList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Page;
