import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";
import cartSliceReducer from "./cartSlice";

export default configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducer,
  },
});
