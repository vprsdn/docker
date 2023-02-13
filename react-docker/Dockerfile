FROM node:alpine as baseblock
WORKDIR /var/app
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build


FROM nginx as nginxblock
# Copy everything from built folder to the nginx public folder.
# From baseblock, take the built folder and copy it to destination.
EXPOSE 80
COPY --from=baseblock /var/app/build /usr/share/nginx/html
