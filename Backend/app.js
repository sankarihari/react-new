const express = require ("express");
const app = new express();

const morgan = require ("morgan");
app.use(morgan('dev'));

require('dotenv').config();

require('./db/mongodb');

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth") ;

app.use("api/auth", authRoute);
app.use("api/users", userRoute);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
});