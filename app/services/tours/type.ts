export type DiscountType = "PERCENTAGE" | "FIXED";

interface TourSale {
  id: number;
  discountType?: DiscountType | null;
  discountValue?: number | null;
  startAt?: string | null;
  endAt?: string | null;
  isActive: boolean;
}

export interface ITour {
  id: number;
  code: string;
  name: string;
  summary: string;
  description: string;
  durationDays: number;
  durationNights: number;
  basePrice: number;
  maxPeople: number;
  minAge: number;
  sale: TourSale;
  imageUrls: string[];
  thumbnailUrl: string;
  destinations: Destination[];
  categories: Category[];
  info: Info;
  active: boolean;
  featured: boolean;
  reviews: Review[];
}

export interface Category {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
}

export interface Destination {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  code: string;
  name: string;
  title: string;
  bannerUrl: string;
  thumbnailUrl: string;
  description: string;
}

export interface Info {
  id: number;
  tourId: number;
  departure: null;
  departureTime: string;
  returnTime: string;
  included: string[];
  notIncluded: string[];
  map: string;
}

export interface Review {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  tourId: number;
  userId: number;
  rating: number;
  comment: string;
}
