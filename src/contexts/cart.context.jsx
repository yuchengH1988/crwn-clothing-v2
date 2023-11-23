import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id ?
    {...cartItem, quantity: cartItem.quantity +1 }
    : cartItem
  )
  }
  // return new array with modified cartItems / new cartItem
  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )
  if (existingCartItemIndex > -1) {
    cartItems[existingCartItemIndex].quantity -= 1

    if (cartItems[existingCartItemIndex].quantity === 0) {
      cartItems.splice(existingCartItemIndex, 1)
    }
  }
  
  return [...cartItems]
}
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity
      ,0
    )
    setCartCount(newCartCount)
    const newCartTotal = cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.price
      , 0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>;
};
