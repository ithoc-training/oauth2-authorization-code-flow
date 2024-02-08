import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import keycloak from './keycloak-config';
import LoginButton from "./login";
import Profile from "./profile";
import Items from "./items";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const initOptions = {
    onLoad: 'login-required',
};

root.render(
    /*
     * Wrap your App with ReactKeycloakProvider that ensures that a user must be authenticated.
     * Note: Strict mode is not allowed in combination with ReactKeycloakProvider.
     */
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
        <LoginButton/>
        <br/>
        <Profile/>
        <Items />
    </ReactKeycloakProvider>
);

reportWebVitals();
