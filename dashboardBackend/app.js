const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const signUp = require('./routes/sign-up')
const logIn= require('./routes/log-in')
const deleteProduct = require ("./routes/deleteProduct");
const updateProduct = require ("./routes/updateProduct");
const readProduct = require ("./routes/readProduct");
const companyRead= require('./routes/companyRead')
const createProduct= require ("./routes/createProduct");
const companyUpdate = require('./routes/companyUpdate')
const companyDelete = require('./routes/companyDelete')



const DB_CONNECTION_STRING= 'mongodb+srv://umer123:umer123@cluster0.4rplm.mongodb.net/?retryWrites=true&w=majority'


dotenv.config();
const app = express();
app.use(express.json())


const corsOptions = {
  exposedHeaders: "x-auth-token",
};


app.use(cors());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(signUp)
app.use(logIn)
app.use(deleteProduct)
app.use(updateProduct)
app.use(createProduct)
app.use(readProduct)
app.use(companyDelete)
app.use(companyUpdate)
app.use(companyRead)


app.listen(4000, (error) => {
  
    if (error) {
      console.error("Error Occurred while connecting to server: ", error);
    } else {
      console.log("Connected to Server Successfully!");
  
      console.log("Trying to connect to database server...");
  
      mongoose.connect(DB_CONNECTION_STRING, (dbError) => {
        if (dbError) {
          console.error("Error Occurred while connecting to database: ", dbError);
        } else {
          console.log("Connected to Database Successfully!");
        }
      });
    }
  });