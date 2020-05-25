# pull official base image - this is debian os with node pre-installed
FROM node:13.12.0-alpine
#                 debian os at version=alpine

CMD tail -F `mktemp`

#
## set working directory
#WORKDIR /app
#
## add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH
#
## install app dependencies
#COPY package.json ./
#COPY package-lock.json ./
#RUN npm install --silent
#RUN npm install react-scripts -g --silent
#
## add app
#COPY . ./
#
## start app
#CMD ["npm", "start"]