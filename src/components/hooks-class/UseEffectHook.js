import React, {useEffect, useState} from 'react';

function UseEffectHook(props) {
    const initState = 0;

    const [counter, setCounter] = useState(initState);
    const [data, setData] = useState(null);

    const increment = () => {
        setCounter( counter => counter +1)
    }

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then( data => data.json()).then( (response) => {
            setData(response)
        }).catch( () => {
            setData(null)
        })
    }

    useEffect( () => {
        fetchData();
    }, [])

    useEffect( () => {
        console.log('the count value updated')
    }, [counter])


    useEffect( () => {
        console.log('the data has been set')
    }, [data !== null] )

    return (
        <>
            <div>Use effect</div>
            {console.log('data', data)}

            {Array.isArray( data ) && data.length > 0 && data.map( (item) => {
                return <div key={data.id}>Item body: {item.body}</div>
            })}
            <p>Counter: {counter}</p>
            <button className={'btn btn-primary'} onClick={increment}>Increment + 1</button>
        </>
    );
}

export default UseEffectHook;