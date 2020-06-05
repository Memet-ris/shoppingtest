var mysql = require('mysql');

var con = mysql.createConnection({
    host :"127.0.0.1",
    user :"fortest",
    password:"Pa55w0rd",
    database:"shoppingdb"
});

con.connect(function(err){
if(err) {
    console.error('error :'+err.stack); 
    return;
}
});

module.exports = con;