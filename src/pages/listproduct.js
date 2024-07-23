import React from 'react';
import products from '../db/productsdb';
import Pproduct from '../component/product';

function ListProduct() {
 
    return (
   
      <>
      <h1 className='font-bold ml-[25%] '>BEST SELLER IN THIS CATEGORY</h1>
      <div className='grid grid-cols-4 gap-1 ml-[25%] w-[70%] h-[300px]'>
        
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
  
  export default ListProduct;
