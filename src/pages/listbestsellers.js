import React, { useEffect, useState } from 'react';
import Pproduct from '../component/product';
import { getBestSellers } from '../api/api';

function ListBestseller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestSellers()
      .then((data) => {
        if (data) setProducts(data);
      })
      .catch((err) => console.error("Error fetching best sellers:", err));
  }, []);
  return (
    <div className="bg-gray-100 h-auto flex items-center justify-center py-8 px-4 w-full">
      <div className="bg-white py-16 px-4 sm:px-8 rounded-2xl shadow-lg w-full max-w-[1400px]">
        <h1 className="font-bold text-xl mb-6 text-center">BEST SELLER IN THIS CATEGORY</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full rounded-xl overflow-hidden">
          {products.map((product) => (
            <Pproduct
              key={product._id}
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
