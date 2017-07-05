var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Message = mongoose.model('Messages');

exports.getAllMessage = function(req, res) {
    Message.find({} , function(err, message) {
        if (err) 
            res.send(err);
        res.json(message);
        console.log(message);
    });
};

exports.sendMessage = function(req, res) {
    var message = new Message(req.body);
    message.save(function(err, mes) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            return res.json(mes);
        }
    });
}; 