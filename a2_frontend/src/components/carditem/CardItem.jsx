import React from 'react';
import "./carditem.css"
import {useDispatch, useSelector} from "react-redux";
import {removeItemAsync} from "../../reducers/thunks";
import {patchItem} from "../../reducers/index";

export default function CardItem(props) {
    const dispatch = useDispatch();
    function removeItemFromInventory(item, event) {
        console.log("Removing item from inventory: ", item._id);
        // To stop the popup from opening when clicking on remove button
        event.stopPropagation();
        dispatch(removeItemAsync(item._id));
    }

    const handleCardItemPopUp = () => {
        props.onClick(props.item);
    }

    const handleEditItemClick = (event) => {
        // console.log("Editing item from inventory: ", props.item.uuid);
        event.stopPropagation();
        dispatch(patchItem(props.item));
    }

    return (
        <>
            <li className="card" onClick={handleCardItemPopUp}>
                <img src={props.item.image} alt={props.item.name}/>
                <div className="card_content">
                    <h2>{props.item.name}</h2>
                    <h3>By: {props.item.owner_info.username}</h3>
                    <button onClick={(event) => handleEditItemClick(event)}>Edit</button>
                    <button onClick={(event) => removeItemFromInventory(props.item, event)}>Remove</button>
                </div>
            </li>
        </>
    )
}
