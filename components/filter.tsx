'use client';  // Ensure the component is rendered on the client side only

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Filters {
  priceRange: string;
  type: string;
  guests: string;
  dates: string;
  amenities: string[];
}

interface FilterProps {
  filter: {
    priceRange: string;
    type: string;
  };
  setFilter: React.Dispatch<React.SetStateAction<{
    priceRange: string;
    type: string;
  }>>;
  className?: string;
}

export default function Filter({ filter, setFilter, className }: FilterProps) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    priceRange: filter.priceRange,
    type: filter.type,
    guests: '',
    dates: '',
    amenities: [],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setFilter({ ...filter, [name]: value });
  };

  const handleAmenityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Convert filters to URL search params
    const queryParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => queryParams.append(key, v));
        } else {
          queryParams.set(key, value);
        }
      }
    });

    // Navigate to search results page with filters
    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}
      className="space-y-4 p-6 m-5 bg-[#f6f5f5] rounded-lg shadow-lg border border-[#00FF9C]/20 
                     backdrop-blur-sm">
      <div className="flex flex-wrap gap-4">
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="px-4 py-2.5 bg-[#CEDF9F] border-2 border-[#00FF9C]/40 rounded-lg text-black 
                   hover:border-[#01FF9C] focus:border-[#FFE700] focus:ring-2 focus:ring-[#FFE700]/20 
                   transition-all duration-200 cursor-pointer outline-none min-w-[200px]
                   hover:shadow-[0_0_15px_rgba(0,255,156,0.15)]"
        >
          <option value="">Price Range</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="px-4 py-2.5 bg-[#CEDF9F] border-2 border-[#00FF9C]/40 rounded-lg text-black 
                   hover:border-[#01FF9C] focus:border-[#FFE700] focus:ring-2 focus:ring-[#FFE700]/20 
                   transition-all duration-200 cursor-pointer outline-none min-w-[200px]
                   hover:shadow-[0_0_15px_rgba(0,255,156,0.15)]"
        >
          <option value="">Accommodation Type</option>
          <option value="Tent Camping">Tent Camping</option>
          <option value="RV Camping">RV Camping</option>
          <option value="Luxury Camping">Luxury Camping</option>
        </select>

        <input
          type="number"
          name="guests"
          value={filters.guests}
          onChange={handleChange}
          placeholder="Number of guests"
          min="1"
          className="px-4 py-2.5 bg-[#CEDF9F] border-2 border-[#00FF9C]/40 rounded-lg text-black 
                   hover:border-[#01FF9C] focus:border-[#FFE700] focus:ring-2 focus:ring-[#FFE700]/20 
                   transition-all duration-200 outline-none min-w-[200px]
                   placeholder:text-black/50 hover:shadow-[0_0_15px_rgba(0,255,156,0.15)]"
        />

        <input
          type="date"
          name="dates"
          value={filters.dates}
          onChange={handleChange} 
          className="px-4 py-2.5 bg-[#CEDF9F] border-2 border-[#00FF9C]/40 rounded-lg text-black 
                   hover:border-[#01FF9C] focus:border-[#FFE700] focus:ring-2 focus:ring-[#FFE700]/20 
                   transition-all duration-200 outline-none min-w-[200px]
                   [&::-webkit-calendar-picker-indicator]:filter 
                   [&::-webkit-calendar-picker-indicator]:invert-0
                   hover:shadow-[0_0_15px_rgba(0,255,156,0.15)]"
        />
      </div>

      <div className="space-y-2 w-full">
        <p className="text-black font-medium">Amenities:</p>
        <div className="flex flex-wrap gap-4">
          {['WiFi', 'Shower', 'Firepit', 'Parking'].map(amenity => (
            <label key={amenity} className="flex items-center space-x-2 text-black hover:text-black/80
                                          transition-colors duration-200 cursor-pointer">
              <input
                type="checkbox"
                value={amenity}
                onChange={handleAmenityChange}
                checked={filters.amenities.includes(amenity)}
                className="rounded border-[#00FF9C]/40 text-[#FFE700] focus:ring-[#FFE700]/20
                         checked:bg-[#00FF9C] checked:hover:bg-[#00FF9C]/90
                         bg-[#004c37]"
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 bg-gradient-to-r from-[#00FF9C] to-[#FFE700] text-black rounded-lg 
                 hover:from-[#00FF9C]/90 hover:to-[#FFE700]/90 
                 transition-all duration-200 font-semibold shadow-md hover:shadow-lg
                 hover:shadow-[#00FF9C]/20 text-lg"
      >
        Find Your Perfect Campsite
      </button>
    </form>
  );
}
