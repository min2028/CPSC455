import axios from 'axios';

const getItems = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
        return response.data;
    } catch (err) {
        console.log(err.message)
        return err.message();
    }
}

const addItem = async (item) => {
    const itemData = {
        name: item.item.name,
        description: item.item.description,
        price: item.item.price,
        image: item.item.image
    }
    // console.log(itemData)
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/items`,
            itemData,
            config
            );
        return response.data;
    } catch (err) {
        console.log(err.message)
        return err.message();
    }
}


const removeItem = async (id) => {
    try {
        console.log(`${process.env.REACT_APP_API_URL}/items/${id}`)
        const response = await axios.delete(
            `${process.env.REACT_APP_API_URL}/items/${id}`,
        );
        return response.data;
    } catch (err) {
        console.log(err.message)
        return err.message();
    }
}

const updateItem = async (item) => {
    console.log("edited item", item)
    const itemData = {
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image
    }
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const response = await axios.patch(
            `${process.env.REACT_APP_API_URL}/items/${item.uuid}`,
            itemData,
            config
            );
        return response.data;
    } catch (err) {
        console.log(err.message)
        return err.message();
    }
}

export default {
    getItems,
    addItem,
    removeItem,
    updateItem,
}