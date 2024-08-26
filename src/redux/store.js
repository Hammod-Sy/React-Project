import { configureStore } from "@reduxjs/toolkit";
import { productslice } from "./productslice";



const store = configureStore({
   reducer : {
    product : productslice.reducer
   }
})

export default store;