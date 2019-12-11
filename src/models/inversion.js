import mongoose from 'mongoose';

var inversionSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      default: Date.now()
    }
  });
  
  var Inversion = mongoose.model('Inversion', inversionSchema);

  export default Inversion;