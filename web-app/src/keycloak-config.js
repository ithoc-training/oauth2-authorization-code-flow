import Keycloak from 'keycloak-js';

const keycloakConfig = {
    url: 'https://integ.dynv6.net/keycloak',
    realm: 'oauth2-framework',
    clientId: 'oauth2-authorization-code-flow',
};

const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
