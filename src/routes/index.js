import express from 'express';
const router = express.Router();
import Invest from '../Controller/invest';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/investDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true  });


  // MONTOS RANDOM
    router.get('/inversiones/calculoMonto',(req,res)=>{
      const resultado = (Math.floor(Math.random() * (5 - 100)) + 5) * 1000
      res.send(resultado)
  })

  // DEVUELVE LAS INVERSIONES
  router.get('/inversiones', Invest.showInvestment);

  //CREA UNA INVERSION
  router.post('/inversiones/crearMonto', Invest.newInvest);

  //HOME(?)
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Servidor conectado!' });
  });


export default router;
