FROM node:16.16.0-alpine3.15

WORKDIR /app
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @vue/cli
RUN npm install vue2-leaflet leaflet --save

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
