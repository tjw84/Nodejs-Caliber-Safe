//import utils from 'util';
//import express from 'express';
const express = require("express");
const app = express();


const path = require("path");
const router = express.Router();


// Firearms route
app.get('/arms', (req, res) => {
    res.sendFile(__dirname + '/arms.html');
  });
  
  // Ammunition route
  app.get('/munition', (req, res) => {
    res.sendFile(__dirname + '/munition.html');
  });

  router.get('/index',(req,res) => {
    res.sendFile(__dirname+'/index.html');
    //__dirname : It will resolve to your project folder.
  });

  /*
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
*/

app.use(express.static('public'));

/*
 app.listen(8080, function () {
   console.log('Server listening on port 8080!');
 });
*/

 
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
  });

 //add the router
app.use('/', router);
app.listen(process.env.port || 3000); 