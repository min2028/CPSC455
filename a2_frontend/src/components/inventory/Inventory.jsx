import React, { useEffect } from "react";
import "./inventory.css";
import { useSelector } from "react-redux";
import CardItem from "../carditem/CardItem";
import { useState } from "react";
import PopUpCard from "../popupcard/PopUpCard";
import {useDispatch} from "react-redux";
import {getItemsAsync} from "../../reducers/thunks";
// {
//     uuid: 'cd90ce4c-1575-44bb-b9f0-f7c5d8e47169',
//     name: 'Recycled Fresh Chicken',
//     price: '752.00',
//     description: 'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
//     image: 'https://picsum.photos/seed/Z55dwvWSq/640/480'
// }
// {
//     uuid: '96271bb7-19f6-4039-bfe5-aaf9dc5d4fbf',
//         name: 'Tasty Soft Hat',
//     price: '465.00',
//     description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
//     image: 'https://picsum.photos/seed/EtvDodLk/640/480'
// }
// {
//     uuid: '531a493e-793c-40ed-9f48-042e3a12df3b',
//         name: 'Licensed Cotton Bacon',
//     price: '782.00',
//     description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
//     image: 'https://loremflickr.com/640/480?lock=6757468612853760'
// }
// {
//     uuid: 'd425610f-2bd8-423f-ac2f-e2a788fa0985',
//         name: 'Luxurious Granite Hat',
//     price: '249.00',
//     description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
//     image: 'https://loremflickr.com/640/480?lock=8385065411149824'
// }
// {
//     uuid: '058df357-6ebf-4893-b5bc-e33d0459120a',
//         name: 'Ergonomic Rubber Shoes',
//     price: '781.00',
//     description: 'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
//     image: 'https://picsum.photos/seed/AxP8LoQp/640/480'
// }


export default function Inventory() {
    const inventory = useSelector((state) => state.inventory);
    const [empty, setEmpty] = useState(false);
    const [popup, setPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setEmpty(inventory.items.length === 0);
    }, [inventory.items]);


    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);

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
