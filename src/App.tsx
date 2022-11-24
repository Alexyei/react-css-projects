import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRouter} from "./router/AppRouter";

//need for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//это normalize.css
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <>
            <CssBaseline/>
            <div className="App">
                <div className="container">
                    <AppRouter/>
                </div>
            </div>
        </>
    );
}

export default App;
