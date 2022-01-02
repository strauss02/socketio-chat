FROM node:latest

WORKDIR /.

COPY . .

RUN npm ci

EXPOSE 3001

CMD npm run start