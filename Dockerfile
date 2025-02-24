FROM node:16-alpine 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x /app/node_modules/.bin/jest 

CMD ["npm", "start"]