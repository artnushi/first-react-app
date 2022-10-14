import React, {useState} from 'react';
import UpdatedComponent from "../hoc/UpdatedComponent";
import Button from "../Button";
import Header from "../Header";
import {ThemeContext, UserContext} from "../hooks/UseContext";

function Person2({money, handleIncrease}) {

    return (


            <ThemeContext.Consumer>
                {
                    darkTheme => {
                        return (
                            <div className={'mt-5'} style={{background: darkTheme ? 'black' : 'white', color: darkTheme ? 'white' : 'black'}}>
                                <h2>Bashkim is offering {money} dollar</h2>

                                <Button handleClick={() => handleIncrease(5)}>
                                    Increase
                                </Button>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>

    );
}

export default UpdatedComponent( Person2 );