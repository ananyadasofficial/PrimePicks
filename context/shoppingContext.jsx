
// import React, { createContext, useReducer } from "react";
// import { cartReducer } from "../reducers/cartReducer";

// export const initialCartState = { cart: [] };
// export const initialUserState = {
//   email: "",
//   isLoggedIn: false
// };

// export const ShoppingContext = createContext({
//   cart: initialCartState,
//   products: [],
//   authUser: initialUserState,
//   dispatch: () => null,
// });

// const ShoppingProvider = ({ children }) => {
//     //useReducer takes 2 values, the reducer function and the initial value and returns 2 states i.e cartwhich is the current state and dispatch which is doing some action,it is not updating the state directly, we want to perform some logic first and want to update the state
//     //Using dispatch we can specify what all operations we want to do.
//   const [products, productDispatch] = useReducer(productReducer, []);
//   const [cart, cartDispatch] = useReducer(cartReducer, initialCartState);
//   const [authUser, authUserDispatch] = useReducer(userAuthReducer, initialUserState);
//   return (
//     <ShoppingContext.Provider value={{ products, cart, authUser, productDispatch, cartDispatch, authUserDispatch}}>
//       {children}
//     </ShoppingContext.Provider>
//   );
// };

// export default ShoppingProvider;
