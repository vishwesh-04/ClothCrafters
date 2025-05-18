"use client"
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])



    const addToCart = (newItem) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(existingItem =>
                existingItem[0]?.id === newItem[0]?.id &&
                existingItem[1] === newItem[1] &&
                existingItem[2] === newItem[2]
            );

            if (existingItemIndex > -1) {
                
                return prevItems.map((item, index) =>
                    index === existingItemIndex
                        ? [item[0], item[1], item[2], item[3] + newItem[3]]
                        : item
                );
            } else {
                
                return [...prevItems, newItem];
            }
        });

    }

    const removeFromCart = (item) => {
        setCartItems(prevItems => prevItems.filter(value => value[0].id !== item[0] && value[1] !== item[1] && value[2] !== item[2]))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart };