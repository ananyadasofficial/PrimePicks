// import React, { createContext, useReducer } from "react";
// import { cartReducer, CART_ACTIONS } from "../reducers/CartReducer";

// export const initialCartState = { cart: [] };

// export const CartContext = createContext({
//   cart: initialCartState,
//   dispatch: () => null,
// });

// const CartProvider = ({ children }) => {
//  //useReducer takes 2 values, the reducer function and the initial value and returns 2 states i.e cartwhich is the current state and dispatch which is doing some action,it is not updating the state directly, we want to perform some logic first and want to update the state
//  //Using dispatch we can specify what all operations we want to do.
//   const [cart, dispatch] = useReducer(cartReducer, initialCartState);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
// cartContext.js
import React, { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer';

export const initialCartState = { cart: [] };

export const CartContext = createContext({
  cart: initialCartState.cart,
  dispatch: () => {}, // Update default value to an empty function
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

