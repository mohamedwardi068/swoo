import React, { useState } from 'react';

import Pproduct from '../component/product';

import Productts from '../db/productsdb';

function ListBestseller() {
  const [itemsToShow, setItemsToShow] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; 
  //   const totalPages = Math.ceil(Productts.length / itemsToShow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i <= 3 || i === totalPages) {
        pageNumbers.push(i);
      } else if (i === 4) {
        pageNumbers.push("...");
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <div className='flex justify-between ml-[25%]'>
        <div>
          <span><span className='font-bold'>1 - {itemsToShow} </span> of 120 results</span>
        </div>
        <div>
          <span>Show item</span>
          <button 
            onClick={() => setItemsToShow(24)} 
            className={`bg-gray-300 px-2 py-1 m-1 rounded ${itemsToShow === 24 ? 'font-bold' : ''}`}
          >
            24
          </button>
          <button 
            onClick={() => setItemsToShow(48)} 
            className={`bg-gray-300 px-2 py-1 m-1 rounded ${itemsToShow === 48 ? 'font-bold' : ''}`}
          >
            48
          </button>
          <button 
            onClick={() => setItemsToShow(72)} 
            className={`bg-gray-300 px-2 py-1 m-1 rounded ${itemsToShow === 72 ? 'font-bold' : ''}`}
          >
            72
          </button>
        </div>
        <div className='space-x-4'>
          <span>Show item</span>
          <select defaultValue="Default" className="px-2 py-1 m-1 rounded-md bg-gray-200">
            <option value="Default">Default</option>
          </select>
        </div>
        <div>
          <span><span className='font-bold'>1 - {itemsToShow} </span> of 120 results</span>
        </div>
        <div className='mr-5'>
          <button>View As</button>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-2 ml-[25%] w-[70%] h-[100%]'>
        {Productts.slice((currentPage - 1) * itemsToShow, currentPage * itemsToShow).map((product) => (
          <Pproduct
            key={product.id}
            name={product.name}
            specs={product.specs}
            price={product.price}
            priceRange={product.priceRange}
            originalPrice={product.originalPrice}
            discount={product.discount}
            shipping={product.shipping}
            availability={product.availability}
            image={product.image}
          />
        ))}
      </div>

      <div className='flex justify-center mt-4 ml-[25%]'>
        {getPageNumbers().map((number, index) => (
          number === "..." ? (
            <span key={index} className='px-3 py-1 m-1 rounded'>...</span>
          ) : (
            <button 
              key={number} 
              onClick={() => handlePageChange(number)} 
              className={`px-3 py-1 m-1 rounded ${currentPage === number ? 'bg-green-500 text-grey-200' : 'bg-white'}`}
            >
              {number}
            </button>
          )
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`px-3 py-1 m-1 rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-grey-200'}`}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ListBestseller;
