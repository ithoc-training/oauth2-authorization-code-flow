import React, {useEffect, useState} from "react";
import {useKeycloak} from "@react-keycloak/web";
import {KeycloakProfile} from "keycloak-js";

const Profile = () => {
    const {keycloak, initialized} = useKeycloak();

    const [profile, setProfile] =
        useState<KeycloakProfile | null>(null);

    useEffect(() => {
        if (keycloak?.authenticated) {
            keycloak.loadUserProfile().then(userProfile => {
                setProfile(userProfile);
            }).catch(err => {
                console.error("Failed to load user profile", err);
            });
        }
    }, [keycloak, keycloak?.authenticated]);

    if (!initialized) {
        return <div>Loading...</div>;
    }

    if (!keycloak?.authenticated) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            {profile ? (
                <div>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    <p>FirstName: {profile.firstName}</p>
                    <p>LastName: {profile.lastName}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;
