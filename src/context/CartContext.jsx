import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(0)

    function addToCart() {
        setCart((count) => count + 1)
    }
    function removeFromCart() {
        setCart((count) => count - 1)
    }       
    function removeItem () {
        setCount(0)
    }
    
    return (
        <>
        <CartContext.Provider value={{ count, addToCart, removeFromCart, romoveItem }}>
            {children}
        </CartContext.Provider>
        </>
        )
    }

export { CartContext, CartProvider }


