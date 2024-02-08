import React from "react";
import {useKeycloak} from "@react-keycloak/web";

const LoginButton = () => {
    const {keycloak, initialized} = useKeycloak();

    if (!initialized) {
        return <div>Loading ...</div>;
    }

    /*
     * The token comes with the keycloak object when posting client ID and secret via the token endpoint.
     * Show the user's token and a logout button if the user is authenticated.
     * Note: This is to demonstrate how to use the token to make requests to the backend.
     *       It must be disabled in production.
     */
    return (
        <div>
            <div>User is {!keycloak.authenticated ? 'NOT ' : ''}authenticated</div>
            {keycloak.authenticated && (
                <div>
                    <p>{keycloak.token}</p>
                    <button onClick={() => keycloak.logout()}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default LoginButton;
