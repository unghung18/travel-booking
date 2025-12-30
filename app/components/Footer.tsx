import awards from "@/app/assets/awards.png";
import Image from "next/image";

import recenttrip1 from "@/app/assets/footer-trip1.jpg";
import recenttrip2 from "@/app/assets/footer-trip2.jpg";
import recenttrip3 from "@/app/assets/footer-trip3.jpg";
import recenttrip4 from "@/app/assets/footer-trip4.jpg";
import recenttrip5 from "@/app/assets/footer-trip5.jpg";
import recenttrip6 from "@/app/assets/footer-trip6.jpg";

const Footer = () => {
  return (
    <footer className="mt-17.5 bg-black text-white py-12.5">
      {/* Widgets */}
      <ul className="grid grid-cols-1 gap-7.5 max-w-311.25 mx-auto px-5 md:grid-cols-3 md:px-7.5 lg:px-22.5">
        {/* Our Awards */}
        <li>
          <h2 className="my-2.5 text-lg">Our Awards</h2>
          <p className="py-2 text-[#CCCCCC] font-extralight">
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <Image src={awards} alt="awards" className="mt-7.5 w-61.5 h-28.25" />
        </li>

        {/* Contact Info */}
        <li>
          <h2 className="my-2.5 text-lg">Contact Info</h2>

          <p className="flex items-center py-2 text-[#CCCCCC] font-extralight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4.25 h-4.25 mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5"
              />
            </svg>
            1-567-124-44227
          </p>

          <p className="flex items-center py-2 text-[#CCCCCC] font-extralight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4.25 h-4.25 mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            184 Main Street East Perl Habour 8007
          </p>

          <p className="flex items-center py-2 text-[#CCCCCC] font-extralight">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4.25 h-4.25 mr-1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Mon - Sat 8.00 - 18.00 Sunday CLOSED
          </p>
        </li>

        {/* Recent Trips */}
        <li>
          <h2 className="my-2.5 text-lg">Recent Trips</h2>
          <ul className="grid grid-cols-3 gap-1.75">
            {[
              recenttrip1,
              recenttrip2,
              recenttrip3,
              recenttrip4,
              recenttrip5,
              recenttrip6,
            ].map((img, index) => (
              <li key={index} className="overflow-hidden rounded-[5px]">
                <Image src={img} alt="recent-trip" className="w-full h-auto" />
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* Footer Bar */}
      <div className="text-center pt-5 mt-5 border-t border-[#444]">
        © Copyright Grand Tour Theme Demo - Theme by ThemeGoods
      </div>
    </footer>
  );
};

export default Footer;
