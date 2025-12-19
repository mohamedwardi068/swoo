import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';
import { useApi } from '../context/apicontext';
import { useCart } from '../context/cartcontext';
import { FaUser, FaHeart, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

import logo from '../Logo/logo.png';

function Navbar() {
  const Navigate = useNavigate();
  const { user, logout } = useAuth();
  const { category } = useApi();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md relative z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => Navigate('/')}
      >
        <img
          src={logo}
          alt="Logo"
          className="mr-5 w-14 h-auto"
        />
        <div className="font-bold text-2xl font-serif">
          Swoo
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-green-500 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links - Hidden on mobile unless menu is open */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6 font-bold w-full lg:w-auto z-40`}>
        <div className="cursor-pointer flex items-center group hover:text-green-500 transition-colors" onClick={() => { Navigate('/'); setIsMenuOpen(false); }}>
          HOMES
        </div>

        <div className="relative cursor-pointer group">
          <div className="flex items-center hover:text-green-500 transition-colors">
            PRODUCTS
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div className="lg:absolute lg:left-0 lg:mt-2 opacity-100 lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-300 ease-in-out lg:transform lg:translate-y-2 lg:group-hover:translate-y-0 z-50 w-full lg:w-auto relative invisible h-0 lg:h-auto group-hover:visible group-hover:h-auto">
            {/* Mobile specific styling for dropdown behavior could be improved, but relying on group-hover for now or simple visibility toggle if clicked */}
            <div className="bg-white lg:shadow-xl rounded-lg p-3 min-w-[200px] lg:border border-gray-100 pl-4 lg:pl-3 border-l-2 lg:border-l-0 border-green-500 lg:border-none mt-2 lg:mt-0">
              {category && category.length > 0 ? (
                <div className="flex flex-col space-y-1">
                  {category.map((cat) => (
                    <div
                      key={cat._id}
                      onClick={() => { Navigate(`/category/${cat._id}`); setIsMenuOpen(false); }}
                      className="px-4 py-2 hover:bg-green-50 hover:text-green-600 rounded-md cursor-pointer transition-all duration-200 flex items-center justify-between group/item"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-xs text-gray-400 group-hover/item:text-green-500">{cat.productCount || 0}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-gray-500 text-sm px-4 py-2 block">Loading...</span>
              )}
            </div>
          </div>
        </div>
        <div className="cursor-pointer hover:text-green-500 transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT</div>
      </div>

      <div className="hidden lg:flex space-x-4 items-center">
        <div
          onClick={() => Navigate('/checkout')}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
        >
          <FaShoppingCart className="text-xl" />
        </div>
        <div
          onClick={() => Navigate('/wishlist')}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
        >
          <FaHeart className="text-xl" />
        </div>
        <div
          onClick={() => Navigate('/profile')}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
        >
          <FaUser className="text-xl" />
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center lg:items-start ml-4">
        <div className="text-gray-700 font-thin text-sm">WELCOME</div>
        {user ? (
          <div className="flex font-bold space-x-1 items-center text-sm">
            <span onClick={() => Navigate("/profile")} className="cursor-pointer hover:text-green-600 text-green-500 truncate max-w-[100px]" title={user.name}>
              {user.name ? user.name.toUpperCase() : "USER"}
            </span>
            <span>/</span>
            <button className="hover:underline text-red-500" onClick={() => { logout(); Navigate("/"); }}>LOGOUT</button>
          </div>
        ) : (
          <div className="flex font-bold space-x-1 text-sm">
            <button className="hover:underline" onClick={() => { Navigate("/login") }}>LOG IN</button>
            <span>/</span>
            <button className="hover:underline" onClick={() => { Navigate("/signup") }}>REGISTER</button>
          </div>
        )}
      </div>

      <div
        className="hidden lg:flex items-center relative cursor-pointer ml-4"
        onClick={() => Navigate('/checkout')}
      >
        <FaShoppingBag className="text-3xl text-gray-500" />
        <div className="absolute -top-1 -right-2 w-5 h-5 bg-white border border-green-500 rounded-full flex items-center justify-center">
          <span className="text-green-500 text-xs font-bold">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
