var express = require('express');
const bank_controlers= require('../controllers/Bank');
var router = express.Router();
/* GET Bank */
router.get('/', bank_controlers.bank_view_all_Page );

/* GET detail Bank page */
router.get('/detail', bank_controlers.bank_view_one_Page);

/* GET create costume page */
router.get('/create', bank_controlers.bank_create_Page);

/* GET create update page */
router.get('/update', bank_controlers.bank_update_Page);

/* GET delete costume page */
router.get('/delete', bank_controlers.bank_delete_Page);

module.exports = router