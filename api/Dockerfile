# Base image
FROM node:16

# Set the working directory to /app
WORKDIR /api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install --force --ignore-scripts
RUN npm rebuild bcrypt --build-from-source
# RUN yarn rebuild bcrypt --build-from-source

# Copy the rest of the application code
COPY . .

# Set NODE_ENV to production
ENV NODE_ENV=production

ARG DB_HOST
ARG DB_PORT
ARG DB_USER
ARG DB_NAME
ARG DB_PASS
ARG DB_SYNC
ARG NODE_ENV
ARG W_PORT

ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_USER=${DB_USER}
ENV DB_NAME=${DB_NAME}
ENV DB_PASS=${DB_PASS}
ENV DB_SYNC=${DB_SYNC}
ENV NODE_ENV=${NODE_ENV}
ENV W_PORT=${W_PORT}

# Expose port 3000 for the Node.js server
EXPOSE 3000

# Start the Node.js server
CMD ["yarn", "start:dev"]























# # Base image
# FROM node:16

# # Set the working directory to /app
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# # RUN npm install -g npm@9.6.2
# RUN yarn install --force --ignore-scripts
# RUN npm rebuild bcrypt --build-from-source
# # RUN  audit fix --force


# # Copy the rest of the application code
# COPY . .

# # Set NODE_ENV to production
# ENV NODE_ENV=production

# # Expose port 3000 for the Node.js server
# EXPOSE 3000

# # Start the Node.js server
# CMD ["yarn", "start:dev"]
# # RUN npm start

# # Iniciar NGINX en primer plano
# # CMD ["nginx", "-g", "daemon off;"]
