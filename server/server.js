const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.js'))
})

app.listen(PORT);