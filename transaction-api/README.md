# Transactions API

This API has the purpose of providing requests to perform transactions (credit and debit) in accounts, previously created by the authentication API (auth-api).

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
$ docker build -t xp-challange/transactios-api .
$ docker run -p 5000:5000 -d xp-challange/transactios-api

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

### Add new transation
* post(_PATH_/transaction)
* Post a new transaction to user

### Return all transation
* get(_PATH_/transactions)
* Get all transactiosn from user


## About the Developer

* Bruno Machado Löbell
* Computer Technician and Majoring in Computer Engineering
* https://www.linkedin.com/in/brunolobell/