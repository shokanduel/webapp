# Latest LTS
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Disable
ENV NG_CLI_ANALYTICS=off

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Bind port 3333  
EXPOSE 3333

CMD [ "node", "dist/apps/api/main.js" ]
