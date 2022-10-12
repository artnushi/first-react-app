import './App.css';
import Button from './components/Button';
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";


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
        <div className="container">

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" exact element={<Layout />} />
                    <Route path="/person1" element={<Person1 />} />
                    <Route path="/person2" element={<Person2 />} />
                </Routes>
            </BrowserRouter>,


        </div>
    );
}

export default App;