import { buildSchema } from "graphql";
import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();
app.use("graphql");
