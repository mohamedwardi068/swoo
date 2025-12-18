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
  const { cartItems, getCartTotal } = useCart();
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
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

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 font-bold relative">
        <div className="cursor-pointer flex items-center group " onClick={() => Navigate('/')}>
          HOMES
        </div>

        <div className="relative cursor-pointer group">
          <div className="flex items-center">
            PRODUCTS
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0 z-50">
            <div className="bg-white shadow-xl rounded-lg p-3 min-w-[200px] border border-gray-100">
              {category && category.length > 0 ? (
                <div className="flex flex-col space-y-1">
                  {category.map((cat) => (
                    <div
                      key={cat._id}
                      onClick={() => Navigate(`/category/${cat._id}`)}
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
        <div className="cursor-pointer">CONTACT</div>
      </div>

      <div className="flex space-x-4 items-center">
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

      <div className="flex flex-col items-center lg:items-start">
        <div className="text-gray-700 font-thin">WELCOME</div>
        {user ? (
          <div className="flex font-bold space-x-1 items-center">
            <span onClick={() => Navigate("/profile")} className="cursor-pointer hover:text-green-600 text-green-500 truncate max-w-[100px]" title={user.name}>
              {user.name ? user.name.toUpperCase() : "USER"}
            </span>
            <span>/</span>
            <button className="hover:underline text-red-500" onClick={() => { logout(); Navigate("/"); }}>LOGOUT</button>
          </div>
        ) : (
          <div className="flex font-bold space-x-1">
            <button className="hover:underline" onClick={() => { Navigate("/login") }}>LOG IN</button>
            <span>/</span>
            <button className="hover:underline" onClick={() => { Navigate("/signup") }}>REGISTER</button>
          </div>
        )}
      </div>

      <div
        className="flex items-center relative cursor-pointer"
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
