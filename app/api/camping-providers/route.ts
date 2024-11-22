import { NextResponse } from 'next/server';

const mockProviders = [
  {
    id: '1',
    name: 'Mountain Vista Campground',
    description: 'Scenic mountain camping with stunning views and modern amenities.',
    image: '/images/image.png', 
    priceRange: '$30-50',
    type: 'Tent',
    location: 'Rocky Mountains, CO',
    rating: 4.5,
    amenities: ['Showers', 'Wifi', 'Fire Pits', 'Hiking Trails']
  },
  // Add more mock data as needed
];

export async function GET() {
  return NextResponse.json(mockProviders);
} 