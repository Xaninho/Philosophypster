// The Server application starts in this file

const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");
// For managing local variables in localhost
require("dotenv").config();

const typeDefs = require("./graphql/typeDefs.js");
const resolvers = require("./graphql/resolvers");

const pubsub = new PubSub();

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // Takes the request and forwards it to the context, making the request body available in the context
  context: ({ req }) => ({ req, pubsub }),
});

// Connects to the database with the password provided in the environment variable, for security reasons.
mongoose
  .connect(process.env.MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected!");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
