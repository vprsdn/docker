# Step 1
# Get the base image
FROM alpine:3.6

# Step 2
# Install required software
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/main" >> /etc/apk/repositories
RUN echo "http://dl-cdn.alpinelinux.org/alpine/v3.6/community" >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils

# Step 3
# Configure the software
# `/data/db` folder required to run mongodb
VOLUME ["/data/db"]

WORKDIR /data
EXPOSE 27017
RUN apk add isl

# Step 4
# Set default commands
CMD ["mongod"]

# Run `docker run -it sha256:ec7fa547f6b7474032d56f17106418b8c3c3c8ad9b320f40f94ddcd`
# In new terminal, `docker ps` - take the container id and `docker exec -it 6f2314d5f076 sh`