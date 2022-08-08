const express = require('express')
const app = express()
const port = 3000

var os = require('os')
var hostname = os.hostname();

var pid = process.pid;

const appVersion = "4.0";

app.get('/', (req, res) => {

  var msg = `<head> <style>
    #grad {
    height: 1000px;
    width: 100%;
    background-color: green;/* For browsers that do not support gradients */
    background-image: linear-gradient(to bottom right, #33ccff 0%, #ccffcc 100%);
    }
    html, body {
    height: 100%;
    }
    html {
    display: table;
    margin: auto;
    }
    body {
    display: table-cell;
    vertical-align: left;
    }
    </style></head>
    <h1>Hello World!</h1>
    <h2>
        Process ID: ${pid} <br> 
        Running on: ${hostname} <br>
        App Version: ${appVersion}
    </h2>`

  res.send(msg)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})