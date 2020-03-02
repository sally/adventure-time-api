const jsonServer = require('json-server');

const middlewares = jsonServer.defaults();

const clone = require('clone');
const data = require('../db/data.json');

const app = jsonServer.create();

app.all('*', (req, res, next) => {
  if (req.method === 'GET') {
    if (req.path === '/') {
      return res.redirect('https://github.com/sally/adventure-time-api');
    }
    next();
  } else {
    return res.sendStatus(403);
  }
});

const router = jsonServer.router(clone(data));
router.db._.id = 'slug';

app.use(middlewares);
app.use('/api/v1', router);

module.exports = app;
