import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(items);
    }, []);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const existing = prev.find(item => item._id === product._id);
            let updated;
            if (existing) {
                updated = prev.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                updated = [...prev, { ...product, quantity }];
            }
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => {
            const updated = prev.filter(item => item._id !== id);
            localStorage.setItem('cart', JSON.stringify(updated));
            return updated;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
