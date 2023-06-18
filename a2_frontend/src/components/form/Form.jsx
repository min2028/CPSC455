import React from 'react';
import "./form.css"
import {useDispatch} from "react-redux";
import {addItemAsync} from "../../reducers/thunks";



export default function Form({item}) {

    const dispatch = useDispatch();

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
        dispatch(addItemAsync(item));
    }


    return (
        <>
            <section className="input_container">
                <h1>Welcome to the StoreIt!</h1>
                <h3>Please fill in the information of the item.</h3>
                <div className="form_container">
                    <form id="item_form" onSubmit={addToInventory}>
                        <input type="text" id="name" placeholder="Name (Required)" required />
                        <textarea id="description" rows="10" placeholder="Description (Required)" required />
                        <input type="number" id="price" placeholder="$ (Required)" required />
                        <input type="text" id="image" placeholder="Image URL (Required)" required />
                        <button type="submit" id="store_button"> Store </button>
                        <button type="reset" id="clear_button">Clear Form</button>
                    </form>
                </div>
            </section>
        </>
    )
}
