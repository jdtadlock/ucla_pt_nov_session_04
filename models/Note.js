// function Note(db) {
//   db.query();
// }


var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ucla_04'
});

db.connect();

var Note = {
  create: function(response, data) {
    db.query('INSERT INTO notes SET ?', data, function(err, result) {
      if ( err ) return console.log(err);

      response.redirect('/');
    });
  },

  findAll: function(response) {
    db.query('SELECT * FROM notes', function (err, result) {
      if (err) return console.log(err);

      response.render('index', {
        test: 'some test',
        fruits: ['apple', 'orange', 'grape'],
        notes: result
      });
    });
  }
};

module.exports = Note;