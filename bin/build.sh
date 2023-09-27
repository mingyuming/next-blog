#!/bin/bash

source ~/.bashrc

BIN_DIR=$(dirname $0)
BIN_DIR=$(cd $BIN_DIR; pwd)
ROOT_DIR=$(cd $BIN_DIR/..; pwd)

npm run build-online