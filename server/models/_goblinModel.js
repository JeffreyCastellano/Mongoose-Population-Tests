const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Seperate File
//---------------------------------------------------------------------------------

const goblinSchema = Schema({
  name: {
    type: String,
    default: false,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    default: false,
    required: false,
    trim: true
  },
});
const Goblin = mongoose.model('Goblin', goblinSchema);
module.exports = Goblin;