import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Icart {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantitys: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as Icart[],
  reducers: {
    addItem(state, action: PayloadAction<Icart>) {
      console.log("Action Payload in addItem:", action.payload);
    
      const existingItem = state.find((item) => item._id === action.payload._id);
      
      if (existingItem) {
        existingItem.quantitys += 1;
      } else {
        state.push({ ...action.payload, quantitys: 1 });
      }
    },
    
    decreaseQuantity(state, action: PayloadAction<string>) {
      console.log("Decrease Action Payload:", action.payload);
    
      const existingItem = state.find((item) => item._id === action.payload);
      if (existingItem && existingItem.quantitys > 1) {
        existingItem.quantitys -= 1;
      }
    },
    remove(state, action: PayloadAction<string>) {
      if (Array.isArray(state)) {
        return state.filter((item) => item._id !== action.payload);
      }
      return state; 
    },
    removeAllItems(){
      return []
    }
  }, 
});

export const { addItem, remove ,decreaseQuantity,removeAllItems} = cartSlice.actions;
export default cartSlice.reducer;
