'use client'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import Filter from '@/components/filter';
import { useRouter } from 'next/router'; // Corrected import from next/router
import { image } from 'framer-motion/client';

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
    <main className=" relative justify-center m-80 ">
      {/* Search Section */} 
        <Filter
          filter={filters}
          setFilter={setFilters}
          className="mb-4 m-100"
        />
    </main>
  );
}
