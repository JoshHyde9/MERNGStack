const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config");

const { AuthenticationError } = require("apollo-server");

module.exports = context => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, JWT_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error('Authentication token must be "Bearer [token]');
  }
  throw new Error("Authorization header must be provided");
};
