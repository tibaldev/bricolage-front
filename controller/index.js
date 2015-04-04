var fsUtils = require('./fs-utils');
var data = { 
  tpls: [],
  keywords : []
};

exports.index = function (request, reply) {
  fsUtils.getData().then(function (data) {
    reply.view('index', { data: data });
  });
}

exports.notfound = function (request, reply) {
  reply.view('404', { data: data }).code(404);
}
