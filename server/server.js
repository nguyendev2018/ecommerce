const express = require('express');

const dbConnect = require('./config/dbConnect');
const routers = require('./routers');
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(cors({
    origin : process.env.URL_CLIENT,
    methods : ["POST","PUT","GET","DELETE"]
}))
const port = process.env.PORT || 5000;
// là middleware được xử lý và phân tích các cookies 
const cookiesParser = require('cookie-parser');
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({extended: true}));
dbConnect();
routers(app);
app.listen(port,()=>{
    console.log(`port`, port);
})