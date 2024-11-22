export interface CampingProvider {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
  type: string;
  location: string;
  rating: number;
  amenities: string[];
  activities?: string[];
} 