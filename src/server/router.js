const expressRouter = require('express').Router;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = expressRouter();
const User = require('./db/models').user;
const winston = require('winston');


router.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

router.get('/data', (req, res) => {
  User.find()
  .exec((err, users) => {
    if (err) { throw new Error(err); }
    const mappedUsers = users.map((user) => {
      return { id: user.id, text: user.text };
    });
    res.json(mappedUsers);
  });
});

router.post('/addPerson', jsonParser, (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err) => {
    if (err) {
      winston.error(err);
    } else {
      winston.info('save successfull');
    }
  });
  res.status(200).send('ok');
});

module.exports = router;
