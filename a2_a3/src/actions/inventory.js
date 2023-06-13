export const cleanItems = () => {
    return {
        type: 'CLEAN_ITEMS'
    };
};

export const addItems = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    };
};

export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        payload: index
    };
};
