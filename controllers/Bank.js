var Bank = require('../models/Bank');
// List of all Bank
exports.bank_list = async function(req, res) {
    try{
    theBank = await Bank.find();
    res.send(theBank);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Bank.
exports.bank_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Bank detail: ' + req.params.id);
};
// Handle Bank create on POST.
exports.bank_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bank();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Bank_Name = req.body.Bank_Name;
    document.Bank_Branch = req.body.Bank_Branch;
    document.Bank_Code = req.body.Bank_Code;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
// Handle Bank delete form on DELETE.
exports.bank_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Bank delete DELETE ' + req.params.id);
};
// Handle Bank update form on PUT.
exports.bank_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Bank update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.bank_view_all_Page = async function(req, res) {
try{
theBank = await Bank.find();
res.render('Bank', { title: 'Bank Search Results', results: theBank });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}