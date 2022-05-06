FROM node:latest
RUN mkdir /app
COPY * /app
WORKDIR /app/device-api
RUN npm i
ENTRYPOINT ["npm","start"]
