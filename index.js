var fs = require("fs");

module.exports = readJSON;

function readJSON(filename, options, callback){
  if(callback === undefined){
    callback = options;
    options = {};
  }

  fs.readFile(filename, options, function(error, bf){
    var json;
    
    if (!error)
      error = try(function() {
        json = JSON.parse(bf);
      });
    
    callback(error, json);
  });
}

function try(fn) {
  var error;
  
  try {
      fn();
    } catch (err) {
      error = err;
      return;
    }
  
  return error;
}
