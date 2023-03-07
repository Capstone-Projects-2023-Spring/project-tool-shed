#!/usr/bin/env sh

PASSWORD=postgres

mkdir .pgdata 2>/dev/null > /dev/null

## A simple proc for determining if the current
## user is in a group.
ingroup(){ [[ " `id -Gn $2` " == *" $1 "* ]]; }

# Determine if we need to use sudo
PFX='sudo'

if ingroup docker; then
	PFX=''
elif [[ $EUID = 0 ]]; then  
	PFX=''
fi

HASH=$(DOCKER_BUILDKIT=1 $PFX docker build -q - < scripts/Dockerfile.postgis)

$PFX docker run \
  -v $(pwd)/.pgdata:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=$PASSWORD \
  -p 5432:5432 \
  $HASH
