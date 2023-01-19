var express = require('express');
var router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

/* GET users listing. */
router.post('/flights/:id/destinations', destinationsCtrl.create)

module.exports = router;
