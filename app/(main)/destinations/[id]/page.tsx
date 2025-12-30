import DestinationBg from "@/app/assets/destination-bg.jpg";
import BgHeader from "@/app/components/BgHeader";
import { BookmarkIcon } from "@/app/components/icons/BookMarkIcon";
import RelateTours from "@/app/components/RelateTours";
import { DestinationService } from "@/app/services/destinations";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  if (Number.isNaN(id)) {
    notFound();
  }

  const destination = await DestinationService.getById(Number(id));

  if (!destination) {
    notFound();
  }
  console.log("first");

  return (
    <div>
      <BgHeader
        label={destination?.data?.name}
        imageFile={DestinationBg}
        type="IMAGE"
      />

      <div className="px-22.5 max-md:px-7.5">
        {/* Related Tour */}
        <div className="max-w-311.25 mx-auto mt-10">
          <RelateTours />

          <div className="grid grid-cols-12 gap-10 mt-18 items-start">
            <div className="col-span-8">
              <div className="relative">
                <BookmarkIcon
                  className="absolute -translate-x-1/2 left-1/2 bg-white z-1 px-5"
                  size={25}
                />
                <div className="absolute -translate-x-1/2 left-1/2 border-b border-b-[#FF4A52] min-w-80 top-3"></div>
              </div>
              <h2 className="mt-15 text-2xl font-semibold text-start leading-10">
                {destination?.data?.title}
              </h2>

              <div className="space-y-7">
                {(destination?.data?.sections ?? []).map((item) => {
                  return (
                    <div key={item?.id} className="mt-10">
                      <h4 className="text-xl font-semibold">{item?.title}</h4>
                      <p className="mt-5">{item?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

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
