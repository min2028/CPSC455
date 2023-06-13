import { combineReducers } from 'redux';


export const initialState = {
    items: [
        { name: "Aung Da Grape", description: "This is a Grape", price: 1000, image: "https://m.media-amazon.com/images/I/41e30GpzsNL._AC_.jpg" },
        { name: "Aung Da Potato", description: "This is a Potato", price: 500, image: "https://m.media-amazon.com/images/I/61PoKJpmxPL._AC_SX679_.jpg" },
    ]
}

const rootReducer = combineReducers({
     inventory: inventoryReducer,
});

function inventoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                // ...state was added in case more properties are added to the state
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        case 'CLEAN_ITEMS':
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
}

export default rootReducer;