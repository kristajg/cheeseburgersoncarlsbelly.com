const express = require('express');
const path = require('path');

var BUILD = path.join(__dirname, 'build'),
  PORT = 3000,
  app = express();

app.use(express.static(BUILD));

app.get("*", function (req, res) {
  res.sendFile(path.join(BUILD, 'index.html'));
});

app.listen(PORT);
