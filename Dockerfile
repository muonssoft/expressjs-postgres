# Definir la imagen base
FROM node:latest

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3333

# Iniciar la aplicación
CMD ["npm", "start"]
