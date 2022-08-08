const express = require('express')
const app = express()
const port = 3000

var os = require('os')
var hostname = os.hostname();

var pid = process.pid;

const appVersion = "4.0";

app.get('/', (req, res) => {

  var msg = `<html><head><title>Simple NodeJS App</title></head>
  <body style="background-color:grey;">
  <h1>Hello World!</h1>
  <h2>
      Process ID: ${pid} <br> 
      Running on: ${hostname} <br>
      App Version: ${appVersion}
  </h2>
  </body></html>`

  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})