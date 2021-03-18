import { ApolloClient, InMemoryCache } from "@apollo/client";
import { defaults, resolvers } from "./LocalState";
import dotenv from "dotenv";
dotenv.config();

const uri =
  process.env.NODE_ENV === "production"
    ? `https://www.sample.com/graphql`
    : "http://localhost:7053/graphql";

export default new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  clientState: {
    defaults: defaults,
    resolvers,
  },
});
