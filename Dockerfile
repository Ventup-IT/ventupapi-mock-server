FROM node:15.2.1

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

ENTRYPOINT ["node", "index.js"]
