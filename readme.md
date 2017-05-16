# ES7 and Beyond with Docker

Safely learn new JavaScript features with updated Node.js and Babel versions, and zero risk to your existing projects.

## About This Repository

This is the code repository for [the ES7 and Beyond with Docker webinar](https://sub.watchmecode.net/es7-and-beyond), delivered on May 2nd, 2017. 

If you're interested in using this code, understand why it is written in this manner, and what each of the parts are, please [Buy A Copy Of The Webinar](https://sub.watchmecode.net/es7-and-beyond).

### Getting Started

How to get started with this repository:

0. Install Docker on your computer ([Docker for Mac](https://docs.docker.com/docker-for-mac/), [Docker for Windows](https://docs.docker.com/docker-for-windows/), or just play Docker on linux)
0. Make sure you have any version of Node.js with npm installed. Doesn't matter which version, you just need "npm run" capability.
0. Clone the above repository to your computer
0. Run `npm run build` in a console window
0. Run `npm run es7` in the same window

At this point you are at the command line of a shell running within the docker container, and there are a few options for what you can do.

### Run Babel.js v7.0-alpha.9

The container in which you are working has an alpha version of the latest Babel.js installed and configured.

To run Babel.js and use TC-39 Working Group features from stage 0 through 4, use `gulp` - which has also been installed and configured.

0. Run "gulp" to start a watch loop that is used to build the output (i.e., transpile the source files into ES6 code that Node.js can run).
0. Touch one of the source files to trigger a build.

From here, you can either exit the watch loop (Ctrl+C) to get back to the command line, from where you are now able to run any of the transpiled files. Or you can open a new shell instance into the same container (see the section on Shell Into The Container, below).

For example, run `node ./app/build/objectSpread-1.js`.

### Run Node.js v7.9

The container in which you are working has Node.js v7.9 installed giving you access to many features of JavaScript that you may wish to learn.

You can use this version of Node.js like any other version of node. Just call `node` to run a REPL environment, or call `node <script.js>` with your script name
to execute an existing file.

For example, run `node ./app/src/asyncFunctions-2.js`.

### Shell Into The Container

It is often useful to open a second terminal window or command shell into the same Docker container. When you have `gulp` running, as shown above, for example.

To do this, open a new terminal window or command prompt and run:

`npm run es7-shell`

This will create a new shell instance inside of the existing container.

You may call `npm run es7-shell` as many times as you wish, for a given container instance. Just be sure the container is running first, by calling `npm run es7` from a previous window.

## Legal Junk

Copyright &copy; 2017 Muted Solutions, LLC. All Rights Reserved.

Code and configuration found in this repository are distributed under [MIT License](https://mutedsolutions.mit-license.org).

The video and other related content are not redistributable. Please [buy a copy of the webinar](https://sub.watchmecode.net/caching-node-modules-in-docker/) for access to those resources.
