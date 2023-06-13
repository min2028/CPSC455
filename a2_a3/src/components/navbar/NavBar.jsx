import React from 'react';
import "./navbar.css"

export default function NavBar() {
    return (
        <>
             <nav className="navbar">
                 <ul className="nav_list">
                     <li className="nav_item">
                         <a id="nav_home" href="/">Home</a>
                     </li>
                     <li className="nav_item">
                         <a id="nav_about" href="/About">About</a>
                     </li>
                 </ul>
                 <h2 className="nav_brand">
                     <a id="nav_inventory" href="/">StoreIt</a>
                 </h2>
             </nav>
        </>
    )
}