var data = require(__base + 'json/data.json');

exports.index = function (req, res) {
  res.render('index', { data: data });
}
