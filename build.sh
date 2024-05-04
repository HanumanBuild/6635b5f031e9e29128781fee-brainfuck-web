#!/bin/bash
set -o errexit
export REACT_APP_BRAINFUCK_WEB_URL=$BRAINFUCK_WEB_URL
export REACT_APP_BRAINFUCK_SERVER_URL=$BRAINFUCK_SERVER_URL
npm install && npm run build