'use strict';

module.exports = 
function(app){
    var todoList = 
    require('./controller');

    app.route('/').get(todoList.index);
    app.route('/api/users').get(todoList.users); 
    app.route('/api/users/signup').post(todoList.signup); 
    app.route('/api/users/signin').post(todoList.signin);
    app.route('/api/shopping').post(todoList.newshopping); 
    app.route('/api/shopping').get(todoList.shoppinglist); 
    app.route('/api/shopping/:id_shopping').get(todoList.shoppingid);  
    app.route('/api/shopping/:id_shopping').put(todoList.updateshopping); 
}