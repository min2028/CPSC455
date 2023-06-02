import React from 'react';
import "./carditem.css"
import {removeItem} from "../../actions/inventory";
import {useDispatch} from "react-redux";

export default function CardItem(props) {

    const dispatch = useDispatch();
    function removeItemFromInventory(index) {
        console.log("Removing item from inventory: ", index);
        dispatch(removeItem(index));
    }

    return (
        <>
            <li className="card">
                <img src={props.item.image} alt={"A DOG"}/>

                <div className="card_content">
                    <h2>{props.item.name}</h2>
                    <button onClick={() => removeItemFromInventory(props.index)}>Remove</button>
                </div>
            </li>
        </>
    )
}
