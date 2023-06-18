import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./reducers/index";

const store = configureStore({
    reducer: {
        inventory: itemReducer
    },
    devTools: true
});

export default store;