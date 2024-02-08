# Keycloak


## Export a realm from Keycloak

```shell
docker exec -it keycloak bash

cd /opt/keycloak/bin/
./kc.sh -Djboss.socket.binding.port-offset=100 -Dkeycloak.migration.action=export -Dkeycloak.migration.realmName=oauth2-framework -Dkeycloak.migration.provider=dir -Dkeycloak.migration.dir=. export

exit

docker cp keycloak:/opt/keycloak/bin/oauth2-framework-realm.json .
docker cp keycloak:/opt/keycloak/bin/oauth2-framework-users-0.json .
```

## Import a realm into Keycloak

Remove this snippet from realm file:
```
  "authorizationSettings": {
    "allowRemoteResourceManagement": true,
    "policyEnforcementMode": "ENFORCING",
    "resources": [
      {
        "name": "Default Resource",
        "type": "urn:f73-gen4-jfs:resources:default",
        "ownerManagedAccess": false,
        "attributes": {},
        "_id": "36c0ddaf-cac9-4798-8010-a5242ca41a74",
        "uris": [
          "/*"
        ]
      }
    ],
    "policies": [
      {
        "id": "8b0be6bc-f621-4eda-9bc1-6b328eb97042",
        "name": "Default Policy",
        "description": "A policy that grants access only for users within this realm",
        "type": "js",
        "logic": "POSITIVE",
        "decisionStrategy": "AFFIRMATIVE",
        "config": {
          "code": "// by default, grants any permission associated with this policy\n$evaluation.grant();\n"
        }
      },
      {
        "id": "14214e64-93c5-4a02-b03e-b23604be806d",
        "name": "Default Permission",
        "description": "A permission that applies to the default resource type",
        "type": "resource",
        "logic": "POSITIVE",
        "decisionStrategy": "UNANIMOUS",
        "config": {
          "defaultResourceType": "urn:f73-gen4-jfs:resources:default",
          "applyPolicies": "[\"Default Policy\"]"
        }
      }
    ],
    "scopes": [],
    "decisionStrategy": "UNANIMOUS"
  }
```