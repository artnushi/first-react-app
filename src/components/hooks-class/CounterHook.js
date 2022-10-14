import React, {useState} from 'react';

function CounterHook(props) {
    const initState = 0;

    const [counter, setCounter] = useState(initState);
    const [message, setMessage] = useState("");

    const [fullName, setFullname] = useState({
        name: 'Art',
        last: 'Nushi'
    });

    console.log('fullName', fullName)

    const increment = () => {
        setCounter( counter => counter +1)
    }

    const changeText = () => {
        setMessage('Hello world')
    }

    return (
        <div>
            <p>Counter: {counter}</p>
            <button className={'btn btn-primary'} onClick={increment}>Increment + 1</button>
            <p>Text: {message}</p>
            <button className={'btn btn-primary'} onClick={changeText}>Change text</button>
            {/*<button className={'btn btn-primary'} onClick={ () => setFullname({name: "Altin", last: 'test' }) }>Set name</button>*/}
            {/*<button className={'btn btn-primary'} onClick={ () => setFullname({name: 'Hello', last: "Besmir"})}>Set last name</button>*/}

            {/*<p>Name: {fullName.name}</p>*/}
            {/*<p>Last: {fullName.last}</p>*/}

            <form>

                <label htmlFor="#">Full name</label>
                <input type="text" onChange={ (e) => setFullname({...fullName, name: e.target.value})} value={fullName.name}/>
                <input type="text" onChange={ (e) => setFullname({...fullName, last: e.target.value})} value={fullName.last}/>

                {/*<input type="text" onChange={ (e) => setFullName({...fullName, first_name: e.target.value})} value={fullName.first_name}/>*/}
                {/*<input type="text" onChange={ (e) => setFullName({...fullName, last_name: e.target.value})} value={fullName.last_name}/>*/}
            </form>

            {JSON.stringify(fullName)}
        </div>
    );
}

export default CounterHook;