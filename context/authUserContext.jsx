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
