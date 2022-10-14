import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <header className={'mb-5 mt-3 d-flex align-items-center justify-content-between'}>
            <div>
                <h1 style={{ background: '#eee', padding: '5px 10px', textTransform: 'uppercase', borderRadius: '10px'}}>
                    <Link className="mb-0 nav-link active" to="/">React app</Link>
                </h1>
            </div>

                <ul className="nav justify-content-center">

                    <li className="nav-item">
                        <Link className="nav-link active" to="person1">Person1</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="person2">Person2</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="hooks">Hooks</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link " to="classwork">Class Work</Link>
                    </li>
                </ul>
        </header>
    );
}

export default Header;