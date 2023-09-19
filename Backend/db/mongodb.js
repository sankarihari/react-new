const mongoose = require('mongoose');
const mongodb_url = process.env.mongodb_url;
mongoose.connect(mongodb_url)
.then(()=>{
    console.log("Connected to DB");
})
.catch(()=>{
    console.log('Error!!!! Connection lost');
})