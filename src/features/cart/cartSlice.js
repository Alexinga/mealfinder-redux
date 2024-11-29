import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cartStore",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.item = [...state.item, action.payload];
      const currentItem = state.item.find(
        (item) => item.id === action.payload.id
      );
      if (!currentItem) {
        state.item.push(action.payload);
      } else {
        cartSlice.caseReducers.increaseQuantity(state, {
          payload: currentItem.id,
        });
      }
    },
    removeFromCart(state, action) {
      state.item = state.item.filter((i) => i.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const currentItem = state.item.find((item) => item.id === action.payload);
      currentItem.quantity = currentItem.quantity + 1;
      currentItem.totalPrice = currentItem.quantity * currentItem.price;
    },
    decreaseQuantity(state, action) {
      const currentItem = state.item.find((item) => item.id === action.payload);
      currentItem.quantity = currentItem.quantity - 1;
      currentItem.totalPrice = currentItem.quantity * currentItem.price;
      if (currentItem.quantity === 0)
        cartSlice.caseReducers.removeFromCart(state, action);
    },
    clearCart(state) {
      state.item = [];
    },
    applyDiscount(state, action) {
      if (action.payload === "DISCOUNT") {
        const cost = state.item.reduce((sum, i) => sum + i.price, 0);
        const percentage = 0.1;
        const discountValue = cost * percentage;
        const discountedCost = cost - discountValue;
        const finalDiscount = discountedCost.toFixed(2);
        state.totalPrice = finalDiscount;
      } else {
        return state.item;
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  applyDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cartStore.item;
export const getTotalCartQuantity = (state) =>
  state.cartStore.item.reduce((sum, i) => sum + i.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cartStore.item.reduce((sum, i) => sum + i.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cartStore.item.find((i) => i.id === id)?.quantity ?? 0;

export const getDiscountTotalCartPrice = (state) => {
  const cost = state.cartStore.item.reduce((sum, i) => sum + i.price, 0);
  const percentage = 0.1;
  const discountValue = cost * percentage;
  const discountedCost = cost - discountValue;
  const finalDiscount = discountedCost.toFixed(2);
  return finalDiscount;
};
