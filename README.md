## Installation:

### Windows:

-   Download and install docker.
-   Update WSL2 something.

### Mac:

-   test

---

## Lifecycle:

1. ### CREATED
1. ### STARTED
1. ### PAUSED
1. ### EXITED
1. ### DEAD

---

## Commands:

1.  ### `docker ps`

    -   Lists running containers.

1.  ### `docker ps --all`

    -   Lists all containers.

1.  ### `docker pull <name>`

    -   Pulls the image from docker hub to local system.

1.  ### `docker create <name>`

    -   Moves the image to `CREATED` state.

1.  ### `docker start <id>`

    -   Moves the image from `CREATED/EXITED` to `STARTED` state.

1.  ### `docker start -a <id>`

    -   Moves the image from `CREATED/EXITED` to `STARTED` state and runs the default or passed command for that id.

1.  ### `docker stop <id>`

    -   Moves the image from `STARTED` to `EXITED` state.

1.  ### `docker pause <name>`

    -   Moves the image from `STARTED` to `PAUSED` state.

1.  ### `docker unpause <name>`

    -   Moves the image from `PAUSED` to `STARTED` state.

1.  ### `docker run <name>`

    -   Creates and starts the image in one command.
    -   Runs the image with default command if any.

1.  ### `docker run <name> <overriding default command>`

    -   Runs the image with the given command.

1.  ### `docker system prune`

    -   Deletes all the stopped containers.

1.  ### `docker exec -it 15c34da206f3 <bash/cmd/zsh>`

    -   This will execute the passed command in the container.
    -   The `-it` flag will provide the interactivity between user's terminal and container's terminal.
    -   In windows, use `winpty` before the above command - `winpty docker exec -it 15c34da206f3 bash`

1.  ### `docker run -it mongo bash`

    -   This will start the image and runs the passed default command - `bash`.
    -   Not a good practice.

---

## Starting and accessing container:

-   Start the container.
-   Get the id of the container from `docker ps`.
-   Get into the container using `exec` command followed by shell name.

---

## Custom image:

-   Create a `Dockerfile` in the root. This contains the list of instructions.
-   Check the `Dockerfile` in mongo-image folder for the basic syntax.
-   This is processed by the docker client and this inturn passes it to docker server.
-   After complete processing, custom image is ready.

-   Every time a new line is executed, a temporary container is created and the custom image is copied to it and the execution happens in temporary container.
-   Once it is complete, the custom image is replaced with new data.

### Opening port:

-   To access the container's port from user's machine, pass the `-p` flag with port values.
-   In the below example, the node app is listening at 3003. The user's machine will listen at 9001.
-   While making the API call, 9001 has to be used through which the request reaches 3003 in the container.
-   Ideally keep both ports same.

```
	docker run -p 9001:3003 -it aydotvin/a-node-app
```

### Naming the image:

-   Naming convention - `<docker-username>/<custom-image-name>:<version-or-latest>`.
-   `docker build -t aydotvin/custom-image:latest ./mongo-image/`

### Steps:

-   Fill up docker file (with specific versions) and docker ignore.
-   Build using `docker build -t aydotvin/<name> <path-to-root>`
-   Run the image with `docker run -it <image-name> <optional-default-commands>`.

---

## Performance:

-   Since caching happens from top to bottom lines, always copy the package.json first, install it and then copy everything.
-   This will prevent copying `node_modules` folder twice as that comes before package.json file.

---

## Caching:

-   While building, when the docker lines are first hit, all the temporary containers are stored in cache.
-   When a new command is added in line 12 and built again,
    -   everything upto line 11 will be taken from cache as the command was already run.
    -   everything from line 12 will be fresh process.

---

## Docker compose:

-   Not required for an online service such as MongoDB Atlas.
-   Compose is a tool for defining and running multi-container Docker applications.
-   Use YAML file to configure the application’s services. Then, with a single command, create and start all the services from the configuration.

### Steps:

-   Create `docker-compose.yml` and fill it up.
-   Keep a note on service names. The service name for mongo should be used in the connection string while connecting mongoose.

-   Run `docker-compose up --build`

---

## Note:

-   Each container instance has its own environment.
-   Always pass the `-it` flag while running an image.
-   Always be specific when specifying the starting image for the FROM command.
-   `alpine` means bare minimum version.

---

## Docker files:

### Docker file prod:

-   Create a file with name `Dockerfile`.

### Docker ignore:

-   Create a file with name `.dockerignore`.
-   node_modules

### Docker compose:

-   Create a file with name `.docker-compose.yml`.
-   Use docker compose when,
    -   the run command gets too long.
    -   there are multiple machines/containers to work with.

### Docker file dev:

-   Create a file with name `Dockerfile.dev`.

---

## Exiting shell:

-   Type `exit` or `ctrl + d` - to get out of the container's shell.

---

## React app:

-   test
