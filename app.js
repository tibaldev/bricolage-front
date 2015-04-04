var Hapi = require('hapi');
// var Path = require('path');
var Swig = require('swig');

var config     = require('./config/default');
var controller = require('./controller/index');

var server = new Hapi.Server();
server.connection(config.server.connection);
Swig.setDefaults({ 
  cache: false,
  locals: require(__dirname + '/config/locals.js'), 
});

// configuration des vues
server.views({
  engines: {
    html: Swig
  },
  isCached: false,
  relativeTo: __dirname,
  path: './views'
});


// fichiers statics 
server.route({
  method: 'GET',
  path: '/dist/{path*}',
  handler: {
    directory: {
      path: 'dist',
      listing: false
    }
  }
});


// index
server.route({
  method: 'GET',
  path: '/',
  handler: controller.index
});


// tpls
server.route({
  method: 'GET',
  path: '/tpls/{path*}',
  handler: {
    directory: {
      path: 'views/tpls',
      listing: false
    }
  }
});


// 404
server.route({ 
  method: 'GET', 
  path: '/{path*}',
  handler: controller.notfound
});


// serveur
server.register([
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        args:[{ log: '*', response: '*' }]
      }]
    }
  }
], function (err) {
    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start(function () {
      server.log('info', 'PAF : ' + server.info.uri);
    });
});




// /**
//  * MODULES
//  */
// var express      = require('express')
//   , app          = express()
//   , swig         = require('swig')
//   , bodyParser   = require('body-parser')
//   , errorhandler = require('errorhandler')
//   , morgan       = require('morgan')
//   , config       = require('./config/local.js');


// /**
//  * CONFIGURATION
//  */
// app.engine('html', swig.renderFile);
// app.set('port', process.env.PORT || config.local.port);
// app.set('view engine', 'html');
// app.set('view cache', false);
// app.set('views', __dirname + '/views');
// app.set('env', process.env.ENV || config.local.env);
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// swig.setDefaults({ cache: false });
// global.__base = __dirname + '/';


// /**
//  * ROUTES
//  */
// var controller = require('./controller/index.js');
// app.get('/', controller.index);


// /**
//  * SERVEUR
//  */
// if (app.get('env') == 'development') {
//   app.use(errorhandler());
// }

// app.listen(app.get('port'), function() {
//   console.log('Paf ' + app.get('port'));
// });
