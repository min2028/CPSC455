import React, {useEffect} from 'react';
import "./form.css"
import {useDispatch, useSelector} from "react-redux";
import {addItemAsync, updateItemAsync} from "../../reducers/thunks";
import {clearEditItem} from "../../reducers";


export default function Form() {

    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory);

    useEffect(() => {
        if (inventory.editItem) {
            document.getElementById("name").value = inventory.editItem.name;
            document.getElementById("description").value = inventory.editItem.description;
            document.getElementById("price").value = inventory.editItem.price;
            document.getElementById("image").value = inventory.editItem.image;
        } else {
            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
            document.getElementById("price").value = "";
            document.getElementById("image").value = "";
        }
    }, [inventory.editItem]);


    function addToInventory(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;
        const item = {
            name: name,
            price: price,
            description: description,
            image: image
        }
        document.getElementById("item_form").reset();
        if (inventory.editItem) {
            item._id = inventory.editItem._id;
            dispatch(updateItemAsync(item));
        } else {
            dispatch(addItemAsync(item));
        }
    }

    const handleCancel = () => {
        dispatch(clearEditItem());
    }

    return (
        <>
            <section className="input_container">
                <h1>Welcome to the StoreIt!</h1>
                <h3>Please fill in the information of the item.</h3>
                <div className="form_container">
                    <form id="item_form" onSubmit={addToInventory}>
                        <input type="text" id="name" placeholder="Name (Required)" required/>
                        <textarea id="description" rows="10" placeholder="Description (Required)" required/>
                        <input type="number" id="price" placeholder="$ (Required)" required/>
                        <input type="text" id="image" placeholder="Image URL (Required)" required/>
                        <button type="submit" id="store_button">{inventory.editItem ? "Confirm" : "Store"}</button>
                        <button type="reset" id="clear_button" onClick={handleCancel}>{inventory.editItem ? "Cancel" : "Clear Form"}</button>
                    </form>
                </div>
            </section>
        </>
    )
}
