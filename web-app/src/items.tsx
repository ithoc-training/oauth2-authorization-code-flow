import {useKeycloak} from "@react-keycloak/web";
import React, {useEffect, useState} from "react";

interface Item {
    name: string;
    description: string;
}

/*
 * Enrich the backend call with the token to authenticate the user, what is done by the backend in the end.
 */
const callItems = async (token: string | undefined) => {

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const itemsPromise = await fetch('http://localhost:18091/api/items', {
        method: 'GET',
        headers: headers,
    });

    return await itemsPromise.json();
}

const Items = () => {
    const {keycloak, initialized} = useKeycloak();

    const [items, setItems] =
        useState<Item[] | null>(null);

    /*
     * Fetch the items from the backend when the user is authenticated.
     */
    useEffect(() => {
        if (!keycloak.authenticated) {
            return;
        }
        callItems(keycloak.token)
            .then(items => setItems(items))
            .catch(console.error);
    }, [items, keycloak.authenticated]);

    if (!initialized) {
        return <div>Loading...</div>;
    }

    /*
     * Items come back from the backend as JSON array items that can be displayed perfectly in a table.
     */
    return (
        <div>
            <h2>Items</h2>
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>No.</td>
                        <td><b>Name</b></td>
                        <td><b>Description</b></td>
                    </tr>
                    </thead>
                    <tbody>
                    {items?.map(((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    )))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Items;
