FROM node:10 as building
WORKDIR /app
COPY . .
RUN npm install && npm run build
FROM nginx:latest
COPY --from=building /app/build /usr/share/nginx/html
COPY .docker/default.conf /etc/nginx/conf.d/
