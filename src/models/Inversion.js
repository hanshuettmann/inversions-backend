import mongoose from 'mongoose'
const Schema = mongoose.Schema

const inversionSchema = new Schema({
    nombre: {
        type: String,
        trim : true
    },
    monto: {
        type: Number, 
        trim: true
    }
})

export default mongoose.model('Inversion', inversionSchema)