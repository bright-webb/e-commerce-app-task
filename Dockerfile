# Dockerfile for the frontend service
# Build environment
FROM node:14 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm build

# Production environment assuming it's apache
FROM httpd:2.4
COPY --from=build /app/build/ /usr/local/apache2/htdocs/
EXPOSE 80
