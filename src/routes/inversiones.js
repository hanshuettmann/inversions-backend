import express from 'express';
var router = express.Router();
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/firstExample', { useNewUrlParser: true });
import moment from 'moment';
import Inversion from '../models/inversion';

/* GET home page. */
router.get('/', function (req, res, next) {
  let response = {}
  if (req.query.quantity && req.query.page && req.query.startDate && req.query.endDate) {
    let page = parseInt(req.query.page, 10);
    let quantity = parseInt(req.query.quantity, 10);
    Inversion.find({
      created: {
        $gte: new Date(req.query.startDate),
        $lt: new Date(new Date(req.query.endDate).setHours(44, 59, 59))
      }
    }, null, { skip: quantity * (page - 1), limit: quantity }, (err, inversions) => {
      if (err) console.error(err);
      Inversion.count((err, count) => {
        if (err) console.error(err);
        let totalPages = Math.ceil(count / quantity);
        response = {
          result: inversions,
          currentPage: page,
          totalPages: totalPages,
          total: count,
          quantity: quantity
        }
        res.send(response);
      })
    }).sort({ created: 'desc' });
  } else {
    Inversion.find({
      created: {
        $gte: moment().subtract(7, 'days')
      }
    }, null, { skip: 0, limit: 10 }, (err, inversions) => {
      if (err) console.error(err);
      res.send(inversions);
    }).sort({ created: 'desc' });

    /*let { startDate, endDate } = req.query;
    console.log(new Date(startDate));
    console.log(new Date(new Date(endDate).setHours(44, 59, 59)));
    Inversion.find({
      created: {
        $gte: new Date(startDate),
        $lt: new Date(new Date(endDate).setHours(44, 59, 59))
      }
    }, null, {}, (err, inversions) => {
      if (err) console.error(err);
      res.send(inversions);
    }).sort({ created: 'desc' });*/


    /*Inversion.find((err, inversions) => {
      if (err) console.error(err);
      response.result = inversions;
      res.send(response);
    }).sort({ created: 'desc' });*/

  }
});

router.get('/calculomonto', function (req, res, next) {
  let response = {
    number: Math.floor(Math.random() * 101) * 10000,
  }
  res.send(response);
});

router.post('/', function (req, res, next) {
  let newInversion = new Inversion({
    name: req.body.name,
    amount: parseInt(req.body.amount)
  });
  newInversion.save((err, newInversion) => {
    if (err) console.error(err);
    res.send(newInversion);
  })
});

export default router;
