import { configureStore } from "@reduxjs/toolkit";
import shopUiSlice from "./features/shopUi/shopUiSlice";
import cartSlice from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    shopUi: shopUiSlice,
    cartStore: cartSlice,
  },
});

export default store;
