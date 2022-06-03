FROM node:slim

# Create app directory
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY server.js .
CMD [ "npm", "start" ]
