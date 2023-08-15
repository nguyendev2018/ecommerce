const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
const routers = require('./routers');
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
dbConnect();
routers(app);
app.listen(port,()=>{
    console.log(`port`, port);
})