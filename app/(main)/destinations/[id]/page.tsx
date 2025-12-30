import DestinationBg from "@/app/assets/destination-bg.jpg";
import BgHeader from "@/app/components/BgHeader";
import { BookmarkIcon } from "@/app/components/icons/BookMarkIcon";
import RelateTours from "@/app/components/RelateTours";
import { DestinationService } from "@/app/services/destinations";
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

              <div>
                {(destination?.data?.sections ?? []).map((item) => {
                  return (
                    <div key={item?.id}>
                      <h4>{item?.title}</h4>
                      <p>{item?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-red-400 col-span-4 p-6 sticky top-5"></div>
          </div>

          <div className="h-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
