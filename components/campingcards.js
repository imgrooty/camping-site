import Image from 'next/image'

export default function CampingCard({ provider }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105 bg-white">
      <div className="relative">
        <Image 
          className="object-cover" 
          src={provider.image} 
          alt={provider.name}
          width={320} 
          height={224}
          priority
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          {provider.rating} ⭐
        </div>
      </div>
      
      <div className="px-6 py-5 space-y-3">
        <h2 className="font-bold text-xl text-gray-800 hover:text-blue-600 transition-colors">
          {provider.name}
        </h2>
        
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {provider.location}
          </p>
          
          <p className="text-gray-600 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {provider.priceRange}
          </p>
        </div>
      </div>
    </div>
  );
}