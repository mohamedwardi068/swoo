import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

function Product({ _id, name, price, priceRange, specs, image, originalPrice, discount, shipping, availability }) {
  const navigate = useNavigate();
  const [isInWishlist, setIsInWishlist] = React.useState(false);

  React.useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.some(item => item._id === _id));
  }, [_id]);

  const handleProductClick = () => {
    navigate('/product-display', { state: { _id, name, price, priceRange, specs, image, originalPrice, discount, shipping, availability } });
  };

  const toggleWishlist = (e) => {
    e.stopPropagation(); // Prevent navigating to product page
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    if (isInWishlist) {
      const newWishlist = wishlist.filter(item => item._id !== _id);
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      setIsInWishlist(false);
    } else {
      const productToAdd = { _id, name, price, priceRange, specs, image, originalPrice, discount, shipping, availability };
      wishlist.push(productToAdd);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      setIsInWishlist(true);
    }
  };

  const isNewProduct =
    name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone" ||
    name === "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB" ||
    name === "LG Pro Tablet 2023 LTE + Wifi, GPS Cellular" ||
    name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gbb, Black Smartphone";

  const isSpecialProduct = name === "OPod Pro 12.9 Inch M2 2023";
  const isOutOfStock = name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone";

  return (
    <button
      onClick={handleProductClick}
      className="h-auto text-center relative w-full cursor-pointer border-none bg-transparent p-0 flex flex-col items-center group"
    >
      <div className="relative w-full h-full flex flex-col items-center">
        {/* Display discount badge */}
        {discount != null && !priceRange && (
          <div
            className={`${isSpecialProduct ? 'bg-blue-600' : 'bg-green-600'} text-white py-1 px-2 rounded absolute top-2 left-2 text-xs font-bold z-10`}
          >
            SAVE ${discount.toFixed(2)}
          </div>
        )}
        {/* Display 'NEW' badge */}
        {isNewProduct && (
          <div className="bg-black text-white py-1 px-2 rounded absolute top-10 left-2 text-xs font-bold z-10">
            NEW
          </div>
        )}
        {/* Display 'OUT OF STOCK' badge */}
        {isOutOfStock && (
          <div className="bg-black text-white py-1 px-2 rounded absolute top-2 left-2 text-xs font-bold z-10">
            OUT OF STOCK
          </div>
        )}

        {/* Wishlist Icon - Positioned absolutely in the top right */}
        <div
          onClick={toggleWishlist}
          className="absolute top-2 right-2 rounded-full bg-slate-300 h-10 w-10 flex items-center justify-center text-xl hover:bg-green-500 hover:text-white transition duration-300 z-20"
        >
          <FaHeart className={isInWishlist ? 'text-green-600' : 'text-white'} />
        </div>

        {/* Product Image */}
        <div className="w-full aspect-square flex items-center justify-center p-4 bg-white rounded-lg mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain max-h-[200px] group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full px-2 text-center flex-grow flex flex-col justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-semibold line-clamp-2 mb-2 min-h-[3rem]">{name}</h2>
            {/* <p className="text-sm sm:text-base font-medium text-gray-500 line-clamp-2 mb-2 hidden">{specs}</p> */}
          </div>

          <div className="mt-auto">
            <div className="mt-2 mb-2">
              {/* Display price or price range */}
              {priceRange ? (
                <span className="text-black text-lg sm:text-xl font-bold">
                  ${priceRange.min.toFixed(2)} - ${priceRange.max.toFixed(2)}
                </span>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="text-red-600 text-lg sm:text-xl font-bold">${price?.toFixed(2)}</span>
                  {originalPrice != null && (
                    <span className="line-through text-gray-500 text-sm sm:text-base">${originalPrice.toFixed(2)}</span>
                  )}
                </div>
              )}
            </div>
            {/* Display shipping details */}
            <div
              className={`py-1 px-2 rounded-md inline-block mt-1 font-serif text-sm ${shipping === 'Free Shipping' ? 'text-green-600' : 'text-black'
                } bg-gray-200`}
            >
              {shipping === 'Free Shipping' ? shipping : `$${shipping}`}
            </div>
            {/* Special case for free gift */}
            {name === "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone" && (
              <div className="block mt-2">
                <button className="text-red-600 py-1 px-2 rounded-md font-serif bg-gray-200 text-sm">
                  Free Gift
                </button>
              </div>
            )}
            {/* Display availability */}
            <div className="mt-2 font-light text-sm">
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
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 inline-block w-4 h-4 ml-1" />
              )}
              {availability === 'Out of stock' && (
                <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 inline-block w-4 h-4 ml-1" />
              )}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default Product;
