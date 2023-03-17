# Base image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
# RUN npm install -g npm@9.6.2
RUN yarn install --force --ignore-scripts
RUN npm rebuild bcrypt --build-from-source
# RUN  audit fix --force


# Copy the rest of the application code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose port 3000 for the Node.js server
EXPOSE 3000

# Start the Node.js server
CMD ["yarn", "start:dev"]
# RUN npm start

# Iniciar NGINX en primer plano
# CMD ["nginx", "-g", "daemon off;"]


# # Base image
# FROM node:14-alpine

# # Set the working directory to /app
# WORKDIR /api

# # Instala node-pre-gyp de forma global
# RUN npm install -g node-pre-gyp

# #Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# # RUN yarn install --force
# # RUN npm install --force
# # RUN npm update
# RUN npm ci --only=production
# # RUN npm fund
# # RUN npm audit fix


# # Copy the rest of the application code
# COPY . .

# RUN node-pre-gyp install --fallback-to-build

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# # Expose port 3000 for the Node.js server
# EXPOSE 3000

# # Start the Node.js server
# CMD ["npm", "start"]
# # RUN npm start

# # Iniciar NGINX en primer plano
# # CMD ["nginx", "-g", "daemon off;"]