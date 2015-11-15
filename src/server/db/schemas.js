var mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  id: 'string',
  text: 'string'
});

module.exports = {
  userSchema: userSchema
};
