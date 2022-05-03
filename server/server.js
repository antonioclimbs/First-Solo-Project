const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, './client/index.html')))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;