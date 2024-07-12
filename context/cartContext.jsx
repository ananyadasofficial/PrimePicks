import React, { createContext, useReducer } from 'react';
import { cartReducer, CART_ACTIONS } from '../reducers/cartReducer'; 

export const initialCartState = { cart: [] };

export const CartContext = createContext({
  cart: initialCartState.cart,
  dispatch: () => {}, // Ensure dispatch is initialized
});

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
