var fs = require("fs"),
    tryit = require("tryit");

module.exports = readJSON;

function readJSON(filename, options, callback){
  if(callback === undefined){
    callback = options;
    options = {};
  }

  fs.readFile(filename, options, function(error, bf){
    var json,
        str = bf
            .tString()
            .replace(/^\ufeff/g, '');
    
    if (!error)
      tryit(function() {
        json = JSON.parse(str);
      }, function(err) {
        error = err;
      });
    
    callback(error, json);
  });
}
