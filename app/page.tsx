'use client'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { imageData } from './api/mock/imageData';

interface FilterProps {
  filter: {
    priceRange: string;
    type: string;
  };
  setFilter: React.Dispatch<React.SetStateAction<{
    priceRange: string;
    type: string;
  }>>;
}



import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', type: '' });


  useEffect(() => {
    const fetchProviders = async () => {
      const res = await fetch('/api/camping-providers');
      const data = await res.json();
      setProviders(data);
    };
    fetchProviders();
  }, []);

  const filteredProviders = providers.filter((provider) => {
    return (
      provider.name.toLowerCase().includes(query.toLowerCase()) &&
      (filters.priceRange ? provider.priceRange === filters.priceRange : true) &&
      (filters.type ? provider.type === filters.type : true)
    );
  });

  const [imageIndices] = useState({
    campingWay: Math.floor(Math.random() * 3),
    savings: Math.floor(Math.random() * 3),
    weather: Math.floor(Math.random() * 3),
    glamping: Math.floor(Math.random() * 3),
    cabin: Math.floor(Math.random() * 3),
    rv: Math.floor(Math.random() * 3)
  });

  return (
    <main className="min-h-screen flex flex-col relative">
      <section className="w-full h-screen px-4 py-24 bg-gradient-to-b from-gray-50 to-white" style={{ textAlign: 'center', backgroundImage: 'url(/images/image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col items-center">
          <Filter
            filter={filters}
            setFilter={setFilters}
            className="relative transform z-10 mb-4"
          />
        </div>
      </section>


      {/* Why Campspot Feature Section */}
        <section className="w-full px-4 py-16 bg-gradient-to-b from-gray-50 to-white" style={{ backgroundImage: 'url(/images/back.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h2 className="text-4xl font-bold text-white text-center mb-16 gradient-text">
            Why SummerCamper?
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Camping, Your Way */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.campingWay[imageIndices.campingWay]}
                  alt="Camping Your Way"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      Camping, Your Way
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      From RV resorts to glamping tents to cozy cabins, use filters to choose
                      from over 230K sites and instantly book the perfect camping spot for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serious Savings */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.savings[imageIndices.savings]}
                  alt="Serious Savings"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      Serious Savings
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      SummerCamper is free to use — no membership required. Explore the latest
                      camping discounts and deals and apply your promo code at checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Protection */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.weather[imageIndices.weather]}
                  alt="Weather Protection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      Weather Protection
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add a sensible weather guarantee to any eligible trip and get reimbursed
                      for up to 100% of your reservation cost in the event of unexpected weather.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation Types Section */}
          <h2 className="text-4xl py-10 text-white font-bold text-center mb-16 gradient-text">
            Discover Your Perfect Stay
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Glamping */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.glamping[imageIndices.glamping]}
                  alt="Luxury Glamping"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      Luxury Glamping
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Experience nature without compromising comfort in our premium glamping tents,
                      complete with luxury amenities and stunning views.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cozy Cabins */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.cabin[imageIndices.cabin]}
                  alt="Cozy Cabins"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      Cozy Cabins
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Our rustic yet modern cabins offer the perfect blend of wilderness and comfort,
                      ideal for family getaways or romantic retreats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RV Sites */}
            <div className="group hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageData.rv[imageIndices.rv]}
                  alt="RV Sites"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                      RV Sites
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Spacious, full-hookup RV sites with modern amenities and easy access to all our
                      campground facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
