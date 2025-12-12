import React, { useState, useEffect } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlistItems(items);
    }, []);

    const removeFromWishlist = (id) => {
        const updated = wishlistItems.filter(item => item._id !== id);
        setWishlistItems(updated);
        localStorage.setItem('wishlist', JSON.stringify(updated));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

                {wishlistItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <p className="text-xl">Your wishlist is empty.</p>
                        <button
                            onClick={() => navigate('/')}
                            className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                        {wishlistItems.map((item) => (
                            <div key={item._id} className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 relative">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-32 object-cover rounded-lg"
                                />

                                <div className="flex-grow text-center md:text-left">
                                    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-600 text-sm mb-2">{item.specs}</p>
                                    <p className="text-green-600 font-bold text-lg">
                                        ${item.price?.toFixed(2)}
                                        {item.originalPrice && (
                                            <span className="text-gray-400 line-through text-sm ml-2">
                                                ${item.originalPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="flex flex-col space-y-2 w-full md:w-auto">
                                    <button
                                        onClick={() => navigate('/product-display', { state: item })}
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full md:w-auto font-bold"
                                    >
                                        View Product
                                    </button>
                                    <button
                                        onClick={() => removeFromWishlist(item._id)}
                                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition w-full md:w-auto font-semibold"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Wishlist;
