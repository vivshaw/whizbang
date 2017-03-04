var express = require('express');
var app = express();

app.use(express.static('static'));
app.set('views', 'templates');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index', {basedir: __dirname});
});

app.listen(process.env.PORT || 8080, function () {
  console.log('API is listening!');
});