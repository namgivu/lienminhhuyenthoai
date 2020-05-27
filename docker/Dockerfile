#TODO Kien add ref. url here
# pull official base image
FROM node:13.12.0-alpine

# rerun tag
RUN echo 200528_x01

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json   .
COPY yarn.lock      .

RUN yarn install

#    src folder   WORKDIR folder
COPY .            .

# start app
CMD ["yarn", "start"]