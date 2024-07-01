import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './screens/StackNavigator';
import { AuthUserContext, AuthUserProvider } from './context/authUserContext';
import { View, ActivityIndicator } from 'react-native';
import TabNavigator from './screens/TabNavigator';
import CartProvider from './context/cartContext';

const App = () => {
  const { authUser, userToken } = useContext(AuthUserContext);

  if (authUser === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <CartProvider>
      <NavigationContainer>
        {userToken !== null ? <TabNavigator /> : <StackNavigator />}
      </NavigationContainer>
    </CartProvider>
  );
};

const AppWrapper = () => (
  <AuthUserProvider>
    <App />
  </AuthUserProvider>
);

export default AppWrapper;
