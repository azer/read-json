var test = require('prova');
var readJSON = require("./");

test('reads a JSON file', function (t) {
  readJSON('./package.json', function(error, manifest){
    t.equal(manifest.name, 'read-json');
    t.end();
  });
});

test('supports fs.readFile options', function (t) {
  readJSON('./package.json', {encoding: 'utf-8'}, function(error, manifest){
    t.equal(manifest.name, 'read-json');
    t.end();
  });
});
