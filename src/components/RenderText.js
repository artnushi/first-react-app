import React from 'react';
import {UserContext} from "./hooks-class/UseContext";

function RenderText(props) {
    return (
        <div>
            <UserContext.Consumer>
                {
                    passedProp => {
                        console.log(passedProp)
                        return (
                            <div>Hi, I am {passedProp.firstName} {passedProp.lastName}</div>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
}

export default RenderText;