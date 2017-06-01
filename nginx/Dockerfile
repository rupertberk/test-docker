# Set nginx base image
# https://hub.docker.com/_/nginx/
FROM nginx:stable

# ENV name SSL_CERT_PATH
# ENV name SSL_KEY_PATH

# The following attempts to subsitute env variables to the ADD command in the dockerfile don't work ...
# Env variables do pass through to the .conf files, though

# ADD ./ssl/local.aikidoseattle.org/fullchain.pem ${SSL_CERT_PATH}
# ADD ./ssl/local.aikidoseattle.org/privkey.pem ${SSL_KEY_PATH}
# ADD /ssl/fullchain.pem #{SSL_CERT_PATH}
# ADD /ssl/privkey.pem #{SSL_CERT_KEY_PATH}

ADD ./ssl/local.aikidoseattle.org/fullchain.pem /etc/letsencrypt/live/local.aikidoseattle.org/fullchain.pem
ADD ./ssl/local.aikidoseattle.org/privkey.pem /etc/letsencrypt/live/local.aikidoseattle.org/privkey.pem

# Copy custom configuration file from the current directory
ADD nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
