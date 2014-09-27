var fs = require("fs");

module.exports = readJSON;

function readJSON(filename, callback){
function readJSON(filename, options, callback){
  if(callback === undefined){
    callback = options;
    options = {};
  }

  fs.readFile(filename, options, function(error, bf){
    if(error) return callback(error);

    try {
      bf = JSON.parse(bf.toString());
    } catch (err) {
      callback(err);
      return;
    }

    callback(undefined, bf);
  });
}
