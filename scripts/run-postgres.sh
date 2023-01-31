#!/usr/bin/env sh

mkdir .pgdata

sudo docker run \
  -v $(pwd)/.pgdata:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  postgres
