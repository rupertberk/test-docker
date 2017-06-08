#!/bin/bash
printenv


if [ "${NODE_ENV}" = "development" ]; then
	apt-get update

	echo "installing openssl"
	apt-get install openssl

	mkdir /etc/nginx
	cd /etc/nginx
	mkdir ssl
	cd ssl
	mkdir local.aikidoseattle.org
	cd local.aikidoseattle.org

	echo "creating key and certificate."
	openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privkey.pem -out fullchain.pem -subj "/C=US/ST=Washington/L=Seattle/O=UW/CN=local.aikidoseattle.org"
fi