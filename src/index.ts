require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { connectDB } = require("../config/db");
const PORT = process.env.PORT;
const app = express();

app.use(cors());

// Connect with Database
connectDB();
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello world!";
  },
};

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );
app.listen(PORT, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
