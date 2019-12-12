import express from 'express';
const router = express.Router();
import Invest from '../Controller/invest';
import Inversion from '../models/invesment'


import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/investDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true  });


  // MONTOS RANDOM
    router.get('/calculomonto',(req,res)=>{
      const resultado = (Math.floor(Math.random() * (5 - 100)) + 5) * 1000
      res.send(resultado)
  })

  // DEVUELVE LAS INVERSIONES
  router.get('/inversiones', (req, res, next) => {

    const inversion = Investment.find({})

    const totalInversion = Investment.countDocuments()

    res.json({result: inversion, totalPages: totalInversion})

});

  //CREA UNA INVERSION
  router.post('/crearmonto', (req, res, next) => {
    const inversion = new Inversion(req.body)

        inversion.save()
        res.json(inversion)
});

  //HOME(?)
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Servidor conectado!' });
  });


export default router;
