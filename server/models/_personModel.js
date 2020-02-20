const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Seperate File
//---------------------------------------------------------------------------------

const personSchema = Schema({
  _id: Schema.Types.ObjectId,
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

const Person = mongoose.model('Person', personSchema);
module.exports = Person;