var express = require('express');
var router = express.Router();

var investSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    created: { 
        type: Date,
        default: Date.now
    }
});