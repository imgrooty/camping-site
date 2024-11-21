// components/Filter.js

export default function Filter({ filters, setFilters }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFilters({ ...filters, [name]: value });
    };
  
    return (
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 
                   hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-colors duration-200 cursor-pointer outline-none min-w-[200px]"
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
          className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 
                   hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                   transition-colors duration-200 cursor-pointer outline-none min-w-[200px]"
        >
          <option value="">Accommodation Type</option>
          <option value="Tent Camping">Tent Camping</option>
          <option value="RV Camping">RV Camping</option>
          <option value="Luxury Camping">Luxury Camping</option>
        </select>
      </div>
    );
  }
  