# OAuth2 Authorization Code Flow

Using Keycloak

## Introduction

![](https://images.ctfassets.net/cdy7uua7fh8z/7mWk9No612EefC8uBidCqr/0f2b6ffd4f1225756b7402523474ebde/AuthCode_border.png) 

*Source: 
https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow*

## Implementation

### Step 1: Keycloak Configuration

Configure a Keycloak client:
1. **Redirect URI**: Set valid redirect URIs the authorization server goes back to after successful login.
![](access-settings.png)

2. **OAuth2 Flow**: Set the OAuth2 flow to *Standard flow* which is the Authorization Code flow in Keycloak.
![](capability-config.png)

### Step 2: Keycloak Integration

Use `keycloak-js` to integrate Keycloak library to React. See https://www.npmjs.com/package/keycloak-js.

To view user information in a React application using the keycloak-js library, you typically interact with the Keycloak 
instance to retrieve the user's profile after successful authentication.

1. Ensure User is Authenticated
Before attempting to fetch user information, ensure that the user is authenticated. You can check the authentication status using the authenticated property of the Keycloak instance.

2. Use the `loadUserProfile` Method
After confirming that the user is authenticated, you can call the loadUserProfile method provided by the Keycloak instance. This method is asynchronous and returns a promise that resolves with the user's profile information.

### Example
1. Configuration: `src/keycloak-config.js`
2. Integration: `src/index.tsx`
3. Login: `src/login.tsx`
4. Profile: `src/profile.tsx`

## Testing
1. Create a user in your Keycloak realm.
2. Start the app by `npm start`
3. Browse to the application: `http://localhost:3000`
4. Login with your username and password. 


