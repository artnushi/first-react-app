import React, {useState, useEffect} from 'react';

function UseEffect(props) {
    const [count, setCount] = useState(0);

    useEffect( () => {
        console.log('Component Rendered')
    }, [])


    // useEffect( () => {
    //     if (count === 3) {
    //         alert('ok')
    //     }
    // }, [count])

    return (
        <div>
            <p>Reuse for componentDidUpdate, componentDidMount, componentWillUnmount</p>

            <button type={'button'} className={'btn btn-primary'} onClick={ () => setCount(count+1)}>Count clicked: {count}</button>

            <p>// class/home work: Fetch data and set data using useState and useEffect hooks</p>
        </div>
    );
}

export default UseEffect;