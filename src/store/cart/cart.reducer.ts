import {
  CartItem,
} from "./cart.types";
import { UnknownAction } from "redux";

import {
  setIsCartOpen,
  setCartItems,
} from './cart.action'

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
}

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: []
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: UnknownAction
): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
