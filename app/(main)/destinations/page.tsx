import DestinationBgImage from "@/app/assets/destination-bg.jpg";
import BgHeader from "@/app/components/BgHeader";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <BgHeader>
        <Image
          src={DestinationBgImage}
          alt="bg-image"
          className="w-full h-137.5 bg-cover bg-no-repeat bg-center"
        />
      </BgHeader>
    </div>
  );
};

export default Page;
