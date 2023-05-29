import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Patient } from "./Patient";

const typeDefs = `#graphql

  ${Patient.types}

  type Query {

    ${Patient.queries}

  }

  type Mutation{
    ${Patient.mutations}
  }

`;
