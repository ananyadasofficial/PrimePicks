// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export const initialUserState = {
//     email: "",
//     isLoggedIn: false
// }

// export const UserContext = createContext({
//     user: initialUserState,
//     setUser: () => {}
// })

// import React, { createContext, useReducer } from 'react';
// import { USER_ACTIONS } from '../actions/userActions';

// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// export const UserContext = createContext(initialState);

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case USER_ACTIONS.FETCH_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case USER_ACTIONS.FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     case USER_ACTIONS.FETCH_USER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     case USER_ACTIONS.UPDATE_USER:
//       return {
//         ...state,
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
