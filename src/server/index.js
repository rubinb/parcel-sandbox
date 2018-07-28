const express = require('express');
const app = express();
const fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ** sample mock data for local development

app.get('/navlinks', (req, res) => {
  const data = JSON.parse(fs.readFileSync('../../data/navigation.json'));
  res.send(data);
});

app.listen(3000, () => console.log('App listening on port 3000'));