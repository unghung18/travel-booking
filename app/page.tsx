import Image from "next/image";
import React from "react";

import feature1 from "@/app/assets/feature1.png";
import feature2 from "@/app/assets/feature2.png";
import feature3 from "@/app/assets/feature3.png";
import photo from "@/app/assets/photo.jpg";

import { DestinationService } from "@/app/services/destinations";
import { articleData } from "@/constant";
import ArticleCard from "./components/ArticleCard";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StandardForm from "./components/StandardForm";

export default async function Home() {
  const destinations = await DestinationService.getPopular({
    page: 0,
    size: 4,
  });

  return (
    <div className="relative">
      {/* MAIN CONTENT */}
      <div className={`transition-all duration-200`}>
        <Navbar />
        {/* Header*/}
        <div className="w-full h-screen overflow-hidden">
          <div className="relative w-full h-full">
            <video
              className="w-full h-full object-cover"
              preload="auto"
              playsInline
              autoPlay
              muted
              loop
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
            </video>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-356.25 mx-auto px-22.5 max-md:px-7.5">
              <h2 className="text-4xl font-bold">Where do you want to go?</h2>
              <div className="mt-2 text-base opacity-90">
                Trips, experiences, and places. All in one service.
              </div>
              <StandardForm />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="px-22.5 max-lg:px-7.5">
          <Section
            title="Popular Destinations"
            subtitle="World's best tourist destinations"
          >
            <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1">
              {(destinations?.content ?? []).map((item, idx: number) => (
                <DestinationCard key={idx} {...item} />
              ))}
            </div>
          </Section>
          <Section
            title="Best Value Trips"
            subtitle="Best offers trips from us"
          >
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              {/* {tripdata.map((item, i) => (
                <TripCard key={i} data={item} />
              ))} */}
            </div>
          </Section>
          <Section
            title="Why Choose Us"
            subtitle="Here are reasons you should plan trip with us"
          >
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              {[feature1, feature2, feature3].map((img, i) => (
                <div key={i} className="mb-10 text-center">
                  <Image
                    src={img}
                    alt="feature"
                    className="mx-auto w-35 h-35"
                  />
                  <h4 className="pt-5 text-xl font-extrabold">Feature Title</h4>
                  <p className="py-3 text-[#222]">
                    Lorem ipsum dolor sit amet, consect adipiscing elit.
                  </p>
                </div>
              ))}
            </div>
          </Section>
          <div className="max-w-311.25 mx-auto px-22.5 max-md:px-7.5">
            <Image src={photo} alt="photo" />
          </div>
          <Section
            title="Articles & Tips"
            subtitle="Explore some of the best tips from around the world"
          >
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              {articleData.map((item, i) => (
                <ArticleCard key={i} data={item} />
              ))}
            </div>
          </Section>
        </div>

        <Footer />
      </div>
    </div>
  );
}

/* =================== */
/* SECTION COMPONENT */
/* =================== */
const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <section className="max-w-311.25 mx-auto text-center">
    <div className="mt-17.5 mb-12.5 max-md:my-10">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="text-[#8D9199]">{subtitle}</div>
    </div>
    {children}
  </section>
);
