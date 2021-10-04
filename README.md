# Ven Tu Papi Mock Server

This is a mock server. In order to start it, please do:

```bash
$ make dev
```

or if you are not familiar with `make` or does not use it, please do:

```bash
$ docker-compose down && docker volume rm ventupapi-mock-server_node_modules && docker-compose build --no-cache && docker-compose up server
```

This, as you can see, use docker. If you don't use docker, then:

1. Install node. The node version used at the time of development is: `15.2.1`.
2. Install dependencies: `npm install`
3. Run server: `node index.js`

####

Once your server is up you can access the GraphiQL at:

- [http://localhost:4000/graphql_api/sessions](http://localhost:4000/graphql_api/sessions)
- [http://localhost:4000/graphql_api/reports](http://localhost:4000/graphql_api/reports)
- [http://localhost:4000/graphql_api/business](http://localhost:4000/graphql_api/business)
