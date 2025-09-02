import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlide from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlide.reducer },
});

export default store;
