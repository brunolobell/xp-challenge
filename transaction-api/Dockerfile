FROM node:lts-alpine 
 
RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home 
 
WORKDIR /home/node/api 
 
COPY --chown=node:node package.json ./

COPY . .
 
USER node 
 
RUN yarn 

EXPOSE 5000 

CMD [ "yarn", "start" ]