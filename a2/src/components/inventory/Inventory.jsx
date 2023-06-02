import React, { useEffect } from "react";
import "./inventory.css";
import { useSelector } from "react-redux";
import CardItem from "../carditem/CardItem";
import { useState } from "react";

export default function Inventory() {
    const inventory = useSelector((state) => state.inventory);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        console.log(inventory.items);
        setEmpty(inventory.items.length === 0);
    }, [inventory.items]);

    return (
        <>
            <section className="input_container">
                <h1>Storage</h1>
                {empty ? (
                    <h3>There are no items in the storage.</h3>
                ) : (
                    <ul id="cards_container">
                        {inventory.items.map((item, index) => (
                            <CardItem key={index} item={item} index={index} />
                        ))}
                    </ul>
                )}
            </section>
        </>
    );
}
