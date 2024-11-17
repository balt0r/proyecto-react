import { createContext, useState, useMemo } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    total: 0,
    totalQuantity: 0, 
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const total = useMemo(() => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }, [cart]);

    const totalQuantity = useMemo(() => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (itemId) => {
        const CartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(CartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
