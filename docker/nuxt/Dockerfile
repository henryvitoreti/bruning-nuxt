FROM node:22.13.1
# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos do projeto
COPY package.json ./
RUN npm i
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Construir o projeto Nuxt
RUN npm run build

# Expor a porta padrão do Nuxt
EXPOSE 3000

# Comando para iniciar o servidor Nuxt no modo de desenvolvimento
CMD ["npm", "run", "dev"]