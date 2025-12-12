import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useApi } from '../context/apicontext';

function Searchbar() {
  const { category, searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, newProducts } = useApi();
  const Navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-green-500 p-4 justify-between">
      <div className="w-full lg:w-1/2 flex mb-4 lg:mb-0 relative">
        <div className="flex items-center bg-white p-2 rounded-full w-full lg:w-3/4 relative">
          <select
            className="border-none outline-none p-2 font-bold bg-white rounded-l-full w-1/3"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all-categories">All Categories</option>
            {category && category.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>
          <input
            id="search-input"
            type="text"
            placeholder="Search anything..."
            onChange={handleSearchChange}
            value={searchTerm} // Bind value
            className="border-none outline-none p-2 flex-grow"
          />
          <button
            className="bg-transparent border-none cursor-pointer p-2"
            onClick={() => {
              const element = document.getElementById('product-list-section');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FaSearch className="text-black" />
          </button>

          {/* Search Results Dropdown */}
          {searchTerm && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl max-h-96 overflow-y-auto z-50 mt-2">
              {newProducts
                .filter(p => {
                  const matchName = p.name?.toLowerCase().includes(searchTerm.toLowerCase());
                  const matchCategory = selectedCategory === "all-categories" || p.category === selectedCategory;
                  return matchName && matchCategory;
                })
                .map(product => (
                  <div
                    key={product._id}
                    onClick={() => Navigate('/product-display', { state: product })}
                    className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
                  >
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded mr-3" />
                    <div className="text-left">
                      <p className="font-bold text-sm text-gray-800">{product.name}</p>
                      <p className="text-green-600 text-xs">${product.price}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-around text-white text-center lg:text-left">
        <span className="mb-2 lg:mb-0">FREE SHIPPING OVER $199</span>
        <span className="mb-2 lg:mb-0">30 DAYS MONEY BACK</span>
        <span className="mb-2 lg:mb-0">100% SECURE PAYMENT</span>
      </div>
    </div>
  );
}

export default Searchbar;
