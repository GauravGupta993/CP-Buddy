const { Schema, model } = require('mongoose');

const ContestsSchema = new Schema({
  Name: {
    type: String,
    reqired: true,
  },
  Platform: {
    type: String,
    reqired: true,
  },
  Date: {
    type: String,
  }
});

module.exports = model('Contests', ContestsSchema);
