FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm isntall

COPY . .

EXPOSE 3333

RUN npx prisma generate

CMD ["npm","run" ,"dev"]