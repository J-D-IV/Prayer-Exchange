FROM node:latest

WORKDIR /public

COPY . /public

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]