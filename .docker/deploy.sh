#!/bin/bash
DIRECTORY=~/docker
DC_FILE=docker-compose-standing.yml
#ENV_FILE=.env.staging.lc
 
cd $DIRECTORY;
 
#set -o allexport; . $ENV_FILE;
docker-compose -f $DC_FILE pull;
docker-compose -f $DC_FILE down;
docker-compose -f $DC_FILE up -d;
