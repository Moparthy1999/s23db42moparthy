var express = require('express');
const bank_controlers= require('../controllers/Bank');
var router = express.Router();
/* GET Bank */
router.get('/', bank_controlers.bank_view_all_Page );
module.exports = router