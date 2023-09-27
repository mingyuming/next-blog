#!/bin/bash
set -o errexit

source ~/.bashrc

BIN_DIR=$(dirname $0)
BIN_DIR=$(cd $BIN_DIR; pwd)
ROOT_DIR=$(cd $BIN_DIR/..; pwd)

pm2 stop new-www
if [ $? -eq 0 ]; then
    echo "pm2 stop new-www succeed"
else
    echo "pm2 stop new-www failed"
    exit 1
fi

pm2 delete new-www
if [ $? -eq 0 ]; then
    echo "pm2 delete new-www succeed"
else
    echo "pm2 delete new-www failed"
    exit 1
fi