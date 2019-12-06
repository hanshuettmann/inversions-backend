var express = require('express');
var router = express.Router();

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/invest', { useNewUrlParser: true });

var investSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

var Invest = mongoose.model('Invest', investSchema);

router.get('/invest', function (req, res, next) {
    var newInvest = new Invest({
        name: req.query.name,
        amount: req.query.name
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