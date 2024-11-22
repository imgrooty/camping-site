import Image from 'next/image';
import { CampingProvider } from '@/types/provider';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

interface CampingCardProps {
  provider: CampingProvider;
}

export default function CampingCard({ provider }: CampingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
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
              className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-cyan-600 font-semibold">{provider.priceRange}</span>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
} 