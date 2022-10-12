import React, {useState} from 'react';
import UpdatedComponent from "./hoc/UpdatedComponent";
import Button from "./Button";
import Header from "./Header";

function Person1({money, handleIncrease}) {

    return (
        <div>
            <h2>Filani is offering {money} dollar</h2>
            <Button handleClick={() => handleIncrease(2)}>
                Increase
            </Button>
        </div>
    );
}

export default UpdatedComponent( Person1 );