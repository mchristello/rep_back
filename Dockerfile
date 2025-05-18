FROM node:24-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]