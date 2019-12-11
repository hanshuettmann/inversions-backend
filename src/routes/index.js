import express from 'express';
const router = express.Router();
import Invest from '../Controller/invest'

mongoose.connect('mongodb://localhost:27017/firstExample', { useNewUrlParser: true });


  // MONTOS RANDOM
    router.get('/inversiones/calculoMonto',(req,res)=>{
      const resultado = (Math.floor(Math.random() * (5 - 100)) + 5) * 1000
      res.send(resultado())
  })


  // DEVUELVE LAS INVERSIONES
  router.get('/inversiones', Invest.showInvestment);

  //CREA UNA INVERSION
  router.post('/inversiones/crearMonto', Invest.newInvest);


export default router;
