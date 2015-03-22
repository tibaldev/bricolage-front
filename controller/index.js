/**
 * @todo
 * récupérer les mots clés automatiquement avec un système de doclet en entête du tpl :
 * @tpl_name     : node-var-to-angular
 * @tpl_keywords : nodejs, angular, preload
 */


/**
 * @todo
 * node : lister les fichiers tpls dans la vue
 * node : récupérer pour chaque fichier les infos doclet
 * node : insérer les données formatées dans le tableau data
 * angular : les afficher dans la vue avec ng-repeat et ng-include
 */

var data  = {
  keywords : [ 'angular', 'nodejs', 'css', 'npm', 'bower', 'bash' ],
  tpls : ['node-var-to-angular']
}




exports.index = function (request, reply) {
  reply.view('index', {data: data});
}
