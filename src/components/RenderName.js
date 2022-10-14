import React from 'react';
import {ThemeContext} from "./hooks/UseContext";

function RenderName({name}) {
    return (
        <>
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={{background: darkTheme ? 'black' : 'white', color: darkTheme ? 'white' : 'black'}}>{name}</div>
                }
            }
            </ThemeContext.Consumer>
        </>

    );
}

export default RenderName;