
import express from 'express';
//const express = require("express");
const app = express();

/*
// Firearms route
app.get('/arms', (req, res) => {
    // Handle the request and send the appropriate response
    // This is where you would retrieve and populate the data for firearms
    res.send('This is the firearms page.');
  });
  
  // Ammunition route
  app.get('/munition', (req, res) => {
    // Handle the request and send the appropriate response
    // This is where you would retrieve and populate the data for ammunition
    res.send('This is the ammunition page.');
  });
  */
  
// Firearms route
app.get('/arms', (req, res) => {
    res.sendFile(__dirname + '/firearms.html');
  });
  
  // Ammunition route
  app.get('/munition', (req, res) => {
    res.sendFile(__dirname + '/ammunition.html');
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

//console.log(Math.random());
//console.dir(process, {depth: 0});
//console.log(arguments); returns array with exports, require, module, _filename, _dirname
/*
console.log('Hello');

module.exports = () => {
    console.log('Hello');
};

module.exports = () => {
    console.log('Hello');
};


export default {

}

import http from 'http';
//import http from 'express';
*/

