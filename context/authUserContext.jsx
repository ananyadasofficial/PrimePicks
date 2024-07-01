
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, { createContext, useEffect, useState } from "react";
// import { BASE_URL } from "../config";
// import axios from "axios";

// export const AuthUserContext = createContext();

// export const AuthUserProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(false);
//   const [userToken, setUserToken] = useState(null);
//   const [userInfo, setUserInfo] = useState(null);

//   const login = async (email,password) => {
//     setAuthUser(true);
//     axios.post(`${BASE_URL}/user/token`, {
//         email,
//         password
//     })
//     .then(res => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         setUserToken(userInfo.data.token);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         AsyncStorage.setItem('userToken', userInfo.data.token);

//         console.log(userInfo);
//         console.log('User Token:' + userInfo.data.token);
//     })
//     .catch(e => {
//         console.log(`Login error ${e}`);
//     });
//     // setUserToken('12345');
//     // await AsyncStorage.setItem('userToken', '12345');
//     setAuthUser(false);
//   };

//   const logout = async () => {
//     setAuthUser(true);
//     setUserToken(null);
//     AsyncStorage.removeItem('userInfo');
//     AsyncStorage.removeItem('userToken');
//     setAuthUser(false);
//   };

//   const isLoggedIn = async () => {
//     try {
//       setAuthUser(true);
//       let userInfo = await AsyncStorage.getItem('userInfo');
//       let userToken = await AsyncStorage.getItem('userToken');
//       userInfo = JSON.parse(userInfo);

//       if(userInfo) {
//           setUserToken(userToken);
//           setUserInfo(userInfo);
//       }
//       setAuthUser(false);
//     } catch (e) {
//       console.log(`isLogged in error ${e}`);
//     }
//   };

//   useEffect(() => {
//     isLoggedIn();
//   }, []);

//   return (
//     <AuthUserContext.Provider value={{ login, logout, authUser, userToken, userInfo }}>
//       {children}
//     </AuthUserContext.Provider>
//   );
// };

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthUserContext = createContext();

export const AuthUserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async () => {
    setAuthUser(true);
    setUserToken('12345');
    await AsyncStorage.setItem('userToken', '12345');
    setAuthUser(false);
  };

  const logout = async () => {
    setAuthUser(true);
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
    setAuthUser(false);
  };

  const isLoggedIn = async () => {
    try {
      setAuthUser(true);
      let token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      setAuthUser(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthUserContext.Provider value={{ login, logout, authUser, userToken }}>
      {children}
    </AuthUserContext.Provider>
  );
};
