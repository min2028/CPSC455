import React, { useEffect } from "react";
import "./inventory.css";
import { useSelector } from "react-redux";
import CardItem from "../carditem/CardItem";
import { useState } from "react";
import PopUpCard from "../popupcard/PopUpCard";
import {useDispatch} from "react-redux";
import {getItemsAsync} from "../../reducers/thunks";

export default function Inventory() {
    const inventory = useSelector((state) => state.inventory);
    const [empty, setEmpty] = useState(false);
    const [popup, setPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setEmpty(inventory.items.length === 0);
        //present testing
    }, [inventory.items]);


    useEffect(() => {
        dispatch(getItemsAsync());
    });

    const handleCardItemPopUp = (item) => {
        console.log("Card Item clicked")
        setSelectedItem(item);
        setPopup(true);
    }

    const handleCardItemPopUpClose = () => {
        console.log("Card Item closed")
        setPopup(false);
    }

    return (
        <>
            <section className="input_container">
                <h1>Storage</h1>
                {empty ? (
                    <h3 className={"empty_text"}>There are no items in the storage.</h3>
                ) : (
                    <>
                        <ul id="cards_container">
                            {
                                inventory.items.map((item, index) => (
                                <CardItem key={index} item={item} index={index}
                                          onClick={()=> handleCardItemPopUp(item)}
                                />
                            ))}
                        </ul>
                        {popup && (
                            <PopUpCard trigger={popup} item={selectedItem} onClose={handleCardItemPopUpClose}/>
                        )}
                    </>
                )}
            </section>
        </>
    );
}
