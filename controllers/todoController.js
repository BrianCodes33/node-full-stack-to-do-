var bodyParser = require('body-parser');

var data = [
  {item: 'get milk'},
  {item: 'walk dog'},
  {item: 'kick some coding ass'},
  {item: 'play music'}
]
var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app) {
    app.get('/todo', function(req, res) {
      res.render('todo', {todos: data})
    });
    app.post('/todo', urlencodedParser, function (req, res) {
      console.log('req')
      data.push(req.body);
      res.json(data);
    });
    app.delete('/todo/:item', function(req, res) {
      data = data.filter(function(todo) {
        return todo.item.replace(/ /g, '-') !== req.params.item
      });
      res.json(data)
    });
}
