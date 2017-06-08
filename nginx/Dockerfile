# Set nginx base image
# https://hub.docker.com/_/nginx/
FROM nginx:stable

# Copy custom configuration file from the current directory
ADD nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
