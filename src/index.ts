import { Options } from "graphql-yoga";
import app from "./app";

const PORT: number = 4000;
const PLAYGROUND_ENDPOINT: string = "/playground";
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions: Options = {
  port: PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
};

app.start(appOptions, () => console.log(`Server is Listening on ${PORT}`));
