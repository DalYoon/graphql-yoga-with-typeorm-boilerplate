# graphql-yoga-with-typeorm-boilerplate v1.1

## description

- boiler plate project for
  - graphql-yoga(express)
  - typescript
  - typeorm
  - postgres

## features

- [x] Express Server (port 4000)
- [x] Graphql Entry Point (/graphql)
- [x] Graphql Playground Page (/playground)
- [x] Typeorm Settings For Postgres
- [x] Basic User Entity (src/entities/User.ts)
- [x] Email Sign Up
- [x] Email Sign In
- [x] Get My Profile

## Usage

#### create project

```console
mkdir graphql-project
cd graphql-project
git clone https://github.com/DalYoon/graphql-yoga-with-typeorm-boilerplate .
```

#### change `.env` for your database and JWT Secret

```
DB_ENDPOINT=(your database address)
DB_NAME=DB-NAME=(your database name)
DB_USERNAME=(your database username)
DB_PASSWORD=(your database password)
JWT_SECRET=(your JWT secret for authentication)
```

#### add `.env` into `.gitignore` file for secret

```
node_modules
.env
```

#### `yarn` to install dependencies

```console
yarn
```

#### `yarn dev` to start the server

```console
yarn dev
```

#### connect to `http://localhost:4000/playground` for playground page

#### add entities those you need into `src/entities/*`

#### enjoy!
