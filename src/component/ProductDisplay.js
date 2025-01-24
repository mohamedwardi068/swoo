import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function ProductDisplay() {
  const location = useLocation();
  const {
    name,
    price,
    priceRange,
    specs,
    image,
    originalPrice,
    discount,
    shipping,
    availability,
  } = location.state || {};
  const [quantity, setQuantity] = useState(1); // Counter state for quantity

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className=" mx-auto bg-gray-100 py-8 px-4 mt-3 ml-2 mr-2">
      {/* Main Wrapper */}
      <div className="rounded-lg border bg-white shadow-lg p-6 mb-6">
        {/* Main Product Section */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column: Product Image */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              {/* "New" Label */}
              {discount && (
                <div className="absolute top-2 left-2 bg-black text-white py-1 px-2 rounded text-xs">
                  NEW
                </div>
              )}
              {/* Main Product Image */}
              <img
                src={image || "https://via.placeholder.com/600"} // Use provided image or placeholder
                alt={name || "Product"}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="col-span-12 lg:col-span-5">
            <h1 className="text-2xl font-bold mb-2">{name || "Product Name"}</h1>
            <p className="text-3xl text-green-600 font-semibold mb-2">
              {price ? `$${price.toFixed(2)}` : "Price Not Available"}
            </p>
            <ul className="list-disc ml-5 text-gray-700">
              {specs
                ? specs.split(",").map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))
                : "Specifications not available"}
            </ul>
            <div
            className={`py-1 px-2 rounded-md inline-block mt-3 font-serif  ${
              shipping === 'Free Shipping' ? 'text-green-600' : 'text-black'
            } bg-gray-200`}
          >
            {shipping === 'Free Shipping' ? shipping : `$${shipping}`}
          </div>
          <hr className="border-t-2 border-gray-300 mt-[2%]  mb-2 ml-0 sm:ml-0 md:ml-0 lg:ml-[0%] w-[50%] sm:w-[60%] md:w-[60%] lg:w-[50%]" />
            <div className="mt-3 font-light">
            <span
              className={`font-bold ${
                availability === 'In stock'
                  ? 'text-green-600'
                  : availability === 'Contact'
                  ? 'text-black'
                  : 'text-red-600'
              }`}
            >
              {availability}
            </span>
            {availability === 'In stock' && (
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 inline-block w-5 h-5 ml-2" />
            )}
            {availability === 'Out of stock' && (
              <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 inline-block w-5 h-5 ml-2" />
            )}
          </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center space-x-4 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <button
                  className="px-4 py-2 border rounded bg-gray-200"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="font-semibold">{quantity}</span>
                <button
                  className="px-4 py-2 border rounded bg-gray-200"
                  onClick={increment}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">
                ADD TO CART
              </button>
            </div>

            {/* Secure Checkout */}
            <br />
            <div className="text-gray-600 block mt-5">
              Guaranteed Safe Checkout
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/2239/667a/7df436f0d9e3723918a9ee8560fd2b80?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ApWH9K4q-GxZtI7-NdRy~T6UYBl21b2sa5~tjdwSdlbpETdbp3zgAGOPyyU4ehTH73faPRi4DJlww9BJZNL3cd4~4aUTuJbrIjtYH~0~HnlcES8-4A63rkvL-eGstosPLOtDRVD4gsR5BIc6ioZiAqDnYOOfBRwxEfqb2WMfiov94uUzMDJ9wlyxRkDeRHEW2YBG6DeKixCXCuwbw1tYj4lL9pXoV2jAoY8AADH5JzM43p-Dt3WqQsJprZ4DcDgrAVrbx~fqzawhdjEvrn9c899HXvl3qqv-SwBOsMk0kgV15W-gI5XZiB-Hfg9uimeyHE~-XlSqyqixQvZHPzUBNA__"
                alt="Payment methods"
                className="h-10"
              />
            </div>

            {/* Product Metadata */}
            <div className="mt-6">
              <div className="text-sm text-gray-700">
                <span className="font-bold">CATEGORY:</span> Cell Phones & Tablets
              </div>
              <div className="text-sm text-gray-700 mt-1">
                <span className="font-bold">TAGS:</span> Laptop, Macbook, Computer, M1
              </div>
            </div>
          </div>
        </div>

        {/* Cart Section */}
        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/80"
                alt="Product Thumbnail"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-sm font-semibold">{name || "Product Name"}</h3>
                <p className="text-sm text-gray-600">
                  3 x ${price ? price.toFixed(2) : "N/A"}
                </p>
              </div>
            </div>
            <div className="text-sm font-bold">
              ${price ? (price * 3).toFixed(2) : "N/A"}
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              VIEW CART
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
