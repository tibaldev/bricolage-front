/**
 * MODULES
 */
var express      = require('express')
  , app          = express()
  , swig         = require('swig')
  , bodyParser   = require('body-parser')
  , errorhandler = require('errorhandler')
  , morgan       = require('morgan')
  , config       = require('./config/local.js');


/**
 * CONFIGURATION
 */
app.engine('html', swig.renderFile);
app.set('port', process.env.PORT || config.local.port);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('env', process.env.ENV || config.local.env);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


/**
 * ROUTES
 */
var controller = require('./controller/index.js');
app.get('/', controller.index);


/**
 * SERVEUR
 */
if (app.get('env') == 'development') {
  app.use(errorhandler());
}

app.listen(app.get('port'), function() {
  console.log('Paf ' + app.get('port'));
});
