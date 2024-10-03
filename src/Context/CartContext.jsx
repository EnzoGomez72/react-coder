import  React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [ cartItems, setCartItems ] = useState([]);

   /* const addItem = (item, quantity) => {
        const alreadyInCart = cartItems.find(currentItem => currentItem.id  == item.id);

        if (alreadyInCart) {
            updateItemQuantity(item.id, quantity)
        } else {
            setCartItems([...cartItems, {...item, quantity}]);
        }
    }

    const removeItem = (id) => {
        setCartItems(cartItems.filter(currentItem => currentItem.id !== id))
    }

    const updateItemQuantity = (id, quantity) => {
        setCartItems(
            cartItems.map(currentItem => currentItem.id === id ? {...currentItem, quantity: currentItem.quantity + quantity}: currentItem));
        
    }*/
            const addItem = (item) => {
                const alreadyExist = cartItems.find(currentItem => currentItem.id == item.id);
            
                if (alreadyExist) {
                  setCartItems(cartItems.map(currentItem => currentItem.id == item.id ? {...currentItem, quantity: item.quantity ? currentItem.quantity + item.quantity : currentItem.quantity + 1} : currentItem))
                } else {
                  const quantity = item.quantity || 1;
                  setCartItems([...cartItems, { ...item, quantity }]);
                }
              }
            
              /*const removeItem = (id) => {
                setCartItems(cartItems.filter(currentItem => currentItem.id == item.id ? {...currentItem, quantity: currentItem.quantity - 1} : currentItem))
              }*/
                const removeItem=(id)=>{
                    setCartItems(cartItems.filter(item => item.id !== id));
             
                }
            

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartQuantity = () => {
        const quantity = cartItems.reduce((acc, act) => acc + act.quantity, 0);
        
        return quantity;
    }

    const getTotal = () => {
        const total = cartItems.reduce((acc, act)=> acc + (act.price * act.quantity));

        return total;
    }

    return <CartContext.Provider
    value={{ cartItems, addItem, removeItem, clearCart, getCartQuantity, getTotal}}>
        { children }
    </CartContext.Provider>

};




