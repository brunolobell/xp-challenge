# Query API

This is responsible for providing requests to create a new accont, return the user datas and check the login (email/phone number and password).

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
$ docker build -t xp-challange/auth-api .
$ docker run -p 5000:5000 -d xp-challange/auth-api

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

### Add new user
* post(_PATH_/register)
* Register a new user

### Check the authentication
* get(_PATH_/login)
* Get the datas and check in the database

### Delete an user
* get(_PATH_/delete)
* Delete an user from database

### Return an user
* get(_PATH_/users/:id)
* Return all datas from an user

### Update a user
* put(_PATH_/users/:id)
* Change datas from user


## About the Developer

* Bruno Machado Löbell
* Computer Technician and Majoring in Computer Engineering
* https://www.linkedin.com/in/brunolobell/