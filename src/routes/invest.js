var express = require('express');
var router = express.Router();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/investDB', { useNewUrlParser: true });

var investSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Invest = mongoose.model('Invest', investSchema);

router.get('/', function (req, res, next) {
    var newInvest = new Invest({
        // name: req.query.name,
        // amount: req.query.name
        name: 'Empresa',
        amount: 3423423,
        created: 12-23-2018,
    });

    newInvest.save((err, invest) => {
        if (err) {
            res.send(err)
            return;
        }
        res.send(invest);
    })
});

  
  export default router;