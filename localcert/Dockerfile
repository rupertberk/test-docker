# Set nginx base image
# https://hub.docker.com/_/nginx/
FROM ubuntu:14.04

ADD ./gen-crt.sh /usr/bin/
RUN ["chmod", "+x", "/usr/bin/gen-crt.sh"]
CMD ["/usr/bin/gen-crt.sh"]