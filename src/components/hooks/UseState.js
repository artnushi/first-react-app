import React, {useState} from 'react';

function UseState(props) {
    const [firstName, setFirstName] = useState('Filan');
    const [lastName, setLastName] = useState('Fisteku');

    const [fullName, setFullName] = useState({first_name: 'John', last_name: 'Doe'});

    return (
        <div>
            <p>
                Name: {firstName}, Lastname: {lastName}
            </p>

            <p>Full name:
                {fullName.first_name} {fullName.last_name}
            </p>

            <form>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>


                <label htmlFor="#">Full name</label>
                <input type="text" onChange={ (e) => setFullName({first_name: e.target.value})} value={fullName.first_name}/>
                <input type="text" onChange={ (e) => setFullName({last_name: e.target.value})} value={fullName.last_name}/>

                {/*<input type="text" onChange={ (e) => setFullName({...fullName, first_name: e.target.value})} value={fullName.first_name}/>*/}
                {/*<input type="text" onChange={ (e) => setFullName({...fullName, last_name: e.target.value})} value={fullName.last_name}/>*/}
            </form>

            {/*{JSON.stringify(fullName)}*/}
        </div>
    );
}

export default UseState;