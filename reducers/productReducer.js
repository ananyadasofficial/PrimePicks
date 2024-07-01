// // import { Alert } from "react-native";
// // import { PRODUCT_ACTIONS } from "../actions/productActions";

// // // you will dispatch function provided by useReducer
// // export const productReducer = async(state, action) => {
// //   switch (action.type) {
// //     case PRODUCT_ACTIONS.SET_ALL_PRODUCTS: {
// //       //   let products = [];
// //       // const result = await fetch("https://dummyjson.com/products")
// //       // .then(res => res.json())
// //       // .catch(err => {
// //       //   console.error(
// //       //       `ProductList - Failed to parse the response ${err.message}`
// //       //   );
// //       // })
// //       // .then(res => {
// //       //   const {products} = res;
// //       //   console.log("Returned Number of Items", products.length);
// //       //   return products;
// //       // })
// //       // .catch(err => {
// //       //   console.error(
// //       //       `ProductList - Failed to parse the response ${err.message}`
// //       //   );
// //       // });
// //       // if(result && result.length > 0) {
// //       //   products = result;
// //       // }
// //       console.log(state);
// //       return { ...state, products: payload};
// //     }
   

// //     default:
// //       Alert.alert("Invalid action");
// //       return state;
// //   }
// // };
// import { PRODUCT_ACTIONS } from '../actions/productActions';

// const initialState = {
//   products: [],
// };

// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case PRODUCT_ACTIONS.FETCH_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         products: action.payload,
//       };
//     case PRODUCT_ACTIONS.ADD_PRODUCT:
//       return {
//         ...state,
//         products: [...state.products, action.payload],
//       };
//     case PRODUCT_ACTIONS.REMOVE_PRODUCT:
//       return {
//         ...state,
//         products: state.products.filter(product => product.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default productReducer;
