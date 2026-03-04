import DestinationDetailPageHeader from "@/app/(main)/destinations/_components/DestinationDetailPageHeader";
import DestinationList from "@/app/(main)/destinations/_components/DestinationList";
import DestinationListLoading from "@/app/(main)/destinations/_components/DestinationListLoading";
import { SearchParams } from "@/app/types";
import { Suspense } from "react";

const Page = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div>
      <DestinationDetailPageHeader />
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
