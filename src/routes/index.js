import express from 'express';
var router = express.Router();
import mongoose from 'mongoose';
import invest from '../Controller/invest';
mongoose.connect('mongodb://localhost:27017/investDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true});


  // MONTOS RANDOM
    router.get('/calculoMonto',(req,res)=>{
      let resultado = {randomNumber:  Math.floor(Math.random() * 100) * 1000,}
      res.send(resultado)
  })

  // DEVUELVE LAS INVERSIONES
  router.get('/inversiones', invest.showInvestment);

  //CREA UNA INVERSION
  router.post('/crearmonto', invest.newInvest);

  //HOME(?)
  router.get('/index', function (req, res) {
    res.send('<h1>Conectado!</h1>')
  })


export default router;
