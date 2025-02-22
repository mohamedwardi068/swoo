import React from 'react';

import Pproduct from '../component/product';
import products from '../db/bestsellerdb';

function ListBestseller() {
  return (
    <div className="bg-gray-100 h-auto flex items-center justify-center mt-2 ml-2 mr-2 mb-2 py-8 px-4">
      <div className="bg-white py-16 px-8 rounded-2xl  shadow-lg w-[100%] max-w-[3000px]">
        <h1 className="font-bold text-xl mb-6 text-center">BEST SELLER IN THIS CATEGORY</h1>
        <div className="grid grid-cols-4 gap-6 w-full rounded-xl overflow-hidden">
          {products.map((product) => (
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
      </div>
    </div>
  );
}

export default ListBestseller;
