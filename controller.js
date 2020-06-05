'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req,res){
    connection.query('SELECT * FROM user', function(error,rows,fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows,res)
        } 
    });
};


 
exports.shoppingid = 
function(req,res){
var id_shopping = req.param.id_shopping;

connection.query('SELECT * from shopping where id = ?',
[id_shopping], 
function(error,rows,fields){
    if(error){
        console.log(error) } else {
            response.ok(rows,res)
        }
});
};

exports.signup = 
function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;
    var address = req.body.address;
    var city = req.body.city;
    var country = req.body.country;
    var name = req.body.name;
    var postcode = req.body.postcode;

    connection.query('INSERT INTO user (username,email, password,phone, address,city, country, name, postcode) VALUES (?,?,?,?,?,?,?,?,?) ', [username,email,password,phone,address,city,country,name,postcode], function (error,rows, fields){
        if(error){
            console.log(error)} else{
                response.ok("Done")
            }
        });
    
};

exports.signin= 
function(req, res){ 
    var email = req.body.email;
    var password = req.body.password;

    connection.query('SELECT * FROM USER WHERE email = ? and password =? ', [email,password], function (error,rows, fields){
        if(error){
            console.log(error)} else{
                response.ok("Success")
            }
        });
};

exports.newshopping = 
function(req, res){
    var createddate = req.body.createddate;
    var name = req.body.name;
    connection.query('INSERT INTO shopping (Name,CreatedDate) VALUES (?,?) ', [name,createddate], function (error,rows, fields){
        if(error){
            console.log(error)} else{
                response.ok("Done")
            }
        });
    
};


exports.updateshopping = 
function(req,res){
var id_shopping = req.param.id_shopping;

connection.query('UPDATE shopping set Name=? ,CreatedDate =?  ', [name,createddate],
[id_shopping], 
function(error,rows,fields){
    if(error){
        console.log(error) } else {
            response.ok(rows,res)
        }
});
};

exports.shoppinglist = function(req,res){
    connection.query('SELECT * FROM shopping', function(error,rows,fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows,res)
        } 
    });
};


exports.index = function(req,res){
    response.ok("connected");
};