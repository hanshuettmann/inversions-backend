import Investment from '../models/invesment';


// DEVUELVE LAS INVERSIONES
const showInvestment = (req, res, next) => {

        const inversion = Investment.find({})

        const totalInversion = Investment.countDocuments()

        res.json({result: inversion, totalPages: totalInversion})

};

//CREA UNA INVERSION
const newInvest = (req, res, next) => {
    const inversion = new Investment({
        //     name: req.body.name,
        //     amount: parseInt(req.body.amount)
        name: 'Empresa',
        amount: 2000
    });

        newInversion.save()
        res.json(newInversion)
};


export default{
        showInvestment,
        newInvest
}