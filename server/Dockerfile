<<<<<<< HEAD
FROM strapi/base
=======
FROM node:16-alpine
>>>>>>> fix

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 1337

<<<<<<< HEAD
CMD [ "npm", "start"]
=======
CMD ["npm", "start"]
>>>>>>> fix
