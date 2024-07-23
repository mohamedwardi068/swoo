import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Pproduct({ name, price, priceRange, specs, image, originalPrice, discount, shipping, availability }) {

  return (
    <div className="h-[300px] text-center relative">
      {discount != null && !priceRange && (
        <div className="bg-green-600 text-white py-1 px-2 rounded absolute top-4 left-4 text-xs">
          SAVE ${discount.toFixed(2)}
        </div>
      )}
      <img 
        src={image}
        alt={name} 
        className="w-[200px] h-[200px] ml-5"
      />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{specs}</p>
        <div className="mt-2 mb-[10%]">
          {priceRange ? (
            <span className="text-black text-xl font-bold">${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)}</span>
          ) : (
            <>
              <span className="text-red-600 text-xl font-bold">${price?.toFixed(2)}</span>
              {originalPrice != null && (
                <span className="line-through text-gray-500 ml-2 text-lg">${originalPrice.toFixed(2)}</span>
              )}
            </>
          )}
        </div>
  
        <div className={`py-1 px-2 rounded-md inline-block mt-2 font-serif ${shipping === 'Free Shipping' ? 'text-green-600' : 'text-black'} bg-gray-200`}>
          {shipping === 'Free Shipping' ? shipping : `$${shipping}`}
        </div>
        <div className="mt-2 font-light">
          <span className={`font-bold ${availability === 'In stock' ? 'text-green-600' : availability === 'Contact' ? 'text-black' : 'text-red-600'}`}>
            {availability}
          </span>
          {availability === 'In stock' && (
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 inline-block w-5 h-5 ml-2" />
          )}
          {availability === 'Out of stock' && (
            <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 inline-block w-5 h-5 ml-2" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pproduct;
