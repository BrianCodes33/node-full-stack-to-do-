var express = require('express');
var todoController = require('./controllers/todoController.js')

var app = express();

// setup template engine
app.set('view engine', 'ejs');

// static files

app.use(express.static('./public'));

// fire controllers
todoController(app);

app.listen(3000);

console.log('listen port 3000');
