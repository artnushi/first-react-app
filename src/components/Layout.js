import React, {Component} from 'react';
import ClassComponentExample from "./ClassComponentExample";
import Person1 from "./pages/Person1";
import Person2 from "./pages/Person2";
import {Link} from "react-router-dom";
import Header from "./Header";

class Layout extends Component {

    render() {
        return (
            <div>
                <ClassComponentExample />

                <Person1 />
                <Person2 />
            </div>
        );
    }
}

Layout.propTypes = {};

export default Layout;