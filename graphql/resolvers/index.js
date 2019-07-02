const postResolvers = require("./posts");
const usersResolver = require("./users");

module.exports = {
  Query: {
    ...postResolvers.Query
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postResolvers.Mutation
  }
};
