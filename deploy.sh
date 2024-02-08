#!/bin/bash
docker compose down
docker rmi olihock/keycloak:1.0.0
docker rmi olihock/oauth2-resource-server:1.0.0
docker compose up --build