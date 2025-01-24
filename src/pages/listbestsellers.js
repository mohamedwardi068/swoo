import React from 'react';

import Pproduct from '../component/product';
import products from '../db/bestsellerdb';

function ListBestseller() {
 
    return (
   
      <>
      <h1 className='font-bold ml-[5%] '>BEST SELLER IN THIS CATEGORY</h1>
      <div className='grid grid-cols-4 gap-1 ml-[5%] w-[90%] h-[300px] mb-5 '>
        
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
      </>
    );
  }
  
  export default ListBestseller;
