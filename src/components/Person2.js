import React, {useState} from 'react';
import UpdatedComponent from "./hoc/UpdatedComponent";
import Button from "./Button";
import Header from "./Header";

function Person2({money, handleIncrease}) {

    return (
        <div>
            <h2>Bashkim is offering {money} dollar</h2>

            <Button handleClick={() => handleIncrease(5)}>
                Increase
            </Button>
        </div>
    );
}

export default UpdatedComponent( Person2 );