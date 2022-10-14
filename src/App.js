import './App.css';
import Button from './components/Button';
import Person1 from "./components/pages/Person1";
import Person2 from "./components/pages/Person2";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Hooks from "./components/pages/hooks";
import CounterClass from "./components/hooks-class/CounterClass";
import CounterHook from "./components/hooks-class/CounterHook";
import UseEffectHook from "./components/hooks-class/UseEffectHook";
import UseContext from "./components/hooks/UseContext";


function App() {

    const buttons = [
        {
            name: 'Button 1', klasa: 'button-1 btn-primary mx-2'
        },
        {
            name: 'Button 2', klasa: 'button-2 btn-danger mx-2'
        },
        {
            name: 'Button 3', klasa: 'button-3 btn-success mx-2'
        },{
            name: 'Button 1', klasa: 'button-1 btn-warning mx-2'
        },
    ];

    const result = buttons.map( (item, index) => {
        return (
            <>
                <Button key={index} klasat={item.klasa}  >
                    {item.name}
                </Button>
            </>
            )
    });

    return (
        <div className="container d-flex justify-content-center flex-column">
            {/*<div className="d-flex">*/}
            {/*    {result}*/}
            {/*</div>*/}

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Layout />} />
                    <Route path="/person1" element={<Person1 />} />
                    <Route path="/person2" element={<Person2 />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/classwork" element={<UseContext />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;