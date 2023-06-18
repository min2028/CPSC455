import {createAsyncThunk} from "@reduxjs/toolkit";
import {actionTypes} from "../actions/actionTypes";
import ItemService from "./service";
export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEM,
    async () => {
       return await ItemService.getItems()
    }
);

export const addItemAsync = createAsyncThunk(
    actionTypes.ADD_ITEM,
    async (item) => {
        return await ItemService.addItem({item})
    }
);

export const removeItemAsync = createAsyncThunk(
    actionTypes.REMOVE_ITEM,
    async (id) => {
        return await ItemService.removeItem(id)
    }
);

export const updateItemAsync = createAsyncThunk(
    actionTypes.PATCH_ITEM,
    async (item) => {
        return await ItemService.updateItem(item)
    }
);