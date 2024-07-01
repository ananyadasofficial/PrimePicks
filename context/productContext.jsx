
// import React, { createContext, useReducer } from "react";
// import { productReducer } from "../reducers/productReducer";

// //export const initialCartState = { cart: [] };
// // export const initialUserState = {
// //   email: "",
// //   isLoggedIn: false
// // };

// export const ProductContext = createContext({
//   products: [],
 
//   dispatch: () => null,
// });

// const ProductProvider = ({ children }) => {
//     //useReducer takes 2 values, the reducer function and the initial value and returns 2 states i.e cartwhich is the current state and dispatch which is doing some action,it is not updating the state directly, we want to perform some logic first and want to update the state
//     //Using dispatch we can specify what all operations we want to do.
//   const [products, productDispatch] = useReducer(productReducer, []);
  
//   return (
//     <ProductContext.Provider value={{ products, productDispatch}}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;

