'use client'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
import { useRouter } from 'next/navigation';
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
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', type: '' });

  if (status === "authenticated") {
    redirect("/dashboard");
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
    <main className="min-h-screen flex flex-col relative">
          <section className="w-full h-screen px-4 py-24 bg-gradient-to-b from-gray-50 to-white" style={{textAlign: 'center', backgroundImage: 'url(/images/image.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex flex-col items-center">
              <Filter
                filter={filters}
                setFilter={setFilters}
                className="relative transform z-10 mb-4"
              />
            </div>
          </section>
        

        {/* Why Campspot Feature Section */}
        <section className="w-full px-1 py-8 bg-gradient-to-b from-gray-50 to-white" style={{backgroundImage: 'url(/images/back.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} >
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text text-white">
            Why SummerCamper?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 h-[50vh] max-w-7xl mx-auto px-4">
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
