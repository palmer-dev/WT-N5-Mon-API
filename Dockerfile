FROM node:22-alpine
LABEL authors="florian"

# Image de base — Alpine = version légère (50 Mo vs 900 Mo)

# Dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances EN PREMIER (pour le cache)
COPY package*.json ./

# Installer les dépendances
RUN npm ci --only=production

# Copier le reste du code
COPY . .

# Documenter le port utilisé
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]