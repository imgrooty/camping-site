'use client'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';

import { useRouter } from 'next/router'; // Corrected import from next/router
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

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
  const session = useSession()
  const [providers, setProviders] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', type: '' });

  if(session){
    redirect("/dashboard")
  }

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



  return (
    <main>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96">
            <svg viewBox="0 0 200 200" className="text-white fill-current">
              <path d="M45.3,-59.1C57.4,-49.2,65.1,-33.4,69.6,-16.5C74.1,0.4,75.3,18.5,68.4,32.6C61.5,46.7,46.4,56.8,30.4,62.2C14.4,67.6,-2.5,68.3,-19.7,64.3C-36.9,60.3,-54.3,51.6,-65.8,37C-77.3,22.4,-82.8,1.9,-78.5,-15.5C-74.1,-32.9,-59.8,-47.2,-44.5,-56.6C-29.2,-65.9,-12.9,-70.3,2.5,-73.5C17.9,-76.7,33.2,-68.9,45.3,-59.1Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96">
            <svg viewBox="0 0 200 200" className="text-white fill-current">
              <path d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.4,18.7C51.4,29.4,41.4,38.8,30.1,44.1C18.8,49.4,6.2,50.7,-7.7,50.5C-21.5,50.3,-36.7,48.7,-48.8,41C-61,33.3,-70.2,19.5,-71.6,4.8C-73,-9.9,-66.5,-25.4,-56,-37.1C-45.4,-48.8,-30.8,-56.6,-15.9,-61.5C-1,-66.4,14.2,-68.4,28,-66.5C41.8,-64.7,54.2,-59,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white z-10">
              <h1 className="text-5xl text-black font-bold mb-4 leading-tight">
                Discover Your Perfect Camping Adventure
              </h1>
              <p className="text-xl text-black mb-8 text-green-100">
                Find and book the best camping spots across the country. From rustic campsites 
                to luxury glamping experiences.
              </p>
            </div>
            <div className="relative hidden md:block">
              {/* Hero Images */}
              <div className="relative w-full h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-lg backdrop-blur-lg p-4 shadow-xl">
                  <img 
                    src="/camping-1.jpg" 
                    alt="Camping Site" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-lg backdrop-blur-lg p-4 shadow-xl">
                  <img 
                    src="/camping-2.jpg" 
                    alt="Camping Experience" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  return (
    <main className="min-h-screen flex flex-col relative">
          <section className="w-full h-screen px-4 py-24 bg-gradient-to-b from-gray-50 to-white" style={{textAlign: 'center', backgroundImage: 'url(/images/image.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <p className="text-black text-lg" >
            <Filter
          filter={filters}
          setFilter={setFilters}
          className="relative top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        />
            Discover and book the best campgrounds, RV parks, cabins,<br />
            glamping, and more.
          </p>
        </section>
        

        {/* Why Campspot Feature Section */}
        <section className="w-full px-4 py-24 bg-gradient-to-b from-gray-50 to-white">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Why SummerCamper?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
            {/* Camping, Your Way */}
            <div className="neumorphic-card">
              <div className="neumorphic-icon">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Camping, Your Way</h3>
              <p className="text-gray-600 leading-relaxed">
                From RV resorts to glamping tents to cozy cabins, use filters to choose 
                from over 230K sites and instantly book the perfect camping spot for you.
              </p>
            </div>

            {/* Serious Savings */}
            <div className="neumorphic-card">
              <div className="neumorphic-icon">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Serious Savings</h3>
              <p className="text-gray-600 leading-relaxed">
                Campspot is free to use — no membership required. Explore the latest{' '}
                <a href="#" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                  camping discounts and deals
                </a>{' '}
                and apply your promo code at checkout.
              </p>
            </div>

            {/* Weather Protection */}
            <div className="neumorphic-card">
              <div className="neumorphic-icon">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Weather Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Add a sensible weather guarantee to any eligible trip and get reimbursed 
                for up to 100% of your reservation cost in the event of unexpected weather.
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
