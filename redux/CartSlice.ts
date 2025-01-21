import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Icart {
  id: string;
  name: string;
  price: number;
  image: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Icart[],
  reducers: {
    addItem(state, action: PayloadAction<Icart>) {
      if (Array.isArray(state)) {
        state.push(action.payload);
      } else {
        // Reinitialize state as an array if it is not an array
        return [action.payload];
      }
    },
    remove(state, action: PayloadAction<string>) {
      if (Array.isArray(state)) {
        return state.filter((item) => item.id !== action.payload);
      }
      return state; // Return state unchanged if it is not an array
    },
  }, // Removed extra comma here
});

export const { addItem, remove } = cartSlice.actions;
export default cartSlice.reducer;
