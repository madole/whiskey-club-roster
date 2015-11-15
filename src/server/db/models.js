var mongoose = require('mongoose');
var schemas = require('./schemas');
const user = mongoose.model('user', schemas.userSchema);

module.exports = {
  user: user
};
