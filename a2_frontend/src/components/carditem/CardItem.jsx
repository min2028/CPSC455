import React from 'react';
import "./carditem.css"
import {useDispatch} from "react-redux";
import {removeItemAsync} from "../../reducers/thunks";

export default function CardItem(props) {

    const dispatch = useDispatch();
    function removeItemFromInventory(id, event) {
        console.log("Removing item from inventory: ", id);
        // To stop the popup from opening when clicking on remove button
        event.stopPropagation();
        dispatch(removeItemAsync(id));
    }

    const handleCardItemPopUp = () => {
        props.onClick(props.item);
    }

    const handleEditItemClick = (event) => {
        event.stopPropagation();
        props.onEditClick(props.item);
    }

    return (
        <>
            <li className="card" onClick={handleCardItemPopUp}>
                <img src={props.item.image} alt={props.item.name}/>
                <div className="card_content">
                    <h2>{props.item.name}</h2>
                    <button onClick={(event) => handleEditItemClick(event)}>Edit</button>
                    <button onClick={(event) => removeItemFromInventory(props.item.uuid, event)}>Remove</button>
                </div>
            </li>
        </>
    )
}
