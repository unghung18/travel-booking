import Image from "next/image";

const ArticleCard = ({ data }: { data: Partial<any> }) => {
  return (
    <div
      className="
        group cursor-pointer overflow-hidden rounded-[5px]
        border border-[#dce0e0]
        flex flex-col
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-[0_22px_40px_rgba(0,0,0,0.15)]
      "
    >
      {data?.image && (
        <div className="relative w-full h-56">
          <Image src={data.image} alt="card" fill className="object-cover" />
        </div>
      )}

      <div className="px-7.5 py-5 text-left">
        <div className="text-xs font-bold">{data.time}</div>

        <h6 className="text-xl font-extrabold my-1.25 mb-5">{data.title}</h6>

        <p className="text-[#222222] pb-5">{data.content}</p>

        <div
          className="
            flex items-center gap-1.75
          mt-3.75 mb-3.75
            opacity-50
            transition-opacity
            group-hover:opacity-100
          "
        >
          <span className="text-[#222222]">Read More</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3.75 h-3.75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
