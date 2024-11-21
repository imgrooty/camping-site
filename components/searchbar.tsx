// components/SearchBar.js

import { Dispatch, SetStateAction } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export default function SearchBar({ 
  query, 
  setQuery 
}: { 
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="relative max-w-2xl mx-auto py-4 px-4 w-full">
      <div className="absolute inset-y-0 left-7 flex items-center pointer-events-none">
        <IoSearchOutline className="h-5 w-5 text-[#D2FF72] mb-3 flex items-center justify-center" />
      </div>
      <input
        type="text"
        placeholder="Search camping providers"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-12 pr-4 py-3 bg-[#15B392] text-white border border-[#54C392] rounded-xl w-full mb-4 
                 focus:ring-2 focus:ring-[#D2FF72]/50 focus:border-[#D2FF72] 
                 transition-all duration-200 shadow-sm hover:shadow-md
                 placeholder-[#73EC8B]"
      />
    </div>
  );
}
  