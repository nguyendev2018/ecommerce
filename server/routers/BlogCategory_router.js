const routerBlogCategory = require("express").Router();
const ctrlsBlogCategory = require("../controllers/blogCategory_ctrl");
routerBlogCategory.post('/createBlogCategory', ctrlsBlogCategory.createBlogCategory);
routerBlogCategory.get('/getBlogCategory', ctrlsBlogCategory.getBlogCategory);
routerBlogCategory.put('/updateBlogCategory/:linkId', ctrlsBlogCategory.updateBlogCategory);
routerBlogCategory.delete('/deleteBlogCategory/:linkId', ctrlsBlogCategory.deleteBlogCategory);
module.exports = routerBlogCategory;