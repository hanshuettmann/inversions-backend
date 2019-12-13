import Investment from '../models/invesment';


// DEVUELVE LAS INVERSIONES
const showInvestment = (req, res, next) => {

        const inversion = {
                result: Investment
        }

         res.send(inversion);

        // const totalInversion = Investment.countDocuments()

        // res.json({result: inversion, totalPages: totalInversion})

};

//CREA UNA INVERSION
const newInvest = (req, res, next) => {
    const newInversion = new Investment({
        //     name: req.body.name,
        //     amount: parseInt(req.body.amount)
            name: req.query.name,
            amount: parseInt(req.query.amount)
    });

        newInversion.save()
        res.json(newInversion)
};


export default{
        showInvestment,
        newInvest
}