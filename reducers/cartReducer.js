import { Alert } from 'react-native';

export const CART_ACTIONS = Object.freeze({
  REMOVE_FROM_CART: 0,
  ADD_TO_CART: 1,
  REMOVE_ALL: 2,
  UPDATE_QUANTITY: 3,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productToAdd = action.payload;
      const existingItem = state.cart.find(item => item.id === productToAdd.id);

      if (existingItem) {
        const updatedCart = state.cart.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...productToAdd, quantity: 1 }] };
      }
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payload;
      const updatedCart = state.cart.filter(item => item.id !== productId);
      return { ...state, cart: updatedCart };
    }

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      const updatedCart = state.cart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
      return { ...state, cart: updatedCart };
    }

    case CART_ACTIONS.REMOVE_ALL: {
      Alert.alert('Remove All', 'Are you sure you want to remove all items from your cart?', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => {
            return { ...state, cart: [] };
          },
        },
      ]);
      return state;
    }

    default:
      return state;
  }
};
