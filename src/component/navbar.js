import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext';
import { useApi } from '../context/apicontext';
import { useCart } from '../context/cartcontext';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

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
 
        <div className="cursor-pointer flex items-center group">
          PRODUCTS
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10 w-48">
            <div className="flex flex-col space-y-2">
              {category && category.length > 0 ? (
                category.map((cat) => (
                  <span
                    key={cat._id}
                    onClick={() => Navigate(`/category/${cat._id}`)}
                    className="hover:text-green-600 block px-2 py-1 cursor-pointer"
                  >
                    {cat.name}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm px-2">Loading...</span>
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

      <div className="flex items-center relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7kWrySvnkWmPw92ID6MYhhPbucAV_CcHdg&s"
          alt="Cart Logo"
          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
        />
        <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-xs">
          {cartItems.length}
        </div>
        <div
          onClick={() => Navigate('/checkout')}
          className="flex flex-col items-center lg:items-start cursor-pointer hover:text-green-600 transition"
        >
          <div className="text-gray-700 font-light text-xs">CART</div>
          <div className="font-bold">${getCartTotal().toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
