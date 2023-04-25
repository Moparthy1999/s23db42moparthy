var express = require('express');
const bank_controlers= require('../controllers/Bank');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET Bank */
router.get('/', bank_controlers.bank_view_all_Page );

/* GET detail Bank page */
router.get('/detail', bank_controlers.bank_view_one_Page);

/* GET create costume page */
router.get('/create', secured, bank_controlers.bank_create_Page);

/* GET create update page */
router.get('/update', secured, bank_controlers.bank_update_Page);

/* GET delete costume page */
router.get('/delete', secured, bank_controlers.bank_delete_Page);

module.exports = router