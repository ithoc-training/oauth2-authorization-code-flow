import React from "react";
import {useKeycloak} from "@react-keycloak/web";

const LoginButton = () => {
    const {keycloak, initialized} = useKeycloak();

    if (!initialized) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <div>User is {!keycloak.authenticated ? 'NOT ' : ''}authenticated</div>
            {keycloak.authenticated && (
                <button onClick={() => keycloak.logout()}>Logout</button>
            )}
        </div>
    );
};

export default LoginButton;
