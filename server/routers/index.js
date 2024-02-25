const User_router = require('./User_router');
const Product_router = require('./Product_router');
const ProductCategory_router = require('./ProductCategory_router');
const BlogCategory_router = require('./BlogCategory_router');
const Blog = require('./Blog_router');
const Brand = require('./Brand_router');
const Coupon = require('./Coupon_router');
const InertData = require('./insert_router')
const {notFound,enrHandler} = require('../middlewares/enrHandler');

const initRouters = (app) =>{
    app.use('/api/user',User_router);
    app.use('/api/product',Product_router);
    app.use('/api/productCategory',ProductCategory_router);
    app.use('/api/blogCategory',BlogCategory_router);
    app.use('/api/blog',Blog);
    app.use('/api/brand',Brand);
    app.use('/api/counpon',Coupon);
    app.use('/api/inertData',InertData);
    app.use(notFound);
    app.use(enrHandler);
};
module.exports = initRouters;