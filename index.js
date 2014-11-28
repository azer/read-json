var fs = require("fs");

module.exports = readJSON;

function readJSON(filename, options, callback){
  if(callback === undefined){
    callback = options;
    options = {};
  }

  fs.readFile(filename, 'utf8', function(error, bf){
    if(error) return callback(error);

    try {
      bf = JSON.parse(bf);
    } catch (err) {
      callback(err);
      return;
    }

    callback(undefined, bf);
  });
}
