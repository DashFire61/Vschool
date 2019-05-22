import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import UserProvider from './context/UserProvider.js';
import SteamProvider from './context/SteamProvider';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <SteamProvider>
                <App/>
            </SteamProvider>
        </UserProvider>
    </BrowserRouter>
, document.getElementById("root"));
