const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warSchema = new Schema({
  title: {
    type: String,
    default: false,
    required: true,
    trim: true
  },
  goblins: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Goblin' 
  }]
});

const War = mongoose.model('War', warSchema);
module.exports = War;
