const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('error', error => console.log(error) );

require('./auth/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});