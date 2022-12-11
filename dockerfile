FROM node:16.17.1
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g npm@8.19.3
RUN npm install

COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]