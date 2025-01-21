import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Icart {
  id: string;
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
      const existingItem = state.find((item)=>item.id=== action.payload.id)
      if(existingItem){
        existingItem.quantitys += 1
      } else{
        state.push(
          {...action.payload}
        )
      }
    },
    decreaseQuantity(state,action:PayloadAction<string>){
      const existingItem = state.find((item)=>item.id===action.payload)
      if
      (existingItem && existingItem.quantitys > 1){
        existingItem.quantitys -= 1
      }
    },
    remove(state, action: PayloadAction<string>) {
      if (Array.isArray(state)) {
        return state.filter((item) => item.id !== action.payload);
      }
      return state; 
    },
  }, 
});

export const { addItem, remove ,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
