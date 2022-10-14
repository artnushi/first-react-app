import React, {useState} from 'react';
import UpdatedComponent from "../hoc/UpdatedComponent";
import Button from "../Button";
import Header from "../Header";
import {UserContext} from "../hooks-class/UseContext";

function Person1({money, handleIncrease}) {

    return (
        <>

            <div className={'mt-5'}>
                <h2>Filani is offering {money} dollar</h2>
                <Button handleClick={() => handleIncrease(2)}>
                    Increase
                </Button>
            </div>

            <UserContext.Consumer>
                {
                    value => {
                        return (
                            <div>Hi, I am {value.firstName} {value.lastName}</div>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    );
}

export default UpdatedComponent( Person1 );