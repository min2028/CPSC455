import React from 'react';
import "./carditem.css"
import {removeItem} from "../../actions/inventory";
import {useDispatch} from "react-redux";

export default function CardItem(props) {

    const dispatch = useDispatch();
    function removeItemFromInventory(index, event) {
        console.log("Removing item from inventory: ", index);
        event.stopPropagation();
        dispatch(removeItem(index));
    }

    const handleCardItemPopUp = () => {
        props.onClick(props.item);
    }

    return (
        <>
            <li className="card" onClick={handleCardItemPopUp}>
                <img src={props.item.image} alt={"A DOG"}/>

                <div className="card_content">
                    <h2>{props.item.name}</h2>
                    <button onClick={(event) => removeItemFromInventory(props.index, event)}>Remove</button>
                </div>
            </li>
        </>
    )
}
