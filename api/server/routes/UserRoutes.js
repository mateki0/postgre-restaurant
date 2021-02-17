const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', UserController.getUsers);
router.get('/user/:id', UserController.getSingleUser);
router.post('/api/user', UserController.createUser);

module.exports = router;
