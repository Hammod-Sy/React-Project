import { configureStore, createSlice } from "@reduxjs/toolkit";
import Addproduct from "../components/Products/Addproduct";

const initialState ={
    items : []
}

export const productslice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        Addproduct : (state,action)=>{
            state.items.push(action.payload)   //ana hadek parameter mo3ayan wenta tkhazeno fel items
            console.log(state.items)
        },
        DeleteProduct: (state, action) => {
            state.items = state.items.filter((product) => product.id !== action.payload);
          },

          Updateproduct: (state, action) => {
            const updatedProductIndex = state.items.findIndex(product => product.id === action.payload.id);
            if (updatedProductIndex !== -1) {
              state.items[updatedProductIndex] = action.payload;
            }
          }
          

    }
})