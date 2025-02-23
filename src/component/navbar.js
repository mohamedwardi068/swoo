import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/4331/41bc/8c7a66505619b246757b0e023183dbb2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDV7ZsXnfUpasj~MbhnLTt~0ODm9hZO0~25XeP~7amlmQCSMeq8s55~CklMW48ApodxtecsBIk0ou2GAhpvaZeZR7xU8LfhFmRWu9J6SgItbrIXXhxKw9eZoHW79kOOHTJ-AJclmQ1g6Rmx3aruvwGzwCBUaKDvdSPDutOgVuO4amIJxeLez81zoFKQTtv6tJifa1v~DvraVqAYdbCoz6FdzsIRAo5ekj6GpwyvktiRJEdso1EiHVG1kHNPxlo2mWqa4qq0JRh6iu6rHcIN3wxU8RGAgHwxhpBFZd6XwIjsa6V5teppmgRMxIkV3Wv2ChHh8a-KNPkChVW3AcXD6hg__"
          alt="Logo"
          className="mr-5 w-15 h-15"
        />
      </div>

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 font-bold relative">
        <div className="cursor-pointer flex items-center group">
          HOMES
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PAGES
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer flex items-center group">
          PRODUCTS
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-8 p-2 z-10">
            <div className="flex flex-col space-y-2">
              <a className="hover:text-blue-500">Option 1</a>
              <a className="hover:text-blue-500">Option 2</a>
              <a className="hover:text-blue-500">Option 3</a>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">CONTACT</div>
      </div>

      <div className="flex space-x-2 items-center">
        <svg className="w-10 h-10 bg-gray-300 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
        <button className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-5xl font-serif">
          &#9825;
        </button>
        <svg className="w-10 h-10 bg-gray-300 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <div className="text-gray-700 font-thin">WELCOME</div>
        <div className="flex font-bold space-x-1">
          <button className="hover:underline" onClick={() => { Navigate("/login") }}>LOG IN</button>
          <span>/</span>
          <button className="hover:underline" onClick={() => { Navigate("/signup") }}>REGISTER</button>
        </div>
      </div>

      <div className="flex items-center relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7kWrySvnkWmPw92ID6MYhhPbucAV_CcHdg&s"
          alt="Cart Logo"
          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
        />
        <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-xs">
          5
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="text-gray-700 font-light text-xs">CART</div>
          <div className="font-bold">$1,689.00</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
