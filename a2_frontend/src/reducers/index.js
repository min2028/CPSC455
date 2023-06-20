import {createSlice} from "@reduxjs/toolkit";
import {addItemAsync, getItemsAsync, removeItemAsync, updateItemAsync} from "./thunks";

export const initialState = {
    items: [],
    status: 'idle',
    error: null,
    editItem: null
}

// export const patchItem = (state, payload) => {
//     console.log("item to be edited: ", payload);
//     state.editItem = payload
// };

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        patchItem: (state, action) => {
            console.log("item to be edited: ", action.payload);
            state.editItem = action.payload;
        },
        clearEditItem: (state) => {
            state.editItem = null;
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
                const idx = state.items.findIndex((item) => item.uuid === action.payload.uuid)
                state.items[idx] = action.payload
                state.error = null
                state.editItem = null
            })
            .addCase(updateItemAsync.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    },
});

export const {patchItem, clearEditItem} = itemSlice.actions;
export default itemSlice.reducer;