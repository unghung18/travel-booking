import TourDetailPageHeader from "@/app/(main)/tours/_components/TourDetailPageHeader";
import { TourService } from "@/app/services/tours";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const idNumber = Number(id);
  if (Number.isNaN(idNumber)) {
    notFound();
  }

  const tour = await TourService.getById(Number(id));

  if (!tour) {
    notFound();
  }

  return (
    <div>
      <TourDetailPageHeader imageUrl={tour?.data?.thumbnailUrl} />

      <div className="px-22.5 max-md:px-7.5">
        {/* Related Tour */}
        <div className="max-w-311.25 mx-auto mt-10">
          <div className="grid grid-cols-12 gap-10 mt-18 items-start">
            <div className="col-span-8"></div>

            <div className="col-span-4 p-6 sticky top-20 rounded-sm space-y-8">
              <div className="border border-[#dce0e0] rounded-sm p-5">
                <h2 className="text-lg font-bold border-b border-b-[#dce0e0]">
                  Travel Tips
                </h2>

                <div className="flex flex-col gap-10 mt-7">
                  {[1, 2, 3].map((item) => {
                    return (
                      <div key={item} className="flex items-center gap-2 ">
                        <div className="h-17 w-17 bg-amber-500 rounded-full shrink-0 "></div>
                        <div>
                          <Link href={"/"} className="font-semibold">
                            Memorial Day to Someone Told Me to Travel
                          </Link>
                          <span className="block mt-2 text-xs text-[#999999] font-semibold">
                            December 10, 2016
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border border-[#dce0e0] rounded-sm p-5">
                <h2 className="text-lg font-bold border-b border-b-[#dce0e0]">
                  Recent Trip
                </h2>

                <div className="grid grid-cols-3 gap-x-7 gap-y-3 mt-7">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                    return (
                      <div
                        key={item}
                        className="h-25 w-25 bg-blue-200 rounded-md"
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="h-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
