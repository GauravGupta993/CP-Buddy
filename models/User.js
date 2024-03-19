const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  Leetcode: {
    type: String,
    reqired: true,
  },
  Score: {
    type: Number,
    default: 0, 
  }, 
  DailyScore: {
    type: Number,
    default: 0, 
  }
});

module.exports = model('User', userSchema);
