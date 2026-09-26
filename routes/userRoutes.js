const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/auth');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// All user endpoints require Basic Authentication
router.use(basicAuth);

router.route('/')
  .post(createUser)
  .get(getUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
