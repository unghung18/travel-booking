import DestinationBgImage from "@/app/assets/destination-bg.jpg";
import BgHeader from "@/app/components/BgHeader";

const Page = () => {
  return (
    <div>
      <BgHeader
        label="Destination"
        desc="This is sample of page tagline and you can set it up using page option"
        file={DestinationBgImage}
        type="VIDEO"  
      />
      a
    </div>
  );
};

export default Page;
