const routerBlog = require('express').Router();
const ctrl_blog = require('../controllers/Blog_ctrl');
const { verifyAccessToken } = require('../middlewares/verifyToken');
routerBlog.post('/addBlog', ctrl_blog.createNewBlog);
routerBlog.put('/updateBlog', ctrl_blog.updateBlog);
routerBlog.get('/getBlog', ctrl_blog.getBlog);
routerBlog.put('/likeBlog',verifyAccessToken, ctrl_blog.likeBlog);
module.exports = routerBlog;