import article1 from "@/app/assets/article1.jpg";
import article2 from "@/app/assets/article2.jpeg";
import article3 from "@/app/assets/article3.jpg";

import california from "@/app/assets/california.jpg";
import hongkong from "@/app/assets/hongkong.jpeg";
import kyoto from "@/app/assets/kyoto.jpeg";
import london from "@/app/assets/london.jpg";
import miami from "@/app/assets/miami.jpg";
import paris from "@/app/assets/paris.jpg";
import prague from "@/app/assets/prague.jpg";
import rome from "@/app/assets/rome.jpg";
import santorini from "@/app/assets/santorini.jpg";
import seul from "@/app/assets/seul.jpg";
import tokyo from "@/app/assets/tokyo.jpg";
import venice from "@/app/assets/venice.jpg";

import trip1 from "@/app/assets/trip1.jpeg";
import trip2 from "@/app/assets/trip2.jpeg";
import trip3 from "@/app/assets/trip3.jpeg";
import { StaticImageData } from "next/image";

export const destinationData = [
  {
    title: "Tokyo",
    image: tokyo,
  },
  {
    title: "Seoul",
    image: seul,
  },
  {
    title: "Paris",
    image: paris,
  },
  {
    title: "London",
    image: london,
  },
  {
    title: "Venice",
    image: venice,
  },
  {
    title: "Miami",
    image: miami,
  },
  {
    title: "Rome",
    image: rome,
  },
  {
    title: "Prague",
    image: prague,
  },
  {
    title: "California",
    image: california,
  },
  {
    title: "Kyoto",
    image: kyoto,
  },
  {
    title: "Hong Kong",
    image: hongkong,
  },
  {
    title: "Santorini",
    image: santorini,
  },
];

export const tripdata = [
  {
    image: trip1,
    price: 5000,
    title: "French Autumn",
    excerpt: "City Tours, Urban",
    rating: 4,
    review: 4,
    day: 5,
  },
  {
    image: trip2,
    price: 6000,
    title: "Grand Switzerland",
    excerpt: "Shopping, Mountain, Snow & Ice",
    rating: 4,
    review: 4,
    day: 6,
  },
  {
    image: trip3,
    price: 5000,
    title: "Discover Japan",
    excerpt: "City Tours, Iconic",
    rating: 4,
    review: 4,
    day: 5,
  },
];

export type articleDataProps = {
  image: StaticImageData;
  time: string;
  title: string;
  content: string;
};

export const articleData: articleDataProps[] = [
  {
    image: article1,
    time: "DECEMBER 10, 2016",
    title: "Memorial Day to Someone Told Me to Travel",
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
  },
  {
    image: article2,
    time: "DECEMBER 10, 2016",
    title: "7 Tips For Nomads On A Budget Trips",
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
  },

  {
    image: article3,
    time: "DECEMBER 10, 2016",
    title: "Taking A Travel Blog Victory Lap",
    content:
      "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...",
  },
];
