import React, { useState } from 'react';
import Pproduct from '../component/product';
import { useApi } from '../context/apicontext';

function ListBestseller() {
  const { newProducts } = useApi();
  console.log("first", newProducts);
  const [itemsToShow, setItemsToShow] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newProducts.length / itemsToShow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage > 2) {
        pageNumbers.push(1, "...");
      }
      for (let i = Math.max(currentPage - 1, 1); i <= Math.min(currentPage + 1, totalPages); i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 1) {
        pageNumbers.push("...", totalPages);
      }
    }
    return pageNumbers;
  };

  const startItem = (currentPage - 1) * itemsToShow + 1;
  const endItem = Math.min(currentPage * itemsToShow, newProducts.length);

  return (
    <div className="bg-gray-100 py-8 px-4 h-auto flex items-center justify-center mt-2 ml-2 mr-2 mb-2 ">
      <div className="bg-white py-8 px-6 rounded-2xl shadow-lg w-[100%] max-w-[3000px]">
        <div className="flex justify-between mb-4">
          <div>
            <span>
              <span className="font-bold">{startItem} - {endItem} </span> of {newProducts.length} results
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {newProducts.slice((currentPage - 1) * itemsToShow, currentPage * itemsToShow).map((product) => (
            <Pproduct
              key={product.id}
              {...product}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {getPageNumbers().map((number, index) => (
            number === "..." ? (
              <span key={index} className="px-3 py-1 m-1 rounded">...</span>
            ) : (
              <button 
                key={number} 
                onClick={() => handlePageChange(number)} 
                className={`px-3 py-1 m-1 rounded ${currentPage === number ? 'bg-green-500 text-gray-200' : 'bg-white'}`}
              >
                {number}
              </button>
            )
          ))}
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className={`px-3 py-1 m-1 rounded ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListBestseller;
