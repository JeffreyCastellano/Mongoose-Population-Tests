const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  author: { 
    type: Schema.Types.ObjectId,
    ref: 'Person' 
  },
  title: {
    type: String,
    default: false,
    required: true,
    trim: true
  },
  fans: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Person' 
  }]
});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;