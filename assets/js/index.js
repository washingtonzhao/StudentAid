const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config();
mongoose.set('useFindAndModify', false);

// Set up express app/instance
const app = express();

// Key: mongodb+srv://{userName}:{password}@cluster0-ewizw.mongodb.net/CoronaResources?retryWrites=true&w=majority
let key = 'mongodb+srv://haejujeong:haejujeong@cluster0-ewizw.mongodb.net/CoronaResources?retryWrites=true&w=majority';

// Connect to mongoDB and sets to ES6 promise
mongoose.connect(key, { useNewUrlParser: true }, (err) =>{
    if(!err){
      console.log('Connection has been made successfully to mongoDB');
    }
    else{
      console.log('Connection error for mongoDB:', err);
    }
});

mongoose.Promise = global.Promise;