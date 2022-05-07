FROM node:latest
RUN mkdir /app
COPY ./device-api /app
WORKDIR /app
RUN npm i
ENTRYPOINT ["npm","start"]
