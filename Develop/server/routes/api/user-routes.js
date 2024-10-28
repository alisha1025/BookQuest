const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveBook,
  deleteBook,
  login,
} = require('../../controllers/user-controller');

// Import authentication middleware
const { authMiddleware } = require('../../utils/auth');

// Route for creating a new user
router.route('/').post(createUser).put(authMiddleware, saveBook);

// Route for user login
router.route('/login').post(login);

// Route to get current user's information
router.route('/me').get(authMiddleware, getSingleUser);

// Route to delete a saved book by its ID
router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;
