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

  // Update price range options to match the data format
  const priceRanges = [
    { label: '$30-50', value: '$30-50' },
    { label: '$51-100', value: '$51-100' },
    { label: '$101+', value: '$101-plus' }
  ];

  // Update accommodation types to match the data
  const accommodationTypes = [
    { label: 'Tent', value: 'Tent' },
    { label: 'RV', value: 'RV' },
    { label: 'Luxury', value: 'Luxury' }
  ];

  // Update amenities to match the data
  const availableAmenities = ['Showers', 'Wifi', 'Fire Pits', 'Hiking Trails'];

  return (
    <form onSubmit={handleSubmit}
      className="space-y-4 p-4 sm:p-8 m-2 sm:m-5 bg-[#f6f5f5]/70 rounded-2xl shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] 
                border border-[#00FF9C]/10 backdrop-blur-md max-w-[95vw] mx-auto
                md:max-w-none">
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="w-full md:w-auto px-4 py-2.5 bg-[#CEDF9F]/80 backdrop-blur-sm rounded-xl 
                    shadow-[inset_5px_5px_10px_#a6b27f,inset_-5px_-5px_10px_#f6ffbf]
                    border-none text-black transition-all duration-200 cursor-pointer outline-none 
                    min-w-[200px] hover:shadow-[inset_7px_7px_14px_#a6b27f,inset_-7px_-7px_14px_#f6ffbf]"
        >
          <option value="">Price Range</option>
          {priceRanges.map(range => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full md:w-auto px-4 py-2.5 bg-[#CEDF9F]/80 backdrop-blur-sm rounded-xl 
                    shadow-[inset_5px_5px_10px_#a6b27f,inset_-5px_-5px_10px_#f6ffbf]
                    border-none text-black transition-all duration-200 cursor-pointer outline-none 
                    min-w-[200px] hover:shadow-[inset_7px_7px_14px_#a6b27f,inset_-7px_-7px_14px_#f6ffbf]"
        >
          <option value="">Accommodation Type</option>
          {accommodationTypes.map(type => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="guests"
          value={filters.guests}
          onChange={handleChange}
          placeholder="Number of guests"
          min="1"
          className="w-full md:w-auto px-4 py-2.5 bg-[#CEDF9F]/80 backdrop-blur-sm rounded-xl 
                    shadow-[inset_5px_5px_10px_#a6b27f,inset_-5px_-5px_10px_#f6ffbf]
                    border-none text-black transition-all duration-200 outline-none 
                    min-w-[200px] placeholder:text-black/50
                    hover:shadow-[inset_7px_7px_14px_#a6b27f,inset_-7px_-7px_14px_#f6ffbf]"
        />

        <input
          type="date"
          name="dates"
          value={filters.dates}
          onChange={handleChange} 
          className="w-full md:w-auto px-4 py-2.5 bg-[#CEDF9F]/80 backdrop-blur-sm rounded-xl 
                    shadow-[inset_5px_5px_10px_#a6b27f,inset_-5px_-5px_10px_#f6ffbf]
                    border-none text-black transition-all duration-200 outline-none 
                    min-w-[200px] placeholder:text-black/50
                    hover:shadow-[inset_7px_7px_14px_#a6b27f,inset_-7px_-7px_14px_#f6ffbf]
                    [&::-webkit-calendar-picker-indicator]:filter 
                    [&::-webkit-calendar-picker-indicator]:invert-0"
        />
      </div>

      <div className="space-y-2 w-full">
        <p className="text-black left font-medium text-sm sm:text-base">Amenities:</p>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
          {availableAmenities.map(amenity => (
            <label key={amenity} className="flex items-center space-x-2 text-black/90 
                                          hover:text-black transition-colors duration-200 cursor-pointer">
              <input
                type="checkbox"
                value={amenity}
                onChange={handleAmenityChange}
                checked={filters.amenities.includes(amenity)}
                className="rounded-lg border-none shadow-[inset_2px_2px_5px_#004c37,inset_-2px_-2px_5px_#00895f] 
                          checked:shadow-[inset_3px_3px_6px_#004c37,inset_-3px_-3px_6px_#00895f]
                          bg-[#004c37]/90 checked:bg-[#00FF9C]"
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 sm:py-3 bg-gradient-to-r from-[#00CC7D]/90 to-[#CCB900]/90 
                  rounded-xl text-black font-semibold text-base sm:text-lg
                  shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]
                  hover:shadow-[7px_7px_14px_#bebebe,-7px_-7px_14px_#ffffff]
                  active:shadow-[inset_5px_5px_10px_#00cc7d,inset_-5px_-5px_10px_#ccb900]
                  transition-all duration-200"
      >
        Find Your Perfect Campsite
      </button>
    </form>
  );
}
