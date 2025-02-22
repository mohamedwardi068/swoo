import React, { useState } from 'react';
import { useApi } from '../context/apicontext';

function Story() {
  const { Products } = useApi();
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current product index

  // Function to handle Next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Products.length); // Circular increment
  };

  // Function to handle Previous button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Products.length) % Products.length); // Circular decrement
  };

  // Return if no Products are loaded yet
  if (Products.length === 0) {
    return <p>Loading Products...</p>;
  }

  // Get the current product to display
  const product = Products[currentIndex];

  return (
    <>
    <div className="mx-auto bg-gray-100 py-8 px-4 mt-3 ml-2 mr-2 block ">    
      
      <div className="flex flex-col bg-white rounded-xl  shadow-lg p-4 md:p-8 ml-2 mt-3 mb-3 mr-2">
      <h2 className="text-2xl font-bold mt-2 ml-4 rounded-md  ">TOP CELL PHONES & TABLETS</h2>
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-1 items-center justify-center">
          <div className="relative flex p-4 rounded-[13px] w-[80%] h-[300px] md:h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-[100%] h-[100%] object-contain rounded-md"
            />
            <div className="absolute text-white p-4">
              <div className="text-left ml-7 mt-10 text-3xl md:text-4xl">
                <h1 className="font-bold">{product.name}</h1>
                <h1 className="font-thin ml-1">{product.specs}</h1>
              </div>

              <p className="text-gray-200 text-sm md:text-xl mt-7 ml-11">
                {product.description}
              </p>
              <button className="bg-white border border-gray-300 text-gray-700 mt-4 px-4 py-2 rounded-full hover:bg-gray-200 ml-7 font-bold w-[120px] h-[40px]">
                BUY NOW
              </button>
            </div>

           
            <div className="absolute bottom-[10%] right-[10%] flex flex-col items-end">
              <div className="text-9xl line-through  font-thin  text-blue-700">${product.originalPrice}</div>
              <div className="text-9xl font-bold text-blue-700">${product.price}</div>
              
              
            </div>
          </div>

          {/* Scroll Buttons at the Bottom */}
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex space-x-1">
            <button
              className="bg-white bg-opacity-20 hover:bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handlePrevious}
              aria-label="Previous"
            >
              &#8249;
            </button>

            <button
              className="bg-white bg-opacity-20 hover:bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleNext}
              aria-label="Next"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div></div>
    </>
  );
}

export default Story;
