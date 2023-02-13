FROM node:alpine

WORKDIR /usr/a-node-app

COPY ./package.json ./

RUN npm install
COPY ./ ./

CMD ["npm", "run", "start"]