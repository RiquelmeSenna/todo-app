# syntax=docker/dockerfile:1

FROM node:latest


WORKDIR /todo-app

COPY . .

RUN rm -rf node_modules
RUN npm install
RUN npm run build


CMD ["npm", "start"]

EXPOSE 4000