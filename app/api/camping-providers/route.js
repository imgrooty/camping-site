// app/api/camping-providers.js

export async function GET() {
    const campingProviders = [
      {
        id: 1,
        name: 'Camp Wild',
        location: 'Forest Hills, NY',
        priceRange: '$$$',
        type: 'Tent Camping',
        rating: 4.5,
        image: 'https://source.unsplash.com/random?camping,tent',
      },
      {
        id: 2,
        name: 'Sunny Camp',
        location: 'Santa Monica, CA',
        priceRange: '$$',
        type: 'RV Camping',
        rating: 4.7,
        image: 'https://source.unsplash.com/random?camping,rv',
      },
      {
        id: 3,
        name: 'Mountain View Camp',
        location: 'Rocky Mountains, CO',
        priceRange: '$$$$',
        type: 'Luxury Camping',
        rating: 4.8,
        image: 'https://source.unsplash.com/random?camping,mountains',
      },
      {
        id: 4,
        name: 'Lakeside Haven',
        location: 'Lake Tahoe, NV',
        priceRange: '$$$',
        type: 'Glamping',
        rating: 4.6,
        image: 'https://source.unsplash.com/random?camping,lake',
      },
      {
        id: 5,
        name: 'Desert Oasis Camp',
        location: 'Sedona, AZ',
        priceRange: '$$',
        type: 'Tent Camping',
        rating: 4.4,
        image: 'https://source.unsplash.com/random?camping,desert',
      },
      {
        id: 6,
        name: 'Coastal Breeze',
        location: 'Big Sur, CA',
        priceRange: '$$$$',
        type: 'Luxury Camping',
        rating: 4.9,
        image: 'https://source.unsplash.com/random?camping,coast',
      },
      {
        id: 7,
        name: 'Pine Valley Resort',
        location: 'Portland, OR',
        priceRange: '$$$',
        type: 'RV Camping',
        rating: 4.3,
        image: 'https://source.unsplash.com/random?camping,forest',
      },
      {
        id: 8,
        name: 'Island Paradise Camp',
        location: 'Key West, FL',
        priceRange: '$$$',
        type: 'Beach Camping',
        rating: 4.7,
        image: 'https://source.unsplash.com/random?camping,beach',
      }
    ];
  
    return new Response(JSON.stringify(campingProviders), {
      status: 200,
    });
  }
  