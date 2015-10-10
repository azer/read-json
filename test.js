var test = require('prova');
var fs = require("fs");
var read = require("./");

test('reads a JSON file', function (t) {
  t.plan(2);

  read('./package.json', function(error, manifest){
    t.error(error);
    t.equal(manifest.name, 'read-json');
  });
});

test('supports fs.readFile options', function (t) {
  t.plan(2);

  read('./package.json', {encoding: 'utf-8'}, function(error, manifest){
    t.error(error);
    t.equal(manifest.name, 'read-json');
  });
});

test('fails when file is missing', function (t) {
  t.plan(2);

  read('./missing.json', function(error, doc){
    t.ok(error);
    t.notOk(doc);
  });
});

test('fails when JSON is invalid', function (t) {
  fs.writeFileSync('/tmp/invalid.json', '}}}');

  t.plan(2);
  read('/tmp/invalid.json', function (error, doc) {
    t.ok(error);
    t.notOk(doc);
  });
});

test('the sync option', function (t) {
  t.plan(1);
  var manifest = read.sync('./package.json');
  t.equal(manifest.name, 'read-json');
});

test('the sync option with missing file', function (t) {
  t.plan(1);

  try {
    read.sync('non-existing.json');
  } catch (err) {
    t.ok(err);
  }
});

test('the sync option with invalid JSON file', function (t) {
  fs.writeFileSync('/tmp/invalid.json', '}}}');

  t.plan(1);

  try {
    read.sync('/tmp/invalid.json');
  } catch (err) {
    t.ok(err);
  }
});
