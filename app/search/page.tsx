'use client'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
import CampingCard from '@/components/CampingCard';
import { CampingProvider } from '@/types/provider';

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
  const [providers, setProviders] = useState<CampingProvider[]>([]);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ priceRange: '', type: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('/api/camping-providers');
        if (!res.ok) {
          throw new Error('Failed to fetch providers');
        }
        const data = await res.json();
        setProviders(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch providers');
      } finally {
        setIsLoading(false);
      }
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
    <main className="min-h-screen bg-grey-500 p-8 md:p-40">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="container mx-auto p-4">
        <Filter
          filter={filters}
          setFilter={setFilters}
          className="mb-4"
        />
        <div className='p-10'>
          <h1 className="text-2xl font-bold text-gray-100 text-center mb-8">AVAILABLE CAMPS</h1>
          {isLoading && <p className="text-center text-white">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <CampingCard key={provider.id} provider={provider} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
