// route file

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const usersController = require('../contorllers/usersController');

router.get('/list', usersController.getUsers);
router.delete('/delete/:Id', usersController.deleteUser);
router.put('/Update/:Id/:quantity/:quant', usersController.UpdateUser);

router.post('/add', usersController.postUser);

module.exports = router;
