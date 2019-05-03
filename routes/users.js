const express = require('express');
const router = express.Router();
const model = require('../model')
router.post('/login', model.login);

module.exports = router;
