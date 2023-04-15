import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceItem: (state, action) => {
      const newItems = action.payload;
      state.items = newItems.items;
      state.totalQuantity = newItems.totalQuantity;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItem: (state, action) => {
      const selectedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      const itemQuantity = selectedItem.quantity;
      if (itemQuantity === 1) {
        state.items = state.items.filter((item) => item.id !== selectedItem.id);
      } else {
        selectedItem.quantity--;
        selectedItem.totalPrice -= selectedItem.price;
      }
      state.totalQuantity--;
      state.changed = true;
    },
  },
});

export const { addItem, removeItem, replaceItem } = cartSlice.actions;
export default cartSlice.reducer;
