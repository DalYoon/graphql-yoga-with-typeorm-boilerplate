# graphql-yoga-with-typeorm-boilerplate

## description

- boiler plate project for
  - graphql-yoga(express)
  - typescript
  - typeorm
  - postgres

## Usage

#### create project

```console
mkdir graphql-project
cd graphql-project
git clone https://github.com/DalYoon/graphql-yoga-with-typeorm-boilerplate .
```

#### change `.env` for your database

```
DB_ENDPOINT=DB-Address (your database address)
DB_NAME=DB-NAME (your database name)
DB_USERNAME=DB-ACCOUNT (your database username)
DB_PASSWORD=DB-PASSWORD (your database password)
```

#### add `.env` into `.gitignore` file for secret

```
node_modules
.env
```

#### `yarn dev` to start the server

```console
yarn dev
```

#### connect to `http://localhost:4000/playground` for playground page

#### test `sayHello`, `sayBye` queries

#### add entities those you need into `src/entities/*`

#### enjoy!
