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
        required: true,
        default: 0
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Invest = mongoose.model('Invest', investSchema);


// POST
router.post('/getInversion', function (req, res, next) {
    var newInvest = new Invest({
        name: req.body.name,
        amount: req.body.amount

        // Crear /invests?name=Arcor&amount=1999
    });

    newInvest.save((err, invest) => {
        if (err) {
            res.send(err)
            return;
        }
        res.send(invests);
    })
});

// GET
router.get('/inversions', function (req, res, next) {
    Meme.find((err, inversions) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send({result: invests});
    });
});

  
  export default router;