import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../Feature/Slice"

export const store = configureStore({
    reducer: {
        properties: propertySlice,
    }
})