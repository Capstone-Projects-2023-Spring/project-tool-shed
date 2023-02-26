#!/usr/bin/env sh

FILE=documentation/docs/api-specification/generated-docs.md 

rm $FILE
cat > $FILE <<EOF
---
sidebar_position: 2
description: JSDoc-generated API docs
---

EOF

node_modules/.bin/jsdoc2md {middleware,validators}/**/*.js *.js >> $FILE
