const User_router = require('./User_router');
const Product_router = require('./Product_router');
const {notFound,enrHandler} = require('../middlewares/enrHandler')

const initRouters = (app) =>{
    app.use('/api/user',User_router);
    app.use('/api/product',Product_router);
    app.use(notFound);
    app.use(enrHandler);
};
module.exports = initRouters;