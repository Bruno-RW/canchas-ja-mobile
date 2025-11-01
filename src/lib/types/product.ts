export type Product = {
  id: string;
  images: string[];

  details: string;
  description: string;

  location: string;
  address: string;

  dateRange: string;
  price: number;

  currency: string;
  discountPercentage?: number;
  discountDuration?: number;

  rating: number;
  reviews: number;
}