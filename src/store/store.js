import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cartSlice/cartSlice";
import { procutSliceReducer } from "./productsSlice/productsSlice";
import { uiReducer } from "./uiSlice/uiSlice";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    products: procutSliceReducer,
    ui: uiReducer,
  },
});

export default store;
