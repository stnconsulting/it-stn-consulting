# --- Étape 1 : Build de l'application ---
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copie des fichiers de dépendances pour profiter du cache Docker
COPY package*.json ./

RUN npm ci

# Copie de tout le code source
COPY . .

# Construction de l'application (génère les fichiers dans dist/)
RUN npm run build

# --- Étape 2 : Production avec Nginx ---
FROM nginx:stable-alpine AS production-stage

# Copie du build compilé vers le dossier web de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copie d'une configuration Nginx personnalisée pour gérer le routage Vue Router (HTML5 History Mode)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]