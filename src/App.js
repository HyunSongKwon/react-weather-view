import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import RouterApp from "./RouterApp";

function App() {
    const city = 'Incheon';
    return (
        <BrowserRouter>
            <div className="App">
                <RouterApp />
            </div>
        </BrowserRouter>
    );
}

export default App;
