const express = require('express');
const app = express();

app
  .get('/*', (req, res) => {
    res.send(req.url)
  })
  .listen(8080);
