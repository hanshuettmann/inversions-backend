import express from 'express';
const router = express.Router();


import mongoose, { Schema } from 'mongoose';

(async () => {
    try{
        const schema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true,
                default: 0
            },
            created: { 
                type: Date,
                default: Date.now
            }
        }, {collection: 'inversiones'});
        
        const Invesiones = mongoose.model('Inversion', Schema);

        await mongoose.connect('mongodb://localhost:27017/investDB', { 
          useNewUrlParser: true,
          useUnifiedTopology: true  });

        const inversiones1 = new inversiones1({
            name: 'Empresa',
            amount: 2000
        })

        await inversiones1.save();
    }  catch(error) {
        console.log(error);
        
    }
})


export default router;
