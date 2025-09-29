import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProperties = createAsyncThunk(
    "properties/fetchProperties",
    async () => {
        const response = await axios.get(
            "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
        );
        return response.data;
    }
);

const propertySlice = createSlice({
    name: "properties",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProperties.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProperties.fulfilled, (state, action) => {
                state.loading = false;

                state.items = action.payload.map((property, index) => ({
                    ...property,
                    type: index % 2 === 0 ? "rent" : "buy",
                }));
            })
            .addCase(fetchProperties.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch properties";
            });
    },
});

export default propertySlice.reducer;
