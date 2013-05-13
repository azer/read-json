var readJSON = require("./");

it('reads a JSON file', function(done){

  readJSON('./package.json', function(error, manifest){
    expect(manifest.name).to.equal('read-json');
    done();
  });

});
