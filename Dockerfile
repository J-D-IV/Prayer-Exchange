FROM node:latest

WORKDIR /public

COPY . /public

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "start" ]