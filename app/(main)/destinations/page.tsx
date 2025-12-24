import DestinationBg from "@/app/assets/destination-bg.jpg";
import BgHeader from "@/app/components/BgHeader";
import DestinationCard from "@/app/components/DestinationCard";
import { destinationData } from "@/constant";

const Page = () => {
  return (
    <div>
      <BgHeader
        label="Destination"
        desc="This is sample of page tagline and you can set it up using page option"
        videoKey={"9HTEZkTA11Q"}
        imageFile={DestinationBg}
        type="VIDEO"
      />
      <div className="max-w-311.25 mx-auto px-22.5 max-md:px-7.5 text-center mt-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
            {destinationData.map((item, idx) => (
              <DestinationCard key={idx} {...item} />
            ))}
          </div>
          <div className="col-span-3 bg-red-500">a</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
