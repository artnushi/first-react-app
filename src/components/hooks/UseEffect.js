import React, {useState, useEffect} from 'react';
import {useCounterHook} from "./custom/useCounterHook";

function UseEffect(props) {
    const posts = useCounterHook('https://jsonplaceholder.typicode.com/posts');
    const users = useCounterHook('https://jsonplaceholder.typicode.com/users');
    // const fetch = useFetch(19);

    const {data} = posts;
    // console.log(users)
    const _users = users.data;

    const fetchAll = () => {
        posts.fetchData();
        users.fetchData();
    }

    return (
        <div>
            <p>Reuse for componentDidUpdate, componentDidMount, componentWillUnmount</p>

            <button type={'button'} className={'btn btn-primary'} onClick={fetchAll}>Fetch all</button>
            {/*<button type={'button'} className={'btn btn-primary'} onClick={users.fetchData}>Fetch Users</button>*/}

            <p>// class/home work: Fetch data and set data using useState and useEffect hooks</p>
            <h1>Posts</h1>
            {data !== null && data.map( (item) => {
                return <div>{item.title}</div>
            })}

            <h1>Users</h1>
            {_users !== null && _users.map( (item) => {
                return <div>{item.name}</div>
            })}
        </div>
    );
}

export default UseEffect;