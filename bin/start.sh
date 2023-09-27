#!/bin/bash
set -o errexit

source ~/.bashrc

BIN_DIR=$(dirname $0)
BIN_DIR=$(cd $BIN_DIR; pwd)
ROOT_DIR=$(cd $BIN_DIR/..; pwd)

npm run start-online
if [ $? -eq 0 ]; then
    echo "npm run start-online succeed"
else
    echo "npm run start-online failed"
    exit 1
fi