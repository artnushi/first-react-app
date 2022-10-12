import './App.css';
import Button from './components/Button';
import ClassComponentExample from "./components/ClassComponentExample";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";


function App() {

    const buttons = [
        {
            name: 'Button 1', klasa: 'button-1'
        },
        {
            name: 'Button 2', klasa: 'button-2'
        },
        {
            name: 'Button 3', klasa: 'button-3'
        },{
            name: 'Button 1', klasa: 'button-1'
        },
    ];

    const result = buttons.map( (item, index) => {
        return (
            <>
                <Button key={index} klasat={item.klasa} name={item.name} />
            </>
            )
    });



    return (
        <div className="App">
            <header >
                {/*{result}*/}

                <ClassComponentExample />

                <Person1 />
                <Person2 />
            </header>
        </div>
    );
}

export default App;