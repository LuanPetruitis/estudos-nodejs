FROM node:latest

# Difine o diretório onde as informações estarão
WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@latest

RUN npm cache clean --force

RUN npm install --force

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]