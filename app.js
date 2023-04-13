var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BankRouter = require('./routes/Bank');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var Bank = require("./models/Bank");
var resourceRouter = require('./routes/resource');
var app = express();

// We can seed the collection if needed onserver start
async function recreateDB(){
// Delete everything
await Bank.deleteMany();
let instance1 = new Bank({Bank_Name:"Indian Bank", Bank_Branch:'Amaravati',Bank_Code:"086450"});
let instance2 = new Bank({Bank_Name:"US Bank", Bank_Branch:'Maryville',Bank_Code:"12345"});
let instance3 = new Bank({Bank_Name:"Andhra Bank", Bank_Branch:'Tadikonda',Bank_Code:"256794"});
instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)});
instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)}); 
instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)});
}
let reseed = true;
if (reseed) { recreateDB();}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Bank', BankRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
