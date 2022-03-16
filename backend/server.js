// configure dont env keys 
require('dotenv').config({path : "./config.env"});

const express = require('express');
const connectDB = require('./config/db');
// connection with the database 
connectDB();
const errorHandler = require('./middleware/errorHandler');
const app = express();

const PORT = process.env.PORT || 5000;
// middleware to parse json 
app.use(express.json());




app.use("/api/v1",require('./routes'));
// error handler middleware 
app.use(errorHandler);




const server = app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});



// catching the uncout error and closing the server 
process.on("unhandledRejection",(error,promise)=>{
    console.log(error.message);
    server.close(()=>promise.exit(1));
})