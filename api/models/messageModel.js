var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    content: {
        type : String,
        required: true
    },
    sentDate: {
        type: Date,
        default: Date.now
    },
    sentTime: {
        type: Date,
        default: Date.now
    },
    seen: {
        type: Boolean,
        default: false
    }
});

mongoose.model('Messages', MessageSchema);