import Investment from '../models/invesment';


// DEVUELVE LAS INVERSIONES
const showInvestment = async (req, res, next) => {

        // const inversion = {
        //         result: Investment.find({})
        // }

        const inversion = await Investment.find({})

        await res.send(inversion);


};

//CREA UNA INVERSION
const newInvest = (req, res, next) => {
    let newInversion = new Investment({
        // name: req.body.name,
        // amount: parseInt(req.body.amount)
        name: req.query.name,
        amount: parseInt(req.query.amount)
    });

        newInversion.save(function(err) {
                if (err) throw err;
                 
                console.log('Inversion creada correctamente.');
        res.json(newInversion)})
};


export default{
        showInvestment,
        newInvest
}