var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bank_controller = require('../controllers/Bank');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// BANK ROUTES ///
// POST request for creating a Bank.
router.post('/Bank', bank_controller.bank_create_post);
// DELETE request to delete Bank.
router.delete('/Bank/:id', bank_controller.bank_delete);
// PUT request to update Bank.
router.put('/Bank/:id', bank_controller.bank_update_put);
// GET request for one Bank.
router.get('/Bank/:id', bank_controller.bank_detail);
// GET request for list of all Bank items.
router.get('/Bank', bank_controller.bank_list);
module.exports = router;