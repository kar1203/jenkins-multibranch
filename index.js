const express = require('express')
const app = express()
const port = 3000

var os = require('os')
var hostname = os.hostname();

var pid = process.pid;

const appVersion = "4.0";

app.get('/', (req, res) => {

  var msg = `<html><head><title>Simple NodeJS App</title></head>
  <body style="background: linear-gradient(to top right, #99ffcc 0%, #ff99cc 100%);">
  <h1><p style="color:black;">Hello World!</p></h1>
  <h2><p style="color:maroon;">
      ----------------------<br>
      INFORMATION <br>
      ---------------------- <br>
      Process ID: ${pid} <br> 
      Running on: ${hostname} <br>
      App Version: ${appVersion}
  </p></h2>
  </body></html>`

  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})