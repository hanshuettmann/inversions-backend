import express from 'express';
var router = express.Router();
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/firstExample', { useNewUrlParser: true });

var inversionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ammount: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});


var Inversion = mongoose.model('Inversion', inversionSchema);

/* GET home page. */
router.get('/', function (req, res, next) {
  let randomNumber = {
    number: Math.floor(Math.random() * 900001) + 100000
  }
  
  Inversion.find((err, inversions) => {
    if (err) console.error(err);
    let response = {
      number: randomNumber,
      result: inversions
    }
    res.send(response);
  }).sort({ created: 'desc' });

});

router.post('/', function (req, res, next) {
  let newInversion = new Inversion({
    name: req.body.name,
    ammount: req.body.ammount
  });
  newInversion.save((err, newInversion) => {
    if (err) console.error(err);
    res.send(newInversion);
  })
});

export default router;
