const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const { MONGODB } = require("./config");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("Connected to MongoDB");
  return server.listen({ port }).then(res => {
    console.log(`Server running at ${res.url}`);
  });
});
