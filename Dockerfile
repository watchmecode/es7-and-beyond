# --------------------------------------
# build from a base image that includes
# everything needed to run Node.js v7.9
FROM node:7.9
# --------------------------------------

# --------------------------------------
# create a folder for the app, from
# which everything will be run
RUN mkdir -p /var/app
WORKDIR /var/app
# --------------------------------------

# --------------------------------------
# cache npm modules for faster builds
COPY ./package.json /var/app
RUN npm install -g nodemon gulp-cli babel-cli@7.0.0-alpha.9
RUN npm install
# --------------------------------------

# --------------------------------------
# put the app into the image. be sure to
# have a .dockerignore file so you only
# copy the files you need
COPY ./ /var/app
# --------------------------------------

# --------------------------------------
# set environment variables and tcp/ip
# port numbers that will be used
ENV NODE_ENV=development NODE_PATH=./lib:.
EXPOSE 5858
# --------------------------------------

# --------------------------------------
# used for performance improvement when
# installing modules while the container
# is running
VOLUME /var/app/node_modules
# --------------------------------------

# --------------------------------------
# normally you would add a CMD here. for
# this demonstration, the CMD will be 
# set by the "npm run es7" command-line
# --------------------------------------
