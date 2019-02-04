# Nodejs POC docker image
FROM node:8.12-alpine as builder

# Set the working directory on the docker
WORKDIR /home/node/app

# Copy package.json and package-lock.json to install depedency packages
COPY . .

# Run production only install of dependent packages
RUN npm i

# Build server and client package
RUN npm run build-prod

# Copy build file to new image
FROM node:8.12-alpine

WORKDIR /home/node/app

COPY --from=builder /home/node/app/package*.json ./
COPY --from=builder /home/node/app/light-server.conf.json ./
COPY --from=builder /home/node/app/dist ./dist

RUN npm i --only=production

ENV NODE_SERVER_PORT=8001
ENV NODE_CLIENT_PORT=8080

EXPOSE ${NODE_SERVER_PORT}
EXPOSE ${NODE_CLIENT_PORT}

CMD [ "npm", "start" ]
