import React, {createContext} from 'react';
import RenderText from "../RenderText";
import Person1 from "../pages/Person1";

function UseContext(props) {
    return (
        <>
            <div>Use context</div>


                <RenderText />
                <Person1 />
        </>
    );
}

export default UseContext;