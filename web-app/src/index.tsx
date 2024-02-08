import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import keycloak from './keycloak-config';
import LoginButton from "./login";
import Profile from "./profile";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const initOptions = {
    onLoad: 'login-required',
};

root.render(
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
        <LoginButton/>
        <br/>
        <Profile/>
    </ReactKeycloakProvider>
);

reportWebVitals();
