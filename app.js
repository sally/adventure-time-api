const jsonServer = require('json-server');
const clone = require('clone');
const data = require('./data.json');

const app = jsonServer.create();
app.all('*', (req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    res.sendStatus(403);
  }
});

const router = jsonServer.router(clone(data));
router.db._.id = 'slug';

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
