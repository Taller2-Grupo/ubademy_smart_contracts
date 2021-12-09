FROM node:14

WORKDIR /app

COPY . /app/

RUN npm install 
RUN npm run deploy-kovan -- --reset

CMD [ "npm", "start" ]