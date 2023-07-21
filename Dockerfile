FROM node:18.16.0-alpine3.17

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

WORKDIR /home/node/app

COPY package*.json .

COPY . .

RUN npm i

RUN npm install -E --save-optional @next/swc-linux-x64-gnu
