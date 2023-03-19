# Selecciona la versión de Node.js que deseas utilizar
FROM node:16-alpine

# Crea y establece el directorio de trabajo de la aplicación
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN yarn install

# Copia todos los archivos de la aplicación al contenedor
COPY . .

# Compila la aplicación para producción
RUN npm run build
# RUN npm run

# Expone el puerto 3000 para que Nginx pueda comunicarse con la aplicación
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]























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
