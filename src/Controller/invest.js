import Invest from '../models/invesment'


import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/investDB', { useNewUrlParser: true });


// DEVUELVE LAS INVERSIONES
const showInvestment = (req, res, next) => {

        const inversion = Invest.find({})

        const totalInversion = Invest.countDocuments()

        res.json({result: inversion, totalPages: totalInversion})

}

//CREA UNA INVERSION
const newInvest = (req, res, next) => {
    const inversion = new Inversion(req.body)

        inversion.save()
        res.json(inversion)
}


export default router;