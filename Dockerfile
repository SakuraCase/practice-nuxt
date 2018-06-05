FROM node:8.11.2-alpine

ADD ./package.json /app/package.json
WORKDIR /app
RUN yarn

ENV HOST 0.0.0.0
EXPOSE 3000

#CMD [ "yarn", "dev" ]