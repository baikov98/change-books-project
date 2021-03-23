#!/bin/bash
DIRECTORY=~/docker
DC_FILE=docker-compose-standing.yml
#ENV_FILE=.env.staging.lc
 
cd $DIRECTORY;
 
#set -o allexport; . $ENV_FILE;
sudo docker-compose -f $DC_FILE pull;
sudo docker-compose -f $DC_FILE down;
sudo docker-compose -f $DC_FILE up -d;
