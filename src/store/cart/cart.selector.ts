import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";


const selectCartReducer = (state): CartState => state.cart;

export const selectCarItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
)

export const selectCartCount = createSelector(
  [selectCarItems],
  (cartItems) => cartItems.reduce(
    (total, cartItem) =>
      total + cartItem.quantity
    , 0
  )
);

export const selectCartTotal = createSelector(
  [selectCarItems],
  (cartItems) => cartItems.reduce(
    (total, cartItem) =>
      total + cartItem.quantity * cartItem.price
    , 0
  )
);
