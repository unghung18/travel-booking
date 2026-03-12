import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <>
      <section className="py-16 md:py-20 bg-[linear-gradient(238deg,#faf8f1,#f6f3ef_99.66%)] w-screen h-screen">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/not-found.webp"
              alt="Not found"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            {/* 404 */}
            <h1
              className="
              font-semibold
              text-[42px] leading-13
              sm:text-[80px] sm:leading-23
              lg:text-[140px] lg:leading-38
            "
            >
              404
            </h1>

            {/* Title */}
            <h2
              className="
              mt-4 font-semibold capitalize
              text-[22px] leading-7.5
              sm:text-[32px] sm:leading-10
              lg:text-[44px] lg:leading-12.5
            "
            >
              Something Is Missing.
            </h2>

            {/* Description */}
            <p
              className="
              mt-4 text-[16px] leading-6.5
              sm:text-[18px] sm:leading-7
              text-[#696c70]
            "
            >
              The page you are looking for cannot be found. Take a break before
              trying again.
            </p>

            {/* Button */}
            <Link
              href="/"
              className="
                mt-6 inline-flex items-center gap-3
                px-4 py-2
                bg-black text-white
                rounded-lg md:rounded-xl
                text-[13px] sm:text-base
                transition-all duration-300
                hover:bg-white hover:text-black hover:border hover:border-black
              "
            >
              <FaArrowLeftLong />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
