var express = require('express');
const Schema = mongoose.Schema

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

export default mongoose.model('Investment', investmentSchema)