import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header >
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link active" to="person1">Person1</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link " to="person2">Person2</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;