
## Cat Adoption Microservice

### 3 Containers as named by Docker Compose:
* cats_nest: [Nest](https://github.com/nestjs/nest) framework (TypeScript) - port 3400
* cats_mongodb: Mongo container initialized with JSON templates and Nest user - port 27017
* cats_mongoadmin: Mongo-Express for web-based mongo admin interface and its own user - port 8081
* cats_netty: the network name for all above services

## Initialize Containers (including Nest app)

See [Adding Docker with multi-stage build](https://blog.logrocket.com/containerized-development-nestjs-docker/)

```bash
$ docker-compose --project-name cats up --build --renew-anon-volumes --detach
(or)
$ docker-compose -p cats up --build -V -d

$ docker-compose -p cats down
```
Once you rename the project directory to the app you want to build, you can drop the project flag for 'cats' in the example above. It just names the network to be consistent with the container names from docker-compose.yml.

## Running the Nest app locally (not in a container)

First, comment out the Nest service in docker-compose.yml file and restart other services, or just issue this command to the Docker host (with container name):
```bash
docker stop cats_nest
```
Then:
```bash
# download node_modules (directory in .gitignore)
$ yarn install

# watch mode (TypeScript, main.ts)
$ yarn start:local

# build mode (JavaScript, main.js)
$ yarn build
$ yarn start:dev
```
Now the Cats app is running on localhost:3000 instead of the 3400 port mapped by Docker networking.
