#!/bin/bash

if [ -z "$SERVER" ]
then
  export SERVER="localhost:5000"
fi

npm start