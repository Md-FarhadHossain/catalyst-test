import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './features/productSlice'

export default configureStore({
    reducer: {
        product: ProductReducer,
    }
})