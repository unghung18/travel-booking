import Image from "next/image";
import Link from "next/link";
type props = {
  id?: number;
  title: string;
  image: any;
};
const DestinationCard = ({ id, title, image }: props) => {
  return (
    <Link
      href={`/destinations/${id}`}
      className="
        relative h-75 overflow-hidden rounded-[5px] cursor-pointer
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(0,0,0,0.15)]
       max-md:h-45
      "
    >
      <Image
        src={image}
        alt="card"
        fill
        className="object-cover brightness-[0.8]"
      />

      <h2
        className="
          absolute bottom-0 left-0
          px-3.75 pb-3.75 pt-1.25
          text-white font-extrabold
        "
      >
        {title}
      </h2>
    </Link>
  );
};

export default DestinationCard;
