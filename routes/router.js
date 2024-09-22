const express = require('express');
const router = express.Router();
const thiena = require('../controller/thiena')


router.get('/', thiena.ln );
router.get('/about', thiena.nm);
router.get('/contacts', thiena.com);
router.get('/gmail', thiena.gram );
router.get('/facebook', thiena.book);
module.exports = router;