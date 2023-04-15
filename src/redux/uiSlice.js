import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    display: false,
    notification: null,
  },
  reducers: {
    toggleCart: (state) => {
      state.display = !state.display;
    },
    displayNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggleCart, displayNotification } = uiSlice.actions;
export default uiSlice.reducer;
