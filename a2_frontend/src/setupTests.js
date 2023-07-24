import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import itemReducer from "./reducers";


export function renderWithRedux(ui, options) {
    const store = configureStore(
        {
            reducer: {
                inventory: itemReducer
            }},
    ); // Create your Redux store instance
    return render(<Provider store={store}>{ui}</Provider>, options);
}