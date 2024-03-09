// ************ Require's ************
const express = require('express')
const router = express.Router();

// ************ Controller Require ************
const { login, register } = require('../controllers/autentication')

// /autentication
router.get('/iniciar', login);

router.get('/registrar', register);

module.exports = router;



