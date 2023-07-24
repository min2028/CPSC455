import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Inventory from '../components/inventory/Inventory';
import '@testing-library/jest-dom/extend-expect'
import {renderWithRedux} from "../setupTests";
import {configureStore} from "@reduxjs/toolkit";
import CardItem from "../components/carditem/CardItem";
import {Provider} from "react-redux";

jest.mock('axios');


test("Renders Storage", async () => {
    await waitFor(() => renderWithRedux(<Inventory />));
    const storage = screen.getByText("Storage");
    expect(storage).toBeInTheDocument();
    return Promise.resolve();
})

test("Displays 'empty_text' when there are no items in the inventory", async () => {
    // Mock the Redux store with empty inventory
    const inventoryReducer = (state = {items: []}, action) => {
        switch (action.type) {
            // Add other relevant cases here if needed
            default:
                return state;
        }
    };
    const mockStore = configureStore({
        reducer: {
            inventory: inventoryReducer,
        },
    });
    await waitFor(() =>  renderWithRedux(<Inventory/>, {store: mockStore}));

    const emptyText = screen.getByText("There are no items in the storage.");
    expect(emptyText).toBeInTheDocument();
});
test('Renders CardItem with correct content', async () => {
    const mockItem = {
        _id: '12345',
        name: 'Test Item',
        description: 'This is a test item.',
        price: 19.99,
        image: 'test-image.jpg',
        owner_info: {
            username: 'testuser',
        },
    };

    const inventoryReducer = (state = {items: mockItem}, action) => {
        switch (action.type) {
            // Add other relevant cases here if needed
            default:
                return state;
        }
    };
    // Create a mocked Redux store with an initial state
    const store = configureStore({
        reducer: {
            inventory: inventoryReducer,
        },
    });

    // Render the CardItem component with the mocked store
    await waitFor(() => render(
        <Provider store={store}>
            <CardItem item={mockItem}/>
        </Provider>
    ));

    // Assert that the CardItem content is rendered correctly
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('By: testuser')).toBeInTheDocument();
    expect(screen.getByAltText('Test Item')).toBeInTheDocument();
});

//
// test("getItem should return an array of items", async () => {
//     const items = [
//         {
//             id: 1,
//             name: "test",
//             description: "test",
//             price: 1,
//             image: "test"
//         }
//     ]
//     axios.get.mockResolvedValue({data: items});
//     const response = await getItemsAsync();
//     expect(response).toEqual(items);
// })
