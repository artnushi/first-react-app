import React, {createContext} from 'react';
import RenderText from "../RenderText";
import Person1 from "../pages/Person1";

export const UserContext = createContext();

function UseContext(props) {
    return (
        <>
            <div>Use context</div>

            <UserContext.Provider value={{firstName: 'Art', lastName: 'Nushi'}}>
                <RenderText />
                <Person1 />
            </UserContext.Provider>
        </>
    );
}

export default UseContext;