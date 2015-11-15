const expressRouter = require('express').Router;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const router = expressRouter();
const user = require('./db/models').user;

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  router.get('/data', (req, res) => {
    user.find()
    .exec((err, users) => {
      if (err) { throw new Error(err); }
      const mappedUsers = users.map((user) => {
        return { id: user.id, text: user.text };
      });
      res.json(mappedUsers);
    });
  });

  router.post('/addPerson', jsonParser, (req, res) => {
    console.log(req.body);
    const newUser = new user(req.body)
    newUser.save((err) => {
      if(err) {
        console.error(err);
      } else {
        console.log('save successfull');
      }
    })
    res.status(200).send('ok')
  });

  return router;
};
