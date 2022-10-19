import React, {useState} from 'react';

export const useCounterHook = (initialState) => {
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch(initialState).then( data => data.json()).then( (response) => {
            console.log('data response', response)
            setData(response)
        }).catch( () => {
            console.log('error')
        })
    }

    return {
        data,
        fetchData: () => fetchData()
    }
}