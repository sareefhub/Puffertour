FROM strapi/base

WORKDIR /app

COPY ./package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 1337

<<<<<<< HEAD
CMD [ "npm", "start"]
=======
CMD [ "npm", "start"]
>>>>>>> f66859a (setup)
