# OAuth2 Authorization Code Flow

## Introduction

## Prerequisites
This example uses a Keycloak running on a remote server, which is already configured in the code.
```json
{
  "issuer": "https://integ.dynv6.net/keycloak/realms/oauth2-framework",
  "authorization_endpoint": "https://integ.dynv6.net/keycloak/realms/oauth2-framework/protocol/openid-connect/auth",
  "token_endpoint": "https://integ.dynv6.net/keycloak/realms/oauth2-framework/protocol/openid-connect/token",
  "introspection_endpoint": "https://integ.dynv6.net/keycloak/realms/oauth2-framework/protocol/openid-connect/token/introspect",
  "userinfo_endpoint": "https://integ.dynv6.net/keycloak/realms/oauth2-framework/protocol/openid-connect/userinfo"
}
```

## Implementation

## Testing
1. Run the resourcer server: `docker compose up -d`
2. Run the web app: `npm start`
3. Open the web app in the browser: `http://localhost:3000`
4. Log in using `web-user/web-user`
