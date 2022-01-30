# Query API

This API return tha user balance and the statement, generated in the Transactiosn API.

## Environment Variables

```bash
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=postgres
```

## How to use

```bash
# Running with docker
$ docker build -t xp-challange/query-api .
$ docker run -p 5000:5000 -d xp-challange/query-api

# Running with yarn
$ yarn
$ yarn start

# Running with npm
$ npm install
$ npm start
```

## Requests

### Documentation (swagger)
* get(_PATH_/docs)
* Return an api documentation using swagger

### Return the balance
* post(_PATH_/balance)
* Get the balance from user

### Return the statement
* get(_PATH_/statement)
* Get statement from user


## About the Developer

* Bruno Machado Löbell
* Computer Technician and Majoring in Computer Engineering
* https://www.linkedin.com/in/brunolobell/