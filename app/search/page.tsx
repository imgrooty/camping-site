'use client'
import { useEffect, useState } from 'react';
import CampingCard from '@/components/campingcards';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
import { useRouter } from 'next/router'; // Corrected import from next/router

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

export default function Home() {
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

  return (
    <main className="bg-cyan-500 justify-center p-40">
<SearchBar query={query} setQuery={setQuery} />
      {/* Search Section */}
      <div className="container p-4">
        
        <Filter
          filter={filters}
          setFilter={setFilters}
          className="mb-4"
        />
        {/* search results */}
        <div className='p-10 items-center justify-center'>
          <h1 className="text-2xl flex font-bold text-gray-100 text-center">AVAILABLE CAMPS</h1>
          <div className="flex flex-wrap justify-between mx-auto gap-4 items-center">
            {filteredProviders.map((provider) => (
              <CampingCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
