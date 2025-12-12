import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { useCart } from '../context/cartcontext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const { cartItems, getCartTotal, clearCart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
        clearCart();
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    if (orderPlaced) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
                        <p className="text-gray-600">Thank you for your purchase. Redirecting to home...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item._id} className="flex justify-between items-center border-b pb-2">
                                        <div className="flex items-center">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                                            <div>
                                                <p className="font-bold">{item.name}</p>
                                                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                <button
                                                    onClick={() => removeFromCart(item._id)}
                                                    className="text-red-500 text-xs hover:underline mt-1"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                                <div className="flex justify-between pt-4 text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-green-600">${getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Shipping Form */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                        <form onSubmit={handlePlaceOrder} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                                <input required type="text" className="w-full p-2 border rounded" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Address</label>
                                <input required type="text" className="w-full p-2 border rounded" placeholder="123 Main St" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">City</label>
                                    <input required type="text" className="w-full p-2 border rounded" placeholder="New York" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Zip Code</label>
                                    <input required type="text" className="w-full p-2 border rounded" placeholder="10001" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Card Number (Mock)</label>
                                <input required type="text" className="w-full p-2 border rounded" placeholder="0000 0000 0000 0000" />
                            </div>
                            <button
                                disabled={cartItems.length === 0}
                                type="submit"
                                className={`w-full text-white py-3 rounded-lg font-bold transition ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                PLACE ORDER
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Checkout;
