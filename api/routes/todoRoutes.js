module.exports = function(app) {
    var userHandler = require('../controllers/userController');
    var messageHandler = require('../controllers/messageController');

    //message routes
    app.route('/message')
                .get(userHandler.loginRequired, messageHandler.getAllMessage);
    app.route('/sendMessage')
                .post(userHandler.loginRequired, messageHandler.sendMessage);
    //user routes
    app.route('/auth/register')
                .post(userHandler.register);
    app.route('/auth/signin')
                .post(userHandler.signIn);
}