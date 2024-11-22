import Image from 'next/image';
import { CampingProvider } from '@/types/provider';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

interface CampingCardProps {
  provider: CampingProvider;
}

export default function CampingCard({ provider }: CampingCardProps) {
  return (
    <div className="bg-green-50 rounded-xl p-2 hover:scale-[1.02] transition-all duration-300"
         style={{ 
           boxShadow: '8px 8px 15px #b3e3e9, -8px -8px 15px #f0fbfc'
         }}>
      <div className="relative h-48 w-full rounded-lg overflow-hidden">
        <Image
          src={provider.image}
          alt={provider.name}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-semibold text-gray-800">{provider.name}</h2>
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="ml-1 text-gray-600">{provider.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{provider.location}</span>
        </div>

        <p className="text-gray-600 mb-3 line-clamp-2">{provider.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {provider.amenities.slice(0, 3).map((amenity) => (
            <span 
              key={amenity}
              className="bg-cyan-50 text-cyan-700 text-xs px-3 py-1 rounded-full"
              style={{ 
                boxShadow: 'inset 3px 3px 7px #b3e3e9, inset -3px -3px 7px #f0fbfc'
              }}
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-cyan-700 font-semibold">{provider.priceRange}</span>
          <button 
            className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg hover:scale-[1.02] transition-all"
            style={{ 
              boxShadow: '5px 5px 10px #b3e3e9, -5px -5px 10px #f0fbfc'
            }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
} 