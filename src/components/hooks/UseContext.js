import React, {createContext, useState} from 'react';
import RenderName from "../RenderName";
import Person2 from "../pages/Person2";

export const ThemeContext = createContext();

function UseContext(props) {

    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme () {
        setDarkTheme(!darkTheme)
    }

    return (
        <>
            <h1>Use Context</h1>

            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme} type={'button'} className={'btn btn-primary'}>Toggle theme: {darkTheme? 'true' :'false'}</button>
                <RenderName name={'Hello beetroot students'} />
                <Person2 />
            </ThemeContext.Provider>

        </>
    );
}

export default UseContext;