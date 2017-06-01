# Create image based on the official Node 6 image from dockerhub
FROM node:6

# Create a directory where our app will be placed

RUN mkdir -p /usr/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/app

# Copy dependency definitions
ADD package.json /usr/app

# Install dependecies
# RUN npm install pm2 -g

RUN npm install

# Get all the code needed to run the app
ADD . /usr/app

# Expose the port the app runs in
EXPOSE 3000
# EXPOSE APP_PORT

# ENV NODE_ENV=development

# Serve the app

# Run your program under Tini
CMD ["npm", "start"]
# CMD ["pm2-docker", "server.js"]


# ENTRYPOINT ["/bin/sh -c"]
# CMD ["bash"]