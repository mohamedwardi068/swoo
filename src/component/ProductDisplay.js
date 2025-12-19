import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcStripe } from 'react-icons/fa';
import { useCart } from '../context/cartcontext';

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
  const { addToCart } = useCart();

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Main Wrapper */}
      <div className="rounded-lg border bg-white shadow-lg p-6 mb-6">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Product Image */}
          <div className="col-span-1 md:col-span-6 lg:col-span-7">
            <div className="relative w-full">
              {/* "New" Label */}
              {discount && (
                <div className="absolute top-2 left-2 bg-black text-white py-1 px-2 rounded text-xs z-10">
                  NEW
                </div>
              )}
              {/* Main Product Image */}
              <div className="aspect-square w-full relative overflow-hidden rounded-lg">
                <img
                  src={image || "https://via.placeholder.com/600"} // Use provided image or placeholder
                  alt={name || "Product"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{name || "Product Name"}</h1>
            <p className="text-3xl text-green-600 font-semibold mb-4">
              {price ? `$${price.toFixed(2)}` : "Price Not Available"}
            </p>
            <ul className="list-disc ml-5 text-gray-700 mb-4 space-y-1">
              {specs
                ? specs.split(",").map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
                : "Specifications not available"}
            </ul>
            <div
              className={`py-1 px-3 rounded-md inline-block mb-4 font-serif self-start ${shipping === 'Free Shipping' ? 'text-green-600' : 'text-black'
                } bg-gray-200`}
            >
              {shipping === 'Free Shipping' ? shipping : `$${shipping}`}
            </div>

            <hr className="border-t border-gray-300 w-full my-4" />

            <div className="mb-6 font-light">
              <span
                className={`font-bold ${availability === 'In stock'
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              {/* Quantity Selector */}
              <div className="flex items-center justify-center sm:justify-start space-x-4 border rounded-lg p-1 bg-gray-50 max-w-[150px]">
                <button
                  className="px-3 py-2 hover:bg-gray-200 rounded transition-colors"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="font-semibold text-lg w-8 text-center">{quantity}</span>
                <button
                  className="px-3 py-2 hover:bg-gray-200 rounded transition-colors"
                  onClick={increment}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  addToCart({ name, price, image, _id: name }, quantity); // Using name as ID if _id missing in mock
                  alert('Added to Cart!');
                }}
                className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 font-bold transition-colors flex-grow sm:flex-grow-0"
              >
                ADD TO CART
              </button>
            </div>

            {/* Secure Checkout */}
            <div className="flex flex-col items-start gap-2">
              <div className="text-gray-600 text-sm">
                Guaranteed Safe Checkout
              </div>
              <div className="flex items-center space-x-4 text-3xl text-gray-600">
                <FaPaypal className="hover:text-[#003087] transition-colors cursor-pointer" />
                <FaCcVisa className="hover:text-[#1A1F71] transition-colors cursor-pointer" />
                <FaCcMastercard className="hover:text-[#EB001B] transition-colors cursor-pointer" />
                <FaCcStripe className="hover:text-[#008CDD] transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Product Metadata */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="text-sm text-gray-700 mb-1">
                <span className="font-bold">CATEGORY:</span> Cell Phones & Tablets
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-bold">TAGS:</span> Laptop, Macbook, Computer, M1
              </div>
            </div>
          </div>
        </div>

        {/* Cart Section (Mockup below main area) */}
        <div className="mt-8 p-4 border rounded-lg bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Your Cart Summary</h2>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="w-16 h-16 bg-white rounded-md flex-shrink-0 border flex items-center justify-center overflow-hidden">
                <img
                  src={image || "https://via.placeholder.com/80"}
                  alt="Product Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold line-clamp-1">{name || "Product Name"}</h3>
                <p className="text-sm text-gray-600">
                  {quantity} x ${price ? price.toFixed(2) : "N/A"}
                </p>
              </div>
            </div>
            <div className="text-lg font-bold">
              Total: ${price ? (price * quantity).toFixed(2) : "N/A"}
            </div>
          </div>
          <div className="flex justify-end items-center mt-4 gap-3">
            <button className="bg-white border border-gray-300 py-2 px-6 rounded hover:bg-gray-50 transition-colors text-sm font-medium">
              View Cart
            </button>
            <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors text-sm font-bold">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
