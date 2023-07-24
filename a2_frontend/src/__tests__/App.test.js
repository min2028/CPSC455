import React from 'react';
import { render, waitFor} from '@testing-library/react';
import App from '../App';
import axios from 'axios';
import {getItemsAsync} from "../reducers/thunks";

jest.mock('axios');

test("getItem should return an array of items", async () => {
    const items = [
        {
            id: 1,
            name: "test",
            description: "test",
            price: 1,
            image: "test"
        }
    ]
    axios.get.mockResolvedValue({data: items});
    const response = await getItemsAsync();
    expect(response).toEqual(items);
})
