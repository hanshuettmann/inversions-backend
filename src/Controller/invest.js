import Investment from '../models/invesment';


// DEVUELVE LAS INVERSIONES
const showInvestment = (req, res, next) => {

        const inversion = Investment.find({})

        const totalInversion = Investment.countDocuments()

        res.json({result: inversion, totalPages: totalInversion})

};

//CREA UNA INVERSION
const newInvest = (req, res, next) => {
    const inversion = new Inversion(req.body)

        inversion.save()
        res.json(inversion)
};


export default{
        showInvestment,
        newInvest
}