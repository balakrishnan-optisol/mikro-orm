# Nestjs - Typescript with MikroORM

## Description

Nestjs framework TypeScript with MikroORM

## Installation

```bash
$ npm install
```

## .env Setup

Find `.env.example` files and generate a new file with exact same name just removing .example from the end. Now supply appropriate values for all variables defined

## Migration

To create migration use below comment

```
npx mikro-orm migration:create --name=create_user_table
```

To run migration use below comment

```
npx mikro-orm migration:up
```

MikroORM migration document link [click here](https://mikro-orm.io/docs/migrations)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
