#!/usr/bin/env sh

FILE=documentation/docs/api-specification.md 

rm $FILE
cat > $FILE <<EOF
---
sidebar_position: 2
description: JSDoc-generated API docs
---
# API Specification

EOF

node_modules/.bin/jsdoc2md {middleware,validators}/**/*.js *.js >> $FILE
