const routes = require ('next-routes')();

routes
    .add('/certificate/new' , '/certificate/new')
    .add('/certificate/:address','/certificate/detail')
    .add('index','index');



module.exports = routes;