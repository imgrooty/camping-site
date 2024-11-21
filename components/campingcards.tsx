import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';

export default function CampingCard({ provider }: { provider: any }) {
  return (
    <div className="bg-[#A1EEBD] backdrop-blur-sm rounded-lg border border-[#87A922]/20 
                    hover:shadow-lg transition-all duration-300 overflow-hidden
                    hover:border-[#87A922]/40">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-2/5">
          <Image 
            className="object-cover w-full h-64 md:h-full" 
            src={provider.image} 
            alt={provider.name}
            width={480} 
            height={360}
            priority
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 
                         rounded-full text-sm font-semibold text-[#114232] border border-[#87A922]/20">
            {provider.rating} ⭐
          </div>
        </div>

        <div className="flex-1 p-6">
          <h3 className="text-xl font-bold text-[#114232] mb-2">
            {provider.name}
          </h3>
          
          <p className="text-[#114232]/80 mb-4">
            {provider.description}
          </p>

          <div className="space-y-4">
            <div className="flex items-center text-[#114232]/70">
              <IoLocationOutline className="w-5 h-5 mr-2" />
              {provider.location}
            </div>
            <div className="flex items-center text-[#114232]/70">
              <IoLocationOutline className="w-5 h-5 mr-2" />
              {provider.priceRange}
            </div>

            <div className="flex flex-wrap gap-2">
              {provider.amenities?.map((amenity: string) => (
                <span key={amenity} 
                      className="px-3 py-1 text-sm bg-[#F7F6BB]/30 rounded-full 
                               text-[#114232] border border-[#87A922]/20">
                  {amenity}
                </span>
              ))}
            </div>

            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#87A922] to-[#FCDC2A] 
                             text-white rounded-lg font-semibold hover:shadow-lg 
                             hover:shadow-[#87A922]/20 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
