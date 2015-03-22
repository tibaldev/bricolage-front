var Hapi = require('hapi');
var Path = require('path');
var Good = require('good');
var Swig = require('swig');

var config     = require('./config/default');
var controller = require('./controller/index');

var server = new Hapi.Server();
server.connection(config.server.connection);

// Configuration des vues
server.views({
  engines: {
    html: require('swig')
  },
  relativeTo: __dirname,
  path: './views'
});

// Routes
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: 'public',
      listing: false
    }
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: controller.index
});

// Serveur
server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', response: '*' }]
    }]
  }
}, function (err) {
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
