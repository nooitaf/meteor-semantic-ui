Package.describe({
  summary: "Semantic UI packaged for Meteor",
  version: "1.2.0",
  name: "nooitaf:semantic-ui",
  git: "https://github.com/nooitaf/meteor-semantic-ui.git"
});


Package.on_use(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery','client');

  var path = Npm.require('path');

  var assetPath = path.join('lib/semantic-ui/');
  var assetFiles = [
    assetPath + 'semantic.css',
    assetPath + 'semantic.js',
    assetPath + 'themes/basic/assets/fonts/icons.eot',
    assetPath + 'themes/basic/assets/fonts/icons.svg',
    assetPath + 'themes/basic/assets/fonts/icons.ttf',
    assetPath + 'themes/basic/assets/fonts/icons.woff',
    assetPath + 'themes/default/assets/fonts/icons.eot',
    assetPath + 'themes/default/assets/fonts/icons.otf',
    assetPath + 'themes/default/assets/fonts/icons.svg',
    assetPath + 'themes/default/assets/fonts/icons.ttf',
    assetPath + 'themes/default/assets/fonts/icons.woff',
    assetPath + 'themes/default/assets/images/flags.png'
  ];
  api.add_files(assetFiles, 'client');

  // jquery-address dependancy 
  // ----------------------------
  // (TODO: create package)
  // ----------------------------
  api.add_files('lib/jquery-address/jquery.address.js', 'client');

});














