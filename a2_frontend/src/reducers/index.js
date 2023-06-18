import {createSlice} from "@reduxjs/toolkit";
import {addItemAsync, getItemsAsync, removeItemAsync, updateItemAsync} from "./thunks";

export const initialState = {
    items: [],
    status: 'idle',
    error: null,
}


const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item, index) => index !== action.payload)
        },
        cleanItems: (state, action) => {
            state.items = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getItemsAsync.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(getItemsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload.items
                state.error = null
            })
            .addCase(getItemsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(addItemAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // console.log(action.payload)
                state.items = [...state.items ,action.payload];
                state.error = null
            })
            .addCase(addItemAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
            .addCase(removeItemAsync.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(removeItemAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // console.log(action.payload.items)
                state.items = action.payload.items
                state.error = null
            })
            .addCase(removeItemAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
            .addCase(updateItemAsync.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(updateItemAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload.items
                state.error = null
            })
            .addCase(updateItemAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    },
});

export default itemSlice.reducer;