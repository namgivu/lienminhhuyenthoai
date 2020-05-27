# pull official base image - this is debian os with node pre-installed
FROM node:13.12.0-alpine
#                 debian os at version=alpine

# set working directory
WORKDIR /app

# copy :source_folder to :WORKDIR
COPY   .                 .

# tail to keep the container running
CMD tail -F `mktemp`
