'use strict';

const express = require('express');

// Constants
const PORT = 8080;
var os = require('os')
var HOST = os.hostname();
var pid = process.pid;
const appVersion = "4.0";

// App
const app = express();
app.get('/', (req, res) => {

  var msg = `<html><head><title>Simple NodeJS App</title></head>
  <body style="background: linear-gradient(to bottom, #ccffcc 0%, #ffffff 100%);">
  <h1><p style="color:black;">Hello World!</p></h1>
  <h2><p style="color:maroon;">
      ----------------------<br>
      INFORMATION <br>
      ---------------------- <br>
      Process ID: ${pid} <br> 
      Running on: ${HOST} <br>
      App Version: ${appVersion}
  </p></h2>
  </body></html>`
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);