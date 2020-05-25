# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json      .
COPY package-lock.json .

#TODO Kien                       why --silient
RUN npm install                  --silent
RUN npm install react-scripts -g --silent
#TODO Kien      why react-scripts?

#TODO Kien      can we just have the below
#RUN npm install -g

# add app
COPY . .

# start app
CMD ["npm", "start"]