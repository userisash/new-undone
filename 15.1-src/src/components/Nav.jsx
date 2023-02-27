import React from "react";
import {Link} from 'react-router-dom'


export function Nav(){
    return <header className="header">
        <nav className="nav">
            <ul>
                <li><Link className="link" to={"/"}>Home</Link></li>
                <li><Link className="link" to={"/products"}>Products</Link></li>
                <li><Link className="link" to={"/products/:id"}>Details</Link></li>
                <li><Link className="link" to={"*"}>Details</Link></li>
            </ul>
        </nav>
    </header>
}