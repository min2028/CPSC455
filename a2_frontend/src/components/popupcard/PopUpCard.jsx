import React from "react";
import "./popupcard.css"

export default function PopUpCard(props) {

    const showPopup = props.trigger ? (
        <div className="popup_main" onClick={props.onClose}>
            <div className="popup">
                <img src={props.item.image} alt={"A DOG"}/>
                <div className="popup_content">
                    <h1>{props.item.name}</h1>
                    <h3>{props.item.description}</h3>
                    <h3>$ {props.item.price}</h3>
                    {/*<button className="close_btn" onClick={props.onClose}>*/}
                    {/*    Close*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    ) : console.log("Failed PopUpCard");

    return (
        <>
            {showPopup}
        </>
    );
}