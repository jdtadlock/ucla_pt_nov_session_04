var express = require('express');
var bodyParser = require('body-parser');
var Note = require('./models/Note');
var exphbs = require('express-handlebars');
var port = process.env.PORT || 5000;
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  Note.findAll(response);
})

app.post('/notes', function(request, response) {
  Note.create(response, request.body);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

































// STEP 1
// function test(num, str) {
//   console.log(num);
// }

// // STEP 2
// test('Some string', 10); // FUTURE ARGUMENTS OR DATA