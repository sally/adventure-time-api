const jsonServer = require('json-server');
const clone = require('clone');
const data = require('./data.json');

const app = jsonServer.create();
const router = jsonServer.router(data);
router.db._.id = "slug";

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})