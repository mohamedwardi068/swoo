import React from 'react'

function Path() {

    return(
    <nav className="flex text-gray-500 text-sm relative bg-white p-4 rounded-lg w-[100%] h-[80px] mt-4">
    <a href="/" className="hover:text-gray-300 font-bold ml-7 text-lg ">Home</a>
    <span className="mx-3 mt-1">/</span>
    <a href="/pages" className="hover:text-gray-50 font-bold text-lg">pages</a>
    <span className="mx-3 mt-1">/</span>
    <span className="font-bold text-black text-lg">login</span>
  </nav>)
}

export default Path