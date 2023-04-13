var Bank = require('../models/Bank');
// List of all Bank
exports.bank_list = function(req, res) {
res.send('NOT IMPLEMENTED: Bank list');
};
// for a specific Bank.
exports.bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bank detail: ' + req.params.id);
};
// Handle Bank create on POST.
exports.bank_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Bank create POST');
};
// Handle Bank delete form on DELETE.
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bank delete DELETE ' + req.params.id);
};
// Handle Bank update form on PUT.
exports.bank_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bank update PUT' + req.params.id);
};