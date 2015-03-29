var fs = require('fs');

exports.getTpls = function () {
  var tpls = [];

  fs.readdir (__base + 'views/tpls', function (err, files) {
    if (err) console.log(err);
    console.log(files);
  });

  return tpls;
}