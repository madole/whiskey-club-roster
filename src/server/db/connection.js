const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

db.on('error', (err) => console.log(err))
db.once('open', (callback) => {
  console.log('successfully connected to db');

});

module.exports = db;
