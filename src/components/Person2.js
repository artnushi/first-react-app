import React, {useState} from 'react';
import UpdatedComponent from "./hoc/UpdatedComponent";
import Button from "./Button";

function Person2({money, handleIncrease}) {

    return (
        <div>
            <h2>Bashkim is offering {money} dollar</h2>
            {/*<button type={'button'} onClick={ () => props.handleIncrease(5) }>Increase</button>*/}

            <Button handleClick={() => handleIncrease(5)}>
                Increase
            </Button>
        </div>
    );
}

export default UpdatedComponent( Person2 );