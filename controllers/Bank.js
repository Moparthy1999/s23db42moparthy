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
    exports.bank_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Bank.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.bank_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Bank.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
//Handle Bank update form on PUT.
exports.bank_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Bank.findById( req.params.id)
// Do updates of properties
if(req.body.Bank_Name)
toUpdate.Bank_Name = req.body.Bank_Name;
if(req.body.Bank_Branch) toUpdate.Bank_Branch = req.body.Bank_Branch;
if(req.body.Bank_Code) toUpdate.Bank_Code = req.body.Bank_Code;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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
// Handle a show one view with id specified by query
exports.bank_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Bank.findById( req.query.id)
    res.render('Bankdetail',
    { title: 'Bank Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bank_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('bankcreate', { title: 'Bank Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }

// Handle building the view for updating a costume.
// query provides the id
exports.bank_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Bank.findById(req.query.id)
    res.render('bankupdate', { title: 'Bank Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }

    // Handle a delete one view with id from query
    exports.bank_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Bank.findById(req.query.id)
    res.render('bankdelete', { title: 'Bank Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }

