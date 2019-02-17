// next-routes configuration

const routes = require('next-routes')();

routes.add('/:text', '/about');

module.exports = routes;
