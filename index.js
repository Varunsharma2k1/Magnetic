var express = require('express');
var app = express();
const axios = require('axios');
var port = process.env.PORT || 8000;
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    // Fetch data from an external API or perform any other operations
    const data = { message: 'Hello this is a connection of node and react' };
    res.json(data);
  });


app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});