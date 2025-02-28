FROM node:14.16.0-alpine3.10

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "production"]