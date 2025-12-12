import React, { useState, useEffect } from 'react';
import { useApi } from '../context/apicontext';

function Story() {
  const { Products } = useApi();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (Products && Products.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % Products.length);
    }
  };

  const handlePrevious = () => {
    if (Products && Products.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + Products.length) % Products.length);
    }
  };

  useEffect(() => {
    if (!Products || Products.length === 0) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-slide every 4 seconds

    return () => clearInterval(interval);
  }, [Products]);

  if (!Products || Products.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading products...
      </div>
    );
  }

  const product = Products[currentIndex];

  const formatDate = (dateObj) => {
    if (!dateObj?.$date) return '';
    try {
      const d = new Date(dateObj.$date);
      return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(d);
    } catch {
      return '';
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">

      {/* Background overlay blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* FULL WIDTH CARD */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row overflow-hidden bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10">

        {/* LEFT — FULL HEIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[50vh] md:h-full object-cover rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* RIGHT — FULL HEIGHT PRODUCT DETAILS */}
        <div className="flex-1 flex flex-col justify-between p-10 md:p-16 text-white">
          <div>
            <h2 className="text-5xl font-extrabold mb-6 tracking-wide">
              {product.name}
            </h2>

            {product.specs && (
              <p className="text-lg text-gray-300 mb-8">
                {product.specs}
              </p>
            )}

            <p className="text-3xl mb-6">
              <span className="line-through mr-3 text-red-400 opacity-80">
                ${product.originalPrice?.toFixed(2)}
              </span>

              <span className="font-bold text-green-400">
                ${product.price?.toFixed(2)}
              </span>

              {product.discount && (
                <span className="ml-4 bg-red-700/30 text-red-300 px-4 py-1 rounded-full text-sm font-semibold">
                  {product.discount}% OFF
                </span>
              )}
            </p>

            {product.createdAt && (
              <p className="text-sm text-gray-400">
                Added on {formatDate(product.createdAt)}
              </p>
            )}
          </div>

          <button
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition duration-300"
            onClick={() => console.log('Buy now', product.id)}
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 md:p-6 rounded-full shadow-xl transition"
        onClick={handlePrevious}
      >
        &#8249;
      </button>

      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 md:p-6 rounded-full shadow-xl transition"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </section>
  );
}

export default Story;
