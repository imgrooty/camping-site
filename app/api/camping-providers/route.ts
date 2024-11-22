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
  {
    id: '2',
    name: 'Lakeside Haven',
    description: 'Peaceful lakefront camping with water activities and fishing.',
    image: '/images/image.png',
    priceRange: '$40-70', 
    type: 'RV',
    location: 'Lake Tahoe, CA',
    rating: 4.8,
    amenities: ['Boat Launch', 'Electric Hookups', 'Showers', 'Fishing Pier']
  },
  {
    id: '3', 
    name: 'Forest Glen Retreat',
    description: 'Secluded forest camping perfect for nature lovers.',
    image: '/images/image.png',
    priceRange: '$25-45',
    type: 'Glamping',
    location: 'Redwood Forest, CA', 
    rating: 4.3,
    amenities: ['Hot Showers', 'Camp Store', 'Nature Trails', 'Wildlife Viewing']
  },
  {
    id: '4',
    name: 'Desert Oasis Camp',
    description: 'Unique desert camping experience under starlit skies.',
    image: '/images/image.png',
    priceRange: '$35-55',
    type: 'Tent',
    location: 'Mojave Desert, NV',
    rating: 4.6,
    amenities: ['Star Gazing Deck', 'Water Station', 'Guided Tours', 'Fire Rings']
  }
  ,
  {
    id: '5',
    name: 'Coastal Breeze Campground',
    description: 'Beachfront camping with ocean views and sea breezes.',
    image: '/images/image.png',
    priceRange: '$45-75',
    type: 'RV',
    location: 'Pacific Coast, OR',
    rating: 4.7,
    amenities: ['Beach Access', 'Full Hookups', 'Laundry', 'Beach Showers']
  },
  {
    id: '6', 
    name: 'Alpine Meadows',
    description: 'High-altitude camping surrounded by wildflower meadows.',
    image: '/images/image.png',
    priceRange: '$30-50',
    type: 'Tent',
    location: 'Swiss Alps, CO',
    rating: 4.4,
    amenities: ['Mountain Guides', 'Equipment Rental', 'Alpine Lodge', 'Hiking Trails']
  },
  {
    id: '7',
    name: 'River Rapids Resort',
    description: 'Riverside camping with whitewater rafting access.',
    image: '/images/image.png',
    priceRange: '$40-65',
    type: 'Glamping',
    location: 'Snake River, ID',
    rating: 4.6,
    amenities: ['Rafting Tours', 'River Access', 'Equipment Storage', 'Hot Tubs']
  },
  {
    id: '8',
    name: 'Prairie Wind Ranch',
    description: 'Working ranch with authentic western camping experience.',
    image: '/images/image.png',
    priceRange: '$35-60',
    type: 'RV',
    location: 'Kansas Plains, KS',
    rating: 4.3,
    amenities: ['Horseback Riding', 'Ranch Tours', 'Petting Zoo', 'Campfire Events']
  },
  {
    id: '9',
    name: 'Island Paradise Camp',
    description: 'Tropical camping experience on a private island.',
    image: '/images/image.png',
    priceRange: '$50-80',
    type: 'Glamping',
    location: 'Florida Keys, FL',
    rating: 4.9,
    amenities: ['Snorkeling', 'Kayak Rental', 'Beach Cabanas', 'Island Tours']
  },
  {
    id: '10',
    name: 'Northern Lights Lodge',
    description: 'Arctic camping with aurora viewing opportunities.',
    image: '/images/image.png',
    priceRange: '$60-90',
    type: 'Glamping',
    location: 'Fairbanks, AK',
    rating: 4.8,
    amenities: ['Heated Yurts', 'Aurora Viewing', 'Dog Sledding', 'Winter Gear']
  },
  {
    id: '11',
    name: 'Canyon Echo Campground',
    description: 'Camping along dramatic canyon walls with hiking access.',
    image: '/images/image.png',
    priceRange: '$35-55',
    type: 'Tent',
    location: 'Grand Canyon, AZ',
    rating: 4.5,
    amenities: ['Canyon Tours', 'Rock Climbing', 'Scenic Overlooks', 'Nature Center']
  },
  {
    id: '12',
    name: 'Vineyard Valley Camp',
    description: 'Camping among rolling hills and wine country.',
    image: '/images/image.png',
    priceRange: '$45-70',
    type: 'RV',
    location: 'Napa Valley, CA',
    rating: 4.7,
    amenities: ['Wine Tasting', 'Vineyard Tours', 'Gourmet Kitchen', 'Bike Rentals']
  }
];

export async function GET() {
  return NextResponse.json(mockProviders);
} 