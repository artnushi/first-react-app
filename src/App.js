import './App.css';
import Button from './components/Button';
import ClassComponentExample from "./components/ClassComponentExample";


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
            </header>
        </div>
    );
}

export default App;