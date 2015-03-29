var fs = require('fs');
var q = require('q');

// exports.getTpls = function () {
//   var deferred = q.defer();
//   fs.readdir ('./views/tpls', function (err, files) {
//     if (err) throw err;
//     deferred.resolve(files);
//   });
//   return deferred.promise;
// }


exports.getData = function () {
  var deferred = q.defer();
  var data = { tpls: [], keywords: []};

  fs.readdir ('./views/tpls', function (err, files) {
    if (err) throw err;
    var keywords = []
    files.forEach(function (file) {
      data.tpls.push(file);
      keywords = keywords.concat(getPromisedKeywords(file));
    })
    q.all(keywords).then(function () {
      keywords.forEach(function (tplKeywords) {
        tplKeywords.forEach(function (keyword) {
          if (data.keywords.indexOf(keyword) === -1) {
            data.keywords.push(keyword)
          }
        });
      });
      deferred.resolve(data);
    });
  });
  return deferred.promise;
}


function getPromisedKeywords (file) {
  var deferred = q.defer();
  fs.readFile('./views/tpls/' + file, 'utf-8', function (err, html) {
    var keywords = html.split('@tpl_keywords')[1].split('-->')[0].trim().split(',');
    deferred.resolve(keywords);
  });
  return deferred.promise;
}