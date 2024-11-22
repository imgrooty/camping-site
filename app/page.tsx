// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import CampingCard from '@/components/campingcards';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
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

      {/* Features Section */}  
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Verified Locations</h3>
              <p className="text-gray-600 text-center">All camping sites are personally verified for quality and safety, ensuring a worry-free outdoor experience.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Best Price Guarantee</h3>
              <p className="text-gray-600 text-center">Find the best deals and competitive prices for your camping trip with our price match promise.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">24/7 Support</h3>
              <p className="text-gray-600 text-center">Our dedicated customer support team is always available to assist you with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto p-4">
        <SearchBar query={query} setQuery={setQuery} />
        <Filter filters={filters} setFilters={setFilters} />
        <div className="flex flex-wrap gap-4">
          {filteredProviders.map((provider) => (
            <CampingCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </main>
  );
}
