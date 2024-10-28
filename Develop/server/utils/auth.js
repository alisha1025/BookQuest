const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'your_jwt_secret';
const expiration = '2h';

const authMiddleware = ({ req }) => {

  const token = req.headers.authorization || '';

  if (token) {
    try {
      const { data } = jwt.verify(token, secret);
      return { user: data }; 
    } catch {
      throw new AuthenticationError('Invalid token');
    }
  }
  return {};
};

module.exports = authMiddleware;
