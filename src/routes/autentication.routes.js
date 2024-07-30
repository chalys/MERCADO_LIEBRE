// ************ Require's ************
const express = require('express')
const router = express.Router();

// ************ Controller Require ************
const { login, register } = require('../controllers/autentication')

// /autentication
router.get('/iniciar', login);
router.post("/iniciar",loginProcess)

router.get('/registrar', register);
router.post("/iniciar",registerProcess)
module.exports = router;



/*// /auth
router.get("/iniciar", login);
router.post("/iniciar", loginProcess)

router.get("/registro", register);
router.post("/registro", registerProcess)

module.exports = router;*/