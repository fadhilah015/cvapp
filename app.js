const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const path =  require('path');


const items = require ('./routes/api/items');


var app = express();


app.use(bodyParser.json());

const db = require ('./config/keys').mongoURI;

// mongoose  connection
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(()=> console.log('mongoDB connected.'))
  .catch (err => console.log());


// use routes

app.use('/api/items', items);
//sever static assetc if in production
if (process.env.NODE_ENV ==='production'){
  app.use(express.static('build'));
  app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.js'));



  });

}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port &{port}'));
